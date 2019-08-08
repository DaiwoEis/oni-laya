import Singleton from "../core/Singleton";

export default class SceneManager {

    private threeDScenes: Laya.Scene3D[] = []
    private active3DScene: Laya.Scene3D;

    private activeView: Laya.View;

    public static get instance(): SceneManager {
        return Singleton.getInstance<SceneManager>(SceneManager);
    }

    public setActive3DScene(s: Laya.Scene3D): void {
        this.active3DScene = s;
    }

    public getActive3DScene(): Laya.Scene3D {
        return this.active3DScene;
    }

    public setActiveView(s: Laya.View): void {
        this.activeView = s;
    }

    public getActiveView(): Laya.View {
        return this.activeView;
    }

    public loadSence3D(url: string): Promise<Laya.Scene3D> {
        return new Promise<any>((rosolve, reject) => {
            Laya.Scene3D.load(url, new Laya.Handler(null, (s) => {
                Laya.stage.addChild(s);
                rosolve(s);      
            }));
        })
    }

    public loadSence(url: string): Promise<Laya.Scene> {
        return new Promise<any>((rosolve, reject) => {
            Laya.Scene.load(url, new Laya.Handler(null, (s) => {
                rosolve(s);      
            }));
        })
    }

    public init(): void {
        Laya.Scene.root.zOrder = 1;
    }
}