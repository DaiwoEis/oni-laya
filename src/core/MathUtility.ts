export class Vector2 {

    public x: number;
    public y: number;    

    constructor(x: number = 0, y: number = 0) {
        this.x = x;
        this.y = y;
    }

}

export class Vector3 {

    public x: number;
    public y: number;
    public z: number;

    public static ZERO: Vector3 = new Vector3();

    constructor(x: number = 0, y: number = 0, z: number = 0) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    public static normalize(s: Vector3, out: Vector3): void {
		let x=s.x,y=s.y,z=s.z;
		let len=x *x+y *y+z *z;
		if (len > 0){
			len=1 / Math.sqrt(len);
			out.x=s.x *len;
			out.y=s.y *len;
			out.z=s.z *len;
		}
    }
    
    public static distance(value1: Vector3, value2: Vector3): number {
		let x=value1.x-value2.x;
		let y=value1.y-value2.y;
		let z=value1.z-value2.z;
		return Math.sqrt((x *x)+(y *y)+(z *z));
    }
    
    public static cross(a: Vector3, b: Vector3, o: Vector3): void {
		let ax=a.x,ay=a.y,az=a.z,bx=b.x,by=b.y,bz=b.z;
		o.x=ay *bz-az *by;
		o.y=az *bx-ax *bz;
		o.z=ax *by-ay *bx;
	}

	public static dot(a: Vector3, b: Vector3): number{
		return (a.x *b.x)+(a.y *b.y)+(a.z *b.z);
    }
    
    public static distanceSquared(value1: Vector3, value2: Vector3): number {
		var x=value1.x-value2.x;
		var y=value1.y-value2.y;
		var z=value1.z-value2.z;
		return (x *x)+(y *y)+(z *z);
    }
    
    public static add(a: Vector3, b: Vector3, out: Vector3): void{
		out.x=a.x+b.x;
		out.y=a.y+b.y;
		out.z=a.z+b.z;
    }
    
    public static multiply(a: Vector3, b: Vector3, out: Vector3): void{
		out.x=a.x *b.x;
		out.y=a.y *b.y;
		out.z=a.z *b.z;
	}
}

export namespace MathUtility {    
    export module V3 {
        export function add(v1: Vector3, v2: Vector3): Vector3 {
            let result = new Vector3();
            Vector3.add(v1, v2, result);
            return result;
        }

        export function minus(v1: Vector3, v2: Vector3): Vector3 {
            let result = this.add(v1, multiply(v2, -1));            
            return result;
        }

        export function multiply(v1: Vector3, v2: Vector3): Vector3;
        export function multiply(v: Vector3, m: number): Vector3;

        export function multiply(...args: any[]): Vector3 {
            let result = new Vector3();
            if(typeof args[1] == "number") {
                result.x = args[0].x * args[1];
                result.y = args[0].y * args[1];
                result.z = args[0].z * args[1];
            } else {                
                Vector3.multiply(args[0], args[1], result);
            }            
            return result;
        }        
    }

    export module V2 {
        export let Right: Vector2 = new Vector2(1, 0);
        
        export function angle(v1: Vector2, v2: Vector2): number {
            let v1Temp = new Vector3(v1.x, v1.y);
            let v2Temp = new Vector3(v2.x, v2.y);
            Vector3.normalize(v1Temp, v1Temp);
            Vector3.normalize(v2Temp, v2Temp);
            let dot = Vector3.dot(v1Temp, v2Temp);
            let tmp = new Vector3();
            Vector3.cross(v1Temp, v2Temp, tmp);
            if (tmp.z > 0) {
                return Math.acos(dot);
            } else {
                return 2 * Math.PI - Math.acos(dot);
            }
        }
    }

    export function clamp(value: number, min: number, max: number): number {
        if (value < min) {
            value = min;
        }
        if (value > max) {
            value = max;
        }
        return value;
    }

    export enum Direction {
        Left,
        Right,
        Down,
        Up
    }
    
    export function isPointInside(rect: Laya.Rectangle, point: Laya.Point): boolean {        
        return point.x > rect.x && point.y > rect.y && point.x < (rect.x + rect.width) && point.y < (rect.y + rect.height);
    }

    export function inverseLerp(from: number, to: number, v: number): number {
        return clamp(v / (to - from), 0, 1);
    }

    export function lerp(from: number, to: number, v: number): number {
        return Laya.MathUtil.lerp(from, to, v);
    }

    export function randomRange(min: number, max: number): number {
        let v = max - min - 1;
        v = Math.ceil(Math.random() * v);
        return min + v;
    }
}