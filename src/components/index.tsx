import { FC, useLayoutEffect, useMemo } from 'react';
import { Space } from 'antd';
import { useSetState } from 'ahooks';
import { ITaskItem, IRoleItem, TaskType } from './type';
import { SendTask } from './SendTask';
import { SendSelfTask } from './SendSelf';
import { SendAndBackTask } from './SendAndBack';

import './index.less';

interface ISequenceDiagrams {
  roleList: IRoleItem[];
  taskList: ITaskItem[];
  taskGap?: number;
  componentId?: string;
  refresh?: boolean;
}

interface IState {
  calTaskList: ITaskItem[];
  calRoleList: IRoleItem[];
}

/**
 * 1、如果有deps,则当前task的marginTop的计算需要加上deps的task的height
 * 2、没有deps，默认下一个task距离上一个task的marginTop的距离是taskGap
 * 3、taskOffset自定义当前task的marginTop，否则走1,2的计算逻辑计算出来
 * 4、componentId 组件唯一标识，当一个页面多个时序图组件渲染
 */
export const SequenceDiagrams: FC<ISequenceDiagrams> = ({ roleList, taskList, taskGap = 8, componentId = '' }) => {
  const [state, setState] = useSetState<IState>({
    calTaskList: taskList,
    calRoleList: roleList,
  });
  useLayoutEffect(() => {
    getTaskSize();
  }, []);

  // 动态计算网格比例，保证视觉效果距离一致
  const gridTemplateColumns = useMemo(() => {
    const total = roleList.length * 2;
    const a = 100 / (2 * total - 4);
    const b = 2 * a;
    const resultList = [];
    for (let i = 1; i <= total; i++) {
      if (i < 3 || i > total - 2) {
        resultList.push(`${a}%`);
      } else {
        resultList.push(`${b}%`);
      }
    }
    return resultList.join(' ');
  }, []);
  const getTaskSize = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const taskMap: Record<number, any> = {};
    state.calTaskList.forEach((taskItem: ITaskItem) => {
      const size = document
        .getElementById(`${componentId}-task-component-${taskItem.taskSeq}`)
        ?.getBoundingClientRect();
      const height = size?.height || 0;
      taskMap[taskItem.taskSeq] = {
        height,
      };
    });
    state.calTaskList.forEach((taskItem: ITaskItem) => {
      const deps = taskItem.depTasks || [];
      let depTaskHeight = 0;
      if (deps?.length > 0) {
        deps.forEach((depTask: number) => {
          depTaskHeight += taskMap[depTask].height;
        });
        taskItem.taskOffset = depTaskHeight + deps?.length * taskGap;
      } else if (taskItem.taskSeq === 1) {
        taskItem.taskOffset = 0;
      } else {
        taskItem.taskOffset = depTaskHeight + taskGap;
      }
    });
    state.calRoleList.forEach((roleItem: IRoleItem) => {
      const size = document
        .getElementById(`${componentId}-role-component-${roleItem.roleSeq}`)
        ?.getBoundingClientRect();
      const offsetLeft = document.getElementById(`${componentId}-role-component-${roleItem.roleSeq}`)?.offsetLeft || 0;
      if (size) {
        const { height, width } = size;
        const divideTop = height + DivideHeight;
        let divideLeft = 0;
        if (roleItem.roleSeq === 1) {
          divideLeft = 0;
        } else if (roleItem.roleSeq === roleList.length) {
          divideLeft = offsetLeft + width - 8;
        } else {
          divideLeft = offsetLeft + width / 2 - 8;
        }
        roleItem.divideLinePosition = {
          top: divideTop,
          left: divideLeft,
        };
      }
    });
    setState({
      calTaskList: state.calTaskList,
      calRoleList: state.calRoleList,
    });
  };
  return (
    <div
      id="sequence-diagrams"
      className="sequence-diagrams-2ad5122f-c389-48c5-b8c5-8d870e5100aa"
      // style={{ gridTemplateColumns: `repeat(${roleList.length * 2}, 1fr)` }}
      style={{ gridTemplateColumns, gridTemplateRows: 'auto' }}
    >
      {state.calRoleList.map((roleItem: IRoleItem) => {
        const roleStart = 2 * roleItem.roleSeq - 1;
        const roleEnd = 2 * roleItem.roleSeq + 1;
        const rolePosition = roleItem.roleSeq === 1 ? 'start' : roleItem.roleSeq === roleList.length ? 'end' : 'center';
        return (
          <div
            key={roleItem.roleSeq}
            style={{ gridColumnStart: roleStart, gridColumnEnd: roleEnd }}
            className={`unit-cell-${rolePosition}`}
            id={`${componentId}-role-component-${roleItem.roleSeq}`}
          >
            <Space>
              <div>{roleItem.roleName}</div>
            </Space>
            {roleItem.divideLinePosition && (
              <div
                style={{ left: roleItem.divideLinePosition.left, top: roleItem.divideLinePosition.top }}
                className="divide-line"
              ></div>
            )}
          </div>
        );
      })}
      <div className="divide-20"></div>
      {state.calTaskList.map((taskItem: ITaskItem) => {
        const TaskComponent = TaskMap[taskItem.type];
        const taskStart = taskItem.from === 1 ? 1 : 2 * taskItem.from;
        const taskEnd = taskItem.to === 1 ? 1 : taskItem.to === roleList.length ? 2 * taskItem.to + 1 : 2 * taskItem.to;
        return (
          <div
            key={taskItem.taskSeq}
            style={{
              // position: 'relative',
              marginTop: `${taskItem.taskOffset}px`,
              gridColumnStart: taskStart,
              gridColumnEnd: taskEnd,
              paddingLeft: `${taskItem.from === 1 ? '8px' : ''}`,
            }}
          >
            <div id={`${componentId}-task-component-${taskItem.taskSeq}`}>
              <TaskComponent {...taskItem}></TaskComponent>
            </div>
          </div>
        );
      })}
    </div>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TaskMap: Record<TaskType, any> = {
  [TaskType.Send]: SendTask,
  [TaskType.SendSelf]: SendSelfTask,
  [TaskType.SendAndBack]: SendAndBackTask,
  [TaskType.Back]: SendTask,
};

const DivideHeight = 20;
