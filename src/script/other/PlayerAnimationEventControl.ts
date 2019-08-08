import PlayerControl from "./PlayerControl";

export default class PlayerAnimationEventControl extends Laya.Script3D {

    public playerControl: PlayerControl;
    
    public playSwordSound(): void {
        this.playerControl.playSwordSound();
    }
}