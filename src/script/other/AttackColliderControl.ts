import PlayerControl from "./PlayerControl";
import Game from "../../gameplay/Game";

export default class AttackColliderControl extends Laya.Script3D {
    
    public player: PlayerControl = null;

    private isPowered = false;
    private collider: Laya.MeshSprite3D;

    public onStart(): void {
        this.collider = this.owner as Laya.MeshSprite3D;
        this.setPowered(false);
    }

    public onTriggerStay(other: Laya.PhysicsComponent): void {
        do {
            if (!this.isPowered) {
                break;
            }
            if (other.owner.name != "OniGroup") {
                break;
            }

            // OniGroupControl oni = other.GetComponent<OniGroupControl>();

            // if (oni == null)
            // {

            //     break;
            // }

            // //

            // oni.OnAttackedFromPlayer();

            this.player.onAttackOni((other.owner as Laya.Sprite3D).transform.position);
        } while (false);
    }

    public setPowered(sw: boolean): void {
        this.isPowered = sw;
        if (Game.instance.IS_DRAW_PLAYER_ATTACK_COLLISION) {
            this.collider.meshRenderer.enable = sw;
        }
    }
}
