export interface ITaskItem {
    title: string;
    subTitle: string;
    status?: TaskStatus;
    type: TaskType;
    from: number;
    to: number;
    taskSeq: number;
    taskOffset?: number;
    depTasks?: number[];
}
export interface IRoleItem {
    roleName: string;
    rolePic?: string;
    roleSeq: number;
    divideLinePosition?: any;
}
export declare enum TaskStatus {
    Initial = "initial",
    Pending = "pending",
    Success = "success",
    Error = "error",
    Optional = "optional"
}
export declare enum TaskType {
    Send = "send",
    SendSelf = "sendSelf",
    SendAndBack = "sendAndBack",
    Back = "back"
}
export declare enum ResultTipsType {
    Pending = "pending",
    Success = "success",
    Error = "error",
    Query = "query"
}
