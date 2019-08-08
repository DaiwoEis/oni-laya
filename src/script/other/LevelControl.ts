import PlayerControl from "./PlayerControl";
import SceneManager from "../../gameplay/SceneManager";
import { MathUtility } from "../../core/MathUtility";
import { ONI_GROUP_TYPE, ONI_GROUP } from "./OniGroupControl";

enum GROUP_TYPE {
    NONE = -1,

    SLOW = 0,           // おそい.
    DECELERATE,         // 途中で減速.
    PASSING,            // ふたつのグループで追い抜き.
    RAPID,              // 超短い間隔で.

    NORMAL,             // ふつう.

    NUM,
};

export default class LevelControl extends Laya.Script3D {
    public oniGroupPrefab: Laya.Sprite3D;

    //public SceneControl sceneControl = null;
    private player: PlayerControl;
    private playerTransform: Laya.Transform3D;

    private oniGenerateLine: number

    private appearMargin = 15.0;

    private oniAppearNum = 1;

    private noMissCount = 0;

    public groupType = GROUP_TYPE.NORMAL;
    public groupTypeNext = GROUP_TYPE.NORMAL;

    private canDispatch = false;

    public isRandom = true;

    private normalGenrateLineDist = 50.0;

    private nextSpeed = 2 * 5.0;

    private normalCount = 5;

    private eventCount = 1;

    private eventType = GROUP_TYPE.NONE;

    public INTERVAL_MIN = 20.0;       
    public INTERVAL_MAX = 50.0;            

    public onStart(): void {             
        this.player = SceneManager.instance.getActive3DScene().getChildByName("Player").getComponent(PlayerControl);   
        this.playerTransform = (this.player.owner as Laya.Sprite3D).transform; 
        this.oniGenerateLine = (this.player.owner as Laya.Sprite3D).transform.position.x - 1.0;
    }

    public onPlayerMissed(): void {        
        this.oniAppearNum = 1;
        this.noMissCount = 0;
    }

    private noOniInScene(): boolean {
        // return GameObject.FindGameObjectsWithTag("OniGroup").Length == 0;
        return true;
    }

    public oniAppearControl(): void {
        if (this.canDispatch) {

        } else {
            if (this.isExclusiveGroup()) {
                if (this.noOniInScene()) {
                    this.canDispatch = true;
                }
            } else {
                this.canDispatch = true;
            }

            if (this.canDispatch) {
                if (this.groupTypeNext == GROUP_TYPE.NORMAL){
                    this.oniGenerateLine = this.playerTransform.position.x + this.normalGenrateLineDist;
                } else if (this.groupTypeNext == GROUP_TYPE.SLOW) {
                    this.oniGenerateLine = this.playerTransform.position.x + 50.0;
                } else {
                    this.oniGenerateLine = this.playerTransform.position.x + 10.0;
                }
            }
        }

        do {
            // if (this.sceneControl.oni_group_num >= this.sceneControl.oni_group_appear_max) {
            //     break;
            // }
            if (!this.canDispatch) {
                break;
            }
            if (this.playerTransform.position.x <= this.oniGenerateLine) {
                break;
            }
            this.groupType = this.groupTypeNext;

            switch (this.groupType) {
                case GROUP_TYPE.SLOW: {
                    this.dispatchSlow();
                    break;
                }
                case GROUP_TYPE.DECELERATE: {
                    this.dispatchDecelerate();
                    break;
                }
                case GROUP_TYPE.PASSING: {
                    this.dispatchPassing();
                    break;
                }
                case GROUP_TYPE.RAPID: {
                    this.dispatchRapid();
                    break;
                }
                case GROUP_TYPE.NORMAL: {
                    this.dispatchNormal(this.nextSpeed);
                    break;
                }
            }

            this.oniAppearNum++;
            //this.oniAppearNum = Math.min(this.oniAppearNum, SceneControl.ONI_APPEAR_NUM_MAX);

            this.canDispatch = false;
            this.noMissCount++;

            //this.sceneControl.oni_group_num++;

            if (this.isRandom) {
                this.selectNextGroupType();
            }

        } while (false);
    }

    public isExclusiveGroup(): boolean {
        let ret: boolean;
        do {
            ret = true;
            if (this.groupType == GROUP_TYPE.PASSING || this.groupTypeNext == GROUP_TYPE.PASSING) {
                break;
            }
            if (this.groupType == GROUP_TYPE.DECELERATE || this.groupTypeNext == GROUP_TYPE.DECELERATE) {
                break;
            }
            if (this.groupType == GROUP_TYPE.SLOW || this.groupTypeNext == GROUP_TYPE.SLOW) {
                break;
            }
            ret = false;
        } while (false);
        return ret;
    }

    public selectNextGroupType() {
        if (this.eventType != GROUP_TYPE.NONE) {
            this.eventCount--;
            if (this.eventCount <= 0) {
                this.eventType = GROUP_TYPE.NONE;
                this.normalCount = MathUtility.randomRange(3, 7);
            }
        } else {
            this.normalCount--;
            if (this.normalCount <= 0) {
                this.eventType = <GROUP_TYPE>(MathUtility.randomRange(0, 4));
                switch (this.eventType) {
                    default:
                    case GROUP_TYPE.DECELERATE:
                    case GROUP_TYPE.PASSING:
                    case GROUP_TYPE.SLOW: {
                        this.eventCount = 1;
                        break;
                    }
                    case GROUP_TYPE.RAPID: {
                        this.eventCount = MathUtility.randomRange(2, 4);
                        break;
                    }
                }
            }
        }

        if (this.eventType == GROUP_TYPE.NONE) {
            let rate = this.noMissCount / 10.0;
            rate = MathUtility.clamp(rate, 0, 1);

            this.nextSpeed = MathUtility.lerp(ONI_GROUP.SPEED_MAX, ONI_GROUP.SPEED_MIN, rate);
            this.normalGenrateLineDist = MathUtility.lerp(this.INTERVAL_MAX, this.INTERVAL_MIN, rate);

            this.groupTypeNext = GROUP_TYPE.NORMAL;

        } else {
            this.groupTypeNext = this.eventType;
        }

    }

    public dispatchNormal(speed: number): void {
        let appearPosition = this.playerTransform.position;        
        appearPosition.x += this.appearMargin;
        this.CreateOniGroup(appearPosition, speed, ONI_GROUP_TYPE.NORMAL);
    }

    public dispatchSlow(): void {
        let appearPosition = this.playerTransform.position;        
        appearPosition.x += this.appearMargin;
        this.CreateOniGroup(appearPosition, ONI_GROUP.SPEED_MIN * 5.0, ONI_GROUP_TYPE.NORMAL);
    }

    public dispatchRapid(): void {
        let appearPosition = this.playerTransform.position;        
        appearPosition.x += this.appearMargin;        
        this.CreateOniGroup(appearPosition, this.nextSpeed, ONI_GROUP_TYPE.NORMAL);
    }

    public dispatchDecelerate(): void {
        let appearPosition = this.playerTransform.position;        
        appearPosition.x += this.appearMargin;
        this.CreateOniGroup(appearPosition, 9.0, ONI_GROUP_TYPE.DECELERATE);
    }
    
    public dispatchPassing(): void {
        let speedLow = 2.0;
        let speedRate = 2.0;
        let playerSpeed = (this.player.owner.getComponent(Laya.RigidBody) as Laya.RigidBody).linearVelocity.x;
        let speedHigh = (speedLow - playerSpeed) / speedRate + playerSpeed;

        let passingPoint = 0.5;
        let appearPosition = this.playerTransform.position;
        appearPosition.x = this.playerTransform.position.x + this.appearMargin;

        this.CreateOniGroup(appearPosition, speedHigh, ONI_GROUP_TYPE.NORMAL);

        appearPosition.x = this.playerTransform.position.x + this.appearMargin * MathUtility.lerp(speedRate, 1.0, passingPoint);

        this.CreateOniGroup(appearPosition, speedLow, ONI_GROUP_TYPE.NORMAL);
    }

    private CreateOniGroup(appearPosition: Laya.Vector3, speed: number, type: ONI_GROUP_TYPE): void {
        let position = appearPosition;
        // GameObject go = GameObject.Instantiate(this.oniGroupPrefab) as GameObject;

        // OniGroupControl newGroup = go.GetComponent<OniGroupControl>();

        // // 地面に接する高さ.
        // position.y = OniGroupControl.collision_size / 2.0f;

        // position.z = 0.0f;

        // newGroup.transform.position = position;

        // newGroup.scene_control = this.sceneControl;
        // newGroup.main_camera = this.sceneControl.main_camera;
        // newGroup.player = this.player;
        // newGroup.runSpeed = speed;
        // newGroup.type = type;

        // // -------------------------------------------------------- //
        // // グループに属するオニの集団を生成する.

        // Vector3 basePosition = position;

        // int oniNum = this.oniAppearNum;

        // // コリジョンボックスの左端によせる.
        // basePosition.x -= (OniGroupControl.collision_size / 2.0f - OniControl.collision_size / 2.0f);

        // // 地面に接する高さ.
        // basePosition.y = OniControl.collision_size / 2.0f;

        // // オニを発生させる.
        // newGroup.CreateOnis(oniNum, basePosition);

    }
}
