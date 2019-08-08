import Singleton from "../core/Singleton";

export default class Game {

    public IS_DRAW_PLAYER_ATTACK_COLLISION: boolean = false;

    public static get instance(): Game {
        return Singleton.getInstance<Game>(Game);
    }
}