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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  divideLinePosition?: any;
}

export enum TaskStatus {
  Initial = 'initial',
  Pending = 'pending',
  Success = 'success',
  Error = 'error',
  Optional = 'optional',
}
export enum TaskType {
  Send = 'send',
  SendSelf = 'sendSelf',
  SendAndBack = 'sendAndBack',
  Back = 'back',
}

export enum ResultTipsType {
  Pending = 'pending',
  Success = 'success',
  Error = 'error',
  Query = 'query',
}
