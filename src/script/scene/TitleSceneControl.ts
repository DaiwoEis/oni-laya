import PlayerControl from "../other/PlayerControl";
import CameraControl from "../other/CameraControl";
import FloorControl from "../other/FloorControl";
import GameUtility from "../../core/GameUtility";

export default class TitleSceneControl extends Laya.Script3D {

    public onAwake(): void {

        let light = GameUtility.getChildByName<Laya.DirectionLight>(this.owner, "Directional light");
        light.shadow = true;        
        light.shadowDistance = 100;        
        light.shadowResolution = 2048;        
        light.shadowPSSMCount = 1;        
        light.shadowPCFType = 3;
        
        let player = this.owner.getChildByName("Player") as Laya.Sprite3D;
        player.addComponent(PlayerControl);

        let camera = this.owner.getChildByName("Main Camera Prefab") as Laya.Camera;
        camera.addComponent(CameraControl);

        let floor1 = this.owner.getChildByName("Floor0 Prefab") as Laya.Sprite3D;
        floor1.addComponent(FloorControl);

        let floor2 = this.owner.getChildByName("Floor1 Prefab") as Laya.Sprite3D;
        floor2.addComponent(FloorControl);

        let floor3 = this.owner.getChildByName("Floor2 Prefab") as Laya.Sprite3D;
        floor3.addComponent(FloorControl);
    }


    public onUpdate(): void {

    }
}