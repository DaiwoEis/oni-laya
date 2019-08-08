import SceneManager from "../../gameplay/SceneManager";
import Application from "../../core/Application";
import { PhysicsUtility } from "../../gameplay/PhysicsUtility";

export default class FloorControl extends Laya.Script3D
{    
    private mainCamera: Laya.Sprite3D;

    public WIDTH: number = 10.0 * 4.0;    
    public MODEL_NUM: number = 3;    

    public onAwake(): void
    {        
        this.mainCamera = SceneManager.instance.getActive3DScene().getChildByName("Main Camera Prefab") as Laya.Sprite3D;

        let map2 = this.owner.getChildByName("map2") as Laya.MeshSprite3D;
        map2.meshRenderer.receiveShadow = true;        
        let col = map2.getComponent(Laya.PhysicsCollider) as Laya.PhysicsCollider;
        col.collisionGroup = PhysicsUtility.ENV_LAYER;
        col.canCollideWith = PhysicsUtility.PLAYER_LAYER;
    }

    public onUpdate(): void
    {
        let totalWidth = this.WIDTH * this.MODEL_NUM;        
        let floorPosition = (this.owner as Laya.Sprite3D).transform.position;        
        let cameraPosition = this.mainCamera.transform.position;
        if (floorPosition.x + totalWidth / 2.0 < cameraPosition.x)
        {            
            floorPosition.x += totalWidth;

            (this.owner as Laya.Sprite3D).transform.position = floorPosition;
        }

        if (cameraPosition.x < floorPosition.x - totalWidth / 2.0)
        {
            
            floorPosition.x -= totalWidth;
            (this.owner as Laya.Sprite3D).transform.position = floorPosition;
        }
    }
}
