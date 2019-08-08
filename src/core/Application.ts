import Singleton from "./Singleton";
import TitleSceneControl from "../script/scene/TitleSceneControl";
import SceneManager from "../gameplay/SceneManager";
import TitleView from "../uiscript/view/TitleView";

export default class Application {

    public static IS_DRAW_DEBUG_FLOOR_MODEL: boolean = false;
    
    public static get instance(): Application {
        return Singleton.getInstance<Application>(Application);
    }

    constructor() {
        this.init();        
    }

    public init(): void {
        SceneManager.instance.init();
        SceneManager.instance.loadSence3D("3dres/LayaScene_TitleScene_Laya/Conventional/TitleScene_Laya.ls").then(s => {
            SceneManager.instance.setActive3DScene(s);
            (s as Laya.Scene3D).addComponent(TitleSceneControl);      
        })
        SceneManager.instance.loadSence("view/TitleView.scene").then(s => {
            (s as Laya.Scene).addComponent(TitleView);
            (s as Laya.Scene).open();     
        })    
    }

    public update(): void {

    }
}