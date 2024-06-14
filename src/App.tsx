import { useSetState } from 'ahooks';

import { SequenceDiagrams } from './components';
import { ITaskItem, TaskType, TaskStatus, IRoleItem } from './components/type';

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
      // {
      //   title: '3.业务询价接口(业务定价)',
      //   subTitle: 'getPrice查询费用用于冻结；返回费用$cost不适用计费折扣',
      //   type: TaskType.SendAndBack,
      //   status: TaskStatus.Optional,
      //   from: 3,
      //   to: 4,
      //   taskSeq: 4,
      // },
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
  return (
    <>
      <div className="example-box">
        <SequenceDiagrams
          componentId='postpay-trade'
          taskGap={8}
          roleList={roleList}
          taskList={state.taskList}
        ></SequenceDiagrams>
      </div>
    </>
  );
}

export default App;
