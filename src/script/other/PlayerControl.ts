import GameUtility from "../../core/GameUtility";
import { PhysicsUtility } from "../../gameplay/PhysicsUtility";
import { MathUtility } from "../../core/MathUtility";
import AttackColliderControl from "./AttackColliderControl";
import PlayerAnimationEventControl from "./PlayerAnimationEventControl";

enum ATTACK_MOTION {
    NONE = -1,

    RIGHT = 0,
    LEFT,

    NUM,
}

enum STEP {
    NONE = -1,

    RUN = 0,        
    STOP,          
    MISS,          
    NUM,
}

enum SpecialAttackStage {
    Start,
    Rolling,
    End
}

enum AttackState {
    Idle,
    NormalAttack,
    SpecialAttack
}

export default class PlayerControl extends Laya.Script3D {

    
    private rig: Laya.Rigidbody3D;
    private animator: Laya.Animator;
    
    private attackSound: string[];             
    private swordSound = "oni_player01";                 
    private swordHitSound = "oni_player02";             
    private missSound = "oni_player06";                 
    private runSound = "oni_player07";  
    private attackSoundIdx = 0;      

    private runSpeed = 5;

    private RUN_SPEED_MAX = 20.0;
    private RUN_SPEED_ADD = 5.0;
    private RUN_SPEED_SUB = 5.0 * 4.0;
    private GRAVITY = 9.8;
    private MISS_GRAVITY = 9.8 * 2.0;

    private attackCollider: AttackColliderControl;

    //private sceneControl: SceneControl;
    
    private attackTimer = 0.0;
    private attackDisableTimer = 0.0;
    private ATTACK_TIME = 0.3;
    private ATTACK_DISABLE_TIME = 1.0;
    
    private isRunning = true;
    private isContactFloor = false;
    private isPlayable = true;
    
    private stopPosition = -1.0;
    
    private attackMotion = ATTACK_MOTION.LEFT;
    
    // public kiseki_left: AnimatedTextureExtendedUV = null;
    // public kiseki_right: AnimatedTextureExtendedUV = null;
    
    private fxHit: Laya.ShuriKenParticle3D = null;
    private fxRun: Laya.ShuriKenParticle3D = null;
    
    private minRate = 0.0;
    private maxRate = 3.0;
    
    private step = STEP.NONE;
    private nextStep = STEP.NONE;

    private attackState: AttackState = AttackState.Idle;
    private specialAttackStage: SpecialAttackStage = SpecialAttackStage.End;
    
    public onAwake(): void {
        this.rig = this.owner.getComponent(Laya.Rigidbody3D) as Laya.Rigidbody3D;    
        this.rig.angularFactor = new Laya.Vector3(0, 0, 0);   
        this.rig.collisionGroup = PhysicsUtility.PLAYER_LAYER;
        this.rig.canCollideWith = PhysicsUtility.ENV_LAYER | PhysicsUtility.ENEMY_LAYER;

        GameUtility.getChildByName<Laya.SkinnedMeshSprite3D>(this.owner, "chibi").skinnedMeshRenderer.castShadow = true;         
        GameUtility.getChildByName<Laya.SkinnedMeshSprite3D>(this.owner, "dekaino").skinnedMeshRenderer.castShadow = true;   

        this.animator = GameUtility.getChildByName<Laya.Sprite3D>(this.owner, "model_samurai").getComponent(Laya.Animator);     

        this.attackCollider = GameUtility.getChildByName<Laya.Sprite3D>(this.owner, "AttackCollider").addComponent(AttackColliderControl);
        this.attackCollider.player = this;

        let attckCol = GameUtility.getChildByName<Laya.Sprite3D>(this.owner, "AttackCollider").getComponent(Laya.PhysicsCollider) as Laya.PhysicsCollider;
        attckCol.collisionGroup = PhysicsUtility.PLAYER_LAYER;
        attckCol.canCollideWith = PhysicsUtility.ENEMY_LAYER;

        this.attackSound = ["oni_player03", "oni_player04", "oni_player05"];

        let cop = GameUtility.getChildByName<Laya.Sprite3D>(this.owner, "model_samurai").addComponent(PlayerAnimationEventControl) as PlayerAnimationEventControl;
        cop.playerControl = this;
    }

    public onStart(): void {
        // this.attack_collider = GameObject.FindGameObjectWithTag("AttackCollider").GetComponent<AttackColliderControl>();

        // this.attack_collider.player = this;

        // this.kiseki_left = GameObject.FindGameObjectWithTag("FX_Kiseki_L").GetComponent<AnimatedTextureExtendedUV>();
        // this.kiseki_left.StopPlay();

        // this.kiseki_right = GameObject.FindGameObjectWithTag("FX_Kiseki_R").GetComponent<AnimatedTextureExtendedUV>();
        // this.kiseki_right.StopPlay();

        this.fxHit = GameUtility.getChildByName<Laya.ShuriKenParticle3D>(this.owner, "OniHitParticle Prefab");
        this.fxRun = GameUtility.getChildByName<Laya.ShuriKenParticle3D>(this.owner, "OniRunParticle Prefab");
        this.fxHit.particleSystem.stop();
        this.fxRun.particleSystem.stop();

        this.runSpeed = 0.0;
        this.nextStep = STEP.RUN;
        this.playSound(this.runSound, 0);        
    }

    public playSwordSound(): void {
        this.playSound(this.swordSound);  
    }

    private playSound(name: string, loops?: number): void {
        Laya.SoundManager.playSound(`sound/${name}.wav`, loops);
    }

    public onUpdate(): void {
        this.minRate = MathUtility.clamp(this.minRate, 0.0, this.maxRate);
        this.maxRate = MathUtility.clamp(this.maxRate, this.minRate, 5);

        if (this.nextStep == STEP.NONE) {
            switch (this.step) {
                case STEP.RUN: {
                    if (!this.isRunning) {
                        if (this.runSpeed <= 0.0) {
                            this.fxRun.particleSystem.stop();
                            this.nextStep = STEP.STOP;
                        }
                    }
                    break;
                }
                case STEP.MISS: {
                    if (this.isContactFloor) {
                        this.fxRun.particleSystem.play();
                        this.rig.gravity = new Laya.Vector3(0, this.GRAVITY, 0);
                        this.nextStep = STEP.RUN;
                    }
                    break;
                }
            }
        }

        if (this.nextStep != STEP.NONE) {
            switch (this.nextStep) {
                case STEP.STOP: {
                    this.animator.crossFade("stop", 0.2);
                    break;
                }
                case STEP.MISS: {
                    let velocity = this.rig.linearVelocity;
                    let jumpHeight = 1.0;
                    velocity.x = 2.5;
                    velocity.y = Math.sqrt(this.MISS_GRAVITY * jumpHeight);
                    velocity.z = 0.0;
                    this.rig.linearVelocity = velocity;
                    this.rig.gravity = new Laya.Vector3(0, this.MISS_GRAVITY, 0); 
                    this.runSpeed = 0.0;
                    this.animator.crossFade("yarare", 0.2);
                    this.playSound(this.missSound);
                    this.fxRun.particleSystem.stop();
                    break;
                }
                case STEP.RUN: {
                    this.animator.crossFade("run", 0.2);
                    break;
                }
            }
            this.step = this.nextStep;
            this.nextStep = STEP.NONE;
        }

        switch (this.step) {
            case STEP.RUN: {
                if (this.isRunning) {
                    this.runSpeed += this.RUN_SPEED_ADD * Laya.timer.delta * 0.001;
                } else {
                    this.runSpeed -= this.RUN_SPEED_SUB * Laya.timer.delta * 0.001;
                }
                this.runSpeed = MathUtility.clamp(this.runSpeed, 0.0, this.RUN_SPEED_MAX);
                let newVelocity = this.rig.linearVelocity;
                newVelocity.x = -this.runSpeed;
                if (newVelocity.y > 0.0) {
                    newVelocity.y = 0.0;
                }
                this.rig.linearVelocity = newVelocity;

                //this.attackControl();

                //this.swordFxControl();

                break;
            }
        }

        this.isContactFloor = false;
    }


    public onCollisionStay(collision: Laya.Collision): void {
        if (collision.other.owner.name == "OniGroup") {
            do {
                if (this.attackTimer > 0.0) {
                    break;
                }
                if (this.step == STEP.MISS) {
                    break;
                }
                this.nextStep = STEP.MISS;

                //this.scene_control.OnPlayerMissed();

                // OniGroupControl oniGroup = other.gameObject.GetComponent<OniGroupControl>();

                // oniGroup.OnPlayerHitted();

            } while (false);
 
        } else if (collision.other.owner.name == "map2") {
            this.isContactFloor = true;
        }
    }

    public onCollisionEnter(collision: Laya.Collision): void {
        this.onCollisionStay(collision);
    }


    public onAttackOni(postion: Laya.Vector3): void {
        this.resetAttackDisableTimer();
        this.playHitEffect(postion);
        this.playHitSound();
    }

    private playHitEffect(position: Laya.Vector3): void {
        this.fxHit.transform.position = position;
        this.fxHit.particleSystem.play();
    }

    private playHitSound(): void {
        this.playSound(this.swordHitSound);
    }

    private resetAttackDisableTimer(): void {
        this.attackDisableTimer = 0.0;
    }

    public getAttackTimer(): number {
        return (this.ATTACK_TIME - this.attackTimer);
    }

    public GetSpeedRate(): number {    
        let playerSpeedRate = MathUtility.inverseLerp(0.0, this.RUN_SPEED_MAX, Laya.Vector3.scalarLength(this.rig.linearVelocity));
        return playerSpeedRate;
    }

    public stopRequest(): void {
        this.isRunning = false;
    }

    public playable() {
        this.isPlayable = true;
    }

    public unPlayable() {
        this.isPlayable = false;
    }

    public isStopped(): boolean {
        let isStopped = false;
        do {
            if (this.isRunning) {
                break;
            }
            if (this.runSpeed > 0.0) {
                break;
            }
            isStopped = true;
        } while (false);
        return isStopped;
    }

    public calcDistanceToStop(): number {
        let distance = Laya.Vector3.scalarLength(this.rig.linearVelocity) / (2.0 * this.RUN_SPEED_SUB);
        return distance;
    }

    public startSpecialAttack(): void {
        if (!this.isPlayable) {
            return;
        }

        if (this.attackState != AttackState.Idle) {
            return;
        }

        this.attackState = AttackState.SpecialAttack;

        this.specialAttackStage = SpecialAttackStage.Start;
        this.attackCollider.setPowered(true);
        this.animator.crossFade("attack_rot_s", 0.2);
        Laya.timer.once(200, null, () => {
            this.specialAttackStage = SpecialAttackStage.Rolling;
            this.animator.play("attack_rot");
        })
        this.playSound(this.swordSound);  
        this.attackTimer = 0.315;
        this.playSound(this.attackSound[2]);                
    }

    public stopSpecialAttack(): void {
        if (this.attackState != AttackState.SpecialAttack) {
            return;
        }

        this.attackCollider.setPowered(false);
        this.specialAttackStage = SpecialAttackStage.End;
        this.animator.play("attack_rot_e");
        Laya.timer.once(500, null, () => {
            this.animator.crossFade("run", 0.2);
            Laya.timer.once(this.attackDisableTimer * 1000, null, () => {
                this.attackState = AttackState.Idle;
            })
        })
    }

    private attackControl(): void {
        if (this.attackState == AttackState.SpecialAttack) {
            this.attackTimer -= Laya.timer.delta * 0.001;
            if (this.attackTimer < 0) {
                this.playSound(this.swordSound);  
                this.attackTimer = 0.315;
            }
        }
    }

    public normalAttack(): void {
        if (!this.isPlayable) {
            return;
        }

        if (this.attackState != AttackState.Idle) {
            return;
        }

        this.attackState = AttackState.NormalAttack;

        this.attackCollider.setPowered(true);
        Laya.timer.once(this.ATTACK_TIME * 1000, null, () => {
            this.attackCollider.setPowered(false);
            Laya.timer.once(this.ATTACK_DISABLE_TIME * 1000, null, () => {
                this.attackState = AttackState.Idle;
            })
        });

        switch (this.attackMotion) {
            default:
            case ATTACK_MOTION.RIGHT: this.attackMotion = ATTACK_MOTION.LEFT; break;
            case ATTACK_MOTION.LEFT: this.attackMotion = ATTACK_MOTION.RIGHT; break;
        }
        switch (this.attackMotion) {
            default:
            case ATTACK_MOTION.RIGHT: this.animator.crossFade("attack_r", 0.2); break;
            case ATTACK_MOTION.LEFT: this.animator.crossFade("attack_l", 0.2); break;
        }

        Laya.timer.once(600, null, () => {
            this.animator.crossFade("run", 0.2);
        })

        this.playSound(this.attackSound[this.attackSoundIdx]);
        this.attackSoundIdx = (this.attackSoundIdx + 1) % this.attackSound.length;
        this.playSound(this.swordSound);      
    }

//     private void sword_fx_control()
//     {

//         do
//         {

//             if (this.attackTimer <= 0.0f)
//             {
//                 break;
//             }

//             Animator animator = this.GetComponentInChildren<Animator>();

//             AnimatorStateInfo state_info = animator.GetCurrentAnimatorStateInfo(0);
//             AnimatorClipInfo clip_info = animator.GetCurrentAnimatorClipInfo(0)[0];
//             AnimationClip clip = clip_info.clip;

//             AnimatedTextureExtendedUV anim_player;

//             switch (this.attack_motion)
//             {

//                 default:
//                 case ATTACK_MOTION.RIGHT:
//                     {
//                         anim_player = this.kiseki_right;
//                     }
//                     break;

//                 case ATTACK_MOTION.LEFT:
//                     {
//                         anim_player = this.kiseki_left;
//                     }
//                     break;
//             }

//             float start_frame = 2.5f;
//             float start_time = start_frame / clip.frameRate;
//             float current_time = state_info.normalizedTime * state_info.length;

//             if (current_time < start_time)
//             {
//                 break;
//             }

//             anim_player.StartPlay(current_time - start_time);

//         } while (false);
//     }
}