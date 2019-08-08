export default class Singleton {
    
    private static instance: Singleton;

    private map: { [key:string]:any } = {};

    public static getInstance<T>(clas: any): T {
        if(Singleton.instance == null) {
            Singleton.instance = new Singleton();
        }   
        let className = clas as string;
        let obj = Singleton.instance.map[className];
        if(obj == null) {
            Singleton.instance.map[className] = new clas();
        }
        return  <T>Singleton.instance.map[className];
    }
}
