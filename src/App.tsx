import { useSetState } from 'ahooks';

import {Space,Button } from 'antd'
import { SequenceDiagrams } from './index';
import { ITaskItem, TaskType, TaskStatus, IRoleItem } from './index';

import './App.less';

interface IState {
  taskList: ITaskItem[];
}

function App() {
  const [state, setState] = useSetState<IState>({
    taskList: [
      {
        title: '1.开通',
        subTitle: '用户执行开通操作',
        type: TaskType.Send,
        from: 1,
        to: 2,
        taskSeq: 1,
      },
      {
        title: '2.调用开通接口',
        subTitle: 'qcloud.Hour.create 或业务前台调用业务后台再调用计费后台',
        type: TaskType.Send,
        status: TaskStatus.Initial,
        from: 2,
        to: 3,
        taskSeq: 2,
        depTasks: [1],
      },
      {
        title: '3.询价和折扣（计费定价）',
        subTitle: '算出费用$cost用于冻结',
        type: TaskType.SendSelf,
        from: 3,
        to: 4,
        taskSeq: 3,
        depTasks: [1, 2],
      },
      {
        title: '4.调用开通参数检查接口',
        subTitle: 'checkCreate 检查是否符合开通条件',
        type: TaskType.Send,
        status: TaskStatus.Initial,
        from: 3,
        to: 4,
        taskSeq: 4,
      },
      {
        title: '5.校验余额',
        subTitle: '校验余额是否大于$cost；大客户不需要校验，不需要冻结$cost=0',
        type: TaskType.SendSelf,
        from: 3,
        to: 4,
        taskSeq: 5,
      },
      {
        title: '6.冻结(可选)',
        subTitle: '冻结金额=$cost*冻结系数大客户不需要冻结',
        type: TaskType.SendSelf,
        status: TaskStatus.Optional,
        from: 3,
        to: 4,
        taskSeq: 6,
      },
      {
        title: '7.调用发货接口',
        subTitle: 'createResource执行发货',
        type: TaskType.Send,
        status: TaskStatus.Initial,
        from: 3,
        to: 4,
        taskSeq: 7,
      },
      {
        title: '8.判断是否为异步',
        subTitle: '若返回flowid,则判断为异步查询，否则判断为同步，结束流程',
        type: TaskType.SendSelf,
        status: TaskStatus.Optional,
        from: 3,
        to: 4,
        taskSeq: 8,
      },
      {
        title: '9.查询异步发货结果',
        subTitle: '轮询调用queryflow',
        type: TaskType.Send,
        status: TaskStatus.Initial,
        from: 3,
        to: 4,
        taskSeq: 9,
      },
    ],
  });
  const roleList: IRoleItem[] = [
    { roleName: '用户', roleSeq: 1 },
    { roleName: '业务前台', roleSeq: 2 },
    { roleName: '计费后台', roleSeq: 3 },
    { roleName: '业务后台', roleSeq: 4 },
  ];

  const start = (type: TaskStatus) => { 
    switch (type) {
      case TaskStatus.Pending:
        state.taskList[0].status = TaskStatus.Pending;
        state.taskList[1].status = TaskStatus.Pending;
        state.taskList[3].status = TaskStatus.Pending;
        state.taskList[6].status = TaskStatus.Pending;
        state.taskList[8].status = TaskStatus.Pending;
        break;
      case TaskStatus.Success:
        state.taskList[0].status = TaskStatus.Success;
        state.taskList[1].status = TaskStatus.Success;
        state.taskList[3].status = TaskStatus.Success;
        state.taskList[6].status = TaskStatus.Success;
        state.taskList[8].status = TaskStatus.Success;
        break;
      case TaskStatus.Error:
        state.taskList[0].status = TaskStatus.Error;
        state.taskList[1].status = TaskStatus.Error;
        state.taskList[3].status = TaskStatus.Error;
        state.taskList[6].status = TaskStatus.Error;
        state.taskList[8].status = TaskStatus.Error;
        break;
      default:
        break;
    }
    setState({
      taskList: state.taskList,
    })

  }
  return (
    <>
      <div className="example-box">
        <SequenceDiagrams
          componentId='postpay-trade'
          taskGap={8}
          roleList={roleList}
          taskList={state.taskList}
        ></SequenceDiagrams>
        <Space style={{ marginTop: 100 }}><Button onClick={() => start(TaskStatus.Pending)}>开始pending</Button><Button onClick={() => start(TaskStatus.Success)}>展示success终态</Button><Button onClick={() => start(TaskStatus.Error)}>展示error终态</Button></Space>
      </div>
    </>
  );
}

export default App;
