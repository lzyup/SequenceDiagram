import { FC } from 'react';
import { ITaskItem, IRoleItem } from './type';

interface ISequenceDiagrams {
    roleList: IRoleItem[];
    taskList: ITaskItem[];
    taskGap?: number;
    componentId?: string;
    refresh?: boolean;
}
/**
 * 1、如果有deps,则当前task的marginTop的计算需要加上deps的task的height
 * 2、没有deps，默认下一个task距离上一个task的marginTop的距离是taskGap
 * 3、taskOffset自定义当前task的marginTop，否则走1,2的计算逻辑计算出来
 * 4、componentId 组件唯一标识，当一个页面多个时序图组件渲染
 */
export declare const SequenceDiagrams: FC<ISequenceDiagrams>;
export {};
