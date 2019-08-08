export default class GameUtility {

    public static getChildByName<T extends Laya.Node>(root: Laya.Node, name: string): T {
        let rootCtrl = root as Laya.Node;
        if (rootCtrl.name == name)
            return rootCtrl as T;

        for (let i = 0; i < rootCtrl.numChildren; ++i) {
            let ctrl = GameUtility.getChildByName(rootCtrl.getChildAt(i), name);
            if (ctrl != null)
                return ctrl as T;
        }
        
        return null;
    }

    public static getCtrlByBreadth<T extends Laya.Node>(root: Laya.Node, name: string, maxSearchDepth: number = 5): T {
        if (name == root.name) {
            return root as T;
        }
        for (let i = 0; i < root.numChildren; ++i) {
            let ctrl: T = GameUtility.getControlBFS(root, name, i);
            if (ctrl) {
                return ctrl;
            }
        }
        return null;
    }

    private static getControlBFS<T extends Laya.Node>(root: Laya.Node, name: string, targetDepth): T {
        if (targetDepth == 0) {
            for (let i = 0; i < root.numChildren; ++i) {
                if (root.getChildAt(i).name == name) {
                    return root.getChildAt(i) as T;
                }
            }
            return null;
        } else {
            for (let i = 0; i < root.numChildren; ++i) {
                let ctrl = GameUtility.getControlBFS(root.getChildAt(i), name, targetDepth - 1);
                if (ctrl) {
                    return ctrl as T;
                }
            }
            return null;
        }
    }

    public static getChildByPath<T extends Laya.Node>(root: Laya.Node, path: string[]): T {
        let reuslt = root;
        for (let n of path) {
            reuslt = GameUtility.getChildByName(reuslt, n);
        }
        return reuslt as T;
    }

    public static getChildAt<T extends Laya.Node>(root: Laya.Node, idx: number): T {
        return root.getChildAt(idx) as T;
    }

    public static parseTagIndex(name: string, tag: string): number {

        let pos: number = name.search(tag);
        if (pos == -1)
            return pos;

        let subStr = name.substr(tag.length);
        if (subStr.length == 0)
            return -1;

        for (let i: number = 0; i < subStr.length; i++) {
            if (subStr[i] < '0' || subStr[i] > '9')
                return -1;
        }

        return Number(subStr);
    }

    public static formatFundtring(val: number): string {
        let fee = 0.0;
        let strDanwei: string;
        if (Math.floor(val / 1000000000000) > 0)  {
            fee = val / 1000000000000;
            strDanwei = "E";
        } else if (Math.floor(val / 1000000000) > 0)  {
            fee = val / 1000000000;
            strDanwei = "B";
        } else if (Math.floor(val / 1000000) > 0)  {
            fee = val / 1000000;
            strDanwei = "M";

        } else if (Math.floor(val / 1000) > 0)  {
            fee = val / 1000;
            strDanwei = "K";
        } else {
            fee = val;
            strDanwei = "";
        }

        if (fee > 999)  {
            fee = 999;
        }

        let result: string = fee.toPrecision(3);
        result += strDanwei;
        return result;
    }

    public static uinti8ArrayToString(arr: Uint8Array): string {
        let byte = new Laya.Byte(arr);
        // if (byte.length >= 2) {
        //     return byte.readString();
        // } else {
        //     return "";
        // }
        return byte.readUTFBytes();        
    }

    public static stringToUinti8Array(str: string): Uint8Array {
        let byte = new Laya.Byte();
        byte.writeUTFBytes(str);
        return byte.readUint8Array(0, byte.length);
    }

    public static switchTexture(obj: Laya.Node, texturePath: string, isChangeTextureSize: boolean = false) {
        if (obj == null) 
            return;
        if (obj instanceof Laya.Image) {
            obj.skin = texturePath;
        }
        else if(obj instanceof Laya.Sprite) {
            obj.graphics.clear();
            var texture: Laya.Texture = Laya.loader.getRes(texturePath);
            if (!texture)
                console.log(" === : " + texturePath);

            obj.loadImage(texturePath);
            if (isChangeTextureSize && texture)
                obj.size(texture.width, texture.height);
        } 
    }

    public static getChildIndexByName(obj: Laya.Node, name: string): number {

        for (let i = 0; i < obj.numChildren; ++i) {
            let ctrl = obj.getChildAt(i);
            if (ctrl.name == name)
                return i;
        }

        return -1;
    }

    public static swap<T>(arr: T[], idx1: number, idx2: number): void {
        let temp = arr[idx1];
        arr[idx1] = arr[idx2];
        arr[idx2] = temp; 
    }

}