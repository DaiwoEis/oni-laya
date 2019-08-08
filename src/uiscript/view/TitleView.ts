import FadeControl from "../extend/FadeControl";
import GameUtility from "../../core/GameUtility";
import SceneManager from "../../gameplay/SceneManager";
import PlayerControl from "../../script/other/PlayerControl";

enum STEP {
    NONE = -1,

    TITLE = 0,             
    WAIT_SE_END,            
    FADE_WAIT,   

    NUM,
};

export default class TitleView extends Laya.Script {

    private fader: FadeControl;

    
    private step: STEP = STEP.NONE;
    private nextStep: STEP = STEP.NONE;
    private stepTimer: number = 0.0;
    
    private startImg: Laya.Image;       
    
    private TITLE_ANIME_TIME: number = 0.1;
    private FADE_TIME: number = 1.0;    

    public onAwake(): void {
        this.fader = GameUtility.getChildByName<Laya.Sprite>(this.owner, "fade").getComponent(FadeControl);        
        this.startImg = GameUtility.getChildByName<Laya.Image>(this.owner, "start");
    }

    public onKeyDown(e: Laya.Event): void {

    }

    public onStart(): void {
        // PlayerControl player = GameObject.FindGameObjectWithTag("Player").GetComponent<PlayerControl>();
        // player.UnPlayable();

        this.nextStep = STEP.TITLE;
        this.fader.fade(this.FADE_TIME, new Laya.Color(0.0, 0.0, 0.0, 1.0), new Laya.Color(0.0, 0.0, 0.0, 0.0));
    }

    public onClick(e: Laya.Event): void {
        if (this.step == STEP.TITLE) {
            //this.nextStep = STEP.WAIT_SE_END;
            let player = GameUtility.getChildByName<Laya.Sprite3D>(SceneManager.instance.getActive3DScene(), "Player").getComponent(PlayerControl) as PlayerControl;
            player.normalAttack();
        }
    }

    public onMouseDown(e: Laya.Event): void {
        let player = GameUtility.getChildByName<Laya.Sprite3D>(SceneManager.instance.getActive3DScene(), "Player").getComponent(PlayerControl) as PlayerControl;
        player.startSpecialAttack();
    }

    public onMouseUp(e: Laya.Event): void {
        let player = GameUtility.getChildByName<Laya.Sprite3D>(SceneManager.instance.getActive3DScene(), "Player").getComponent(PlayerControl) as PlayerControl;
        player.stopSpecialAttack();
    }    

    public onUpdate(): void {
        this.stepTimer += Laya.timer.delta * 0.001;
        
        switch (this.step) {
            case STEP.FADE_WAIT: {                    
                    if (!this.fader.isActive()) {
                        console.log("load next scene");
                        //UnityEngine.SceneManagement.SceneManager.LoadScene("GameScene");
                    }
                }
                break;
        }

        if (this.nextStep != STEP.NONE) {
            switch (this.nextStep) {
                case STEP.WAIT_SE_END: {
                        Laya.SoundManager.playSound("sound/oni_system01.wav", 1, new Laya.Handler(null, () => {
                            this.fader.fade(this.FADE_TIME, new Laya.Color(0.0, 0.0, 0.0, 0.0), new Laya.Color(0.0, 0.0, 0.0, 1.0));
                            this.nextStep = STEP.FADE_WAIT;
                        }));
                    }
                    break;
            }

            this.step = this.nextStep;
            this.nextStep = STEP.NONE;

            this.stepTimer = 0.0;
        }

        switch (this.step) {
            case STEP.WAIT_SE_END: {
                    let rate = this.stepTimer / this.TITLE_ANIME_TIME;
                    if (rate > 1) {
                        rate = 1;
                    }
                    let scale = Laya.MathUtil.lerp(2.0, 1.0, rate);
                    this.startImg.scale(scale, scale);
                }
                break;
        }
    }
}