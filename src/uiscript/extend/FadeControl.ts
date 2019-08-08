export default class FadeControl extends Laya.Script
{
    private timer: number;             
    private fadeTime: number;         
    private colorStart: Laya.Color;   
    private colorTarget: Laya.Color;  
    private imageCtrl: Laya.Box;    
    private fading: boolean;

    public onAwake(): void {
        this.timer = 0.0;
        this.fadeTime = 0.0;
        this.colorStart = new Laya.Color(0.0, 0.0, 0.0, 0.0);
        this.colorTarget = new Laya.Color(0.0, 0.0, 0.0, 0.0);
        this.imageCtrl = this.owner as Laya.Box        
        this.fading = false;
    }

    public onUpdate(): void {
        if (this.fadeTime) {
            if (this.timer < this.fadeTime) {
                let rate = this.timer / this.fadeTime;
                rate = Math.sin(rate * Math.PI / 2.0);
                let color = this.lerpColor(this.colorStart, this.colorTarget, rate);
                this.updateColor(color);
            } else {
                this.updateColor(this.colorTarget);
                this.fading = false;
            }
            this.timer += Laya.timer.delta * 0.001;
        }
    }

    private lerpColor(l: Laya.Color, r: Laya.Color, t: number): Laya.Color {
        return new Laya.Color(Laya.MathUtil.lerp(l.r, r.r, t), 
                            Laya.MathUtil.lerp(l.g, r.g, t), 
                            Laya.MathUtil.lerp(l.b, r.b, t), 
                            Laya.MathUtil.lerp(l.a, r.a, t));
    }

    private toHex(v: number): string {
        let s = v.toString(16);
        if (s.length == 1) {
            s = "0" + s;
        }
        return s;
    }

    private updateColor(color: Laya.Color): void {
        let c = "#" + this.toHex(color.r)  + this.toHex(color.g) + this.toHex(color.b);
        this.imageCtrl.bgColor = c;
        this.imageCtrl.alpha = color.a;
    }

    public fade(time: number, start: Laya.Color, target: Laya.Color): void {
        this.imageCtrl.visible = true;
        this.fadeTime = time;
        this.timer = 0.0;
        this.colorStart = start;
        this.colorTarget = target;
        this.fading = true;
    }

    public isActive(): boolean {
        return this.fading;
    }
}