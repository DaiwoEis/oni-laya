import SceneManager from "../../gameplay/SceneManager";

export default class CameraControl extends Laya.Script3D {

    private playerSprite: Laya.Sprite3D;
    private root: Laya.Sprite3D;

    public onAwake(): void {
        this.playerSprite = SceneManager.instance.getActive3DScene().getChildByName("Player") as Laya.Sprite3D;
        this.root = this.owner as Laya.Sprite3D;
    }

    public onUpdate(): void {        
        let pos = this.root.transform.position;
        pos.x = this.playerSprite.transform.position.x;
        this.root.transform.position = pos;        
    }
}