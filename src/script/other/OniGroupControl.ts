export enum ONI_GROUP_TYPE {

    NONE = -1,

    NORMAL = 0,         // ふつう.

    DECELERATE,         // 途中で減速.
    LEAVE,              // 画面右に急いで退場（プレイヤーがミスした直後）.
    NUM,
};

export namespace ONI_GROUP {
    export const SPEED_MIN = 2.0;           
    export const SPEED_MAX = 10.0;         
    export const LEAVE_SPEED = 10.0;        
}