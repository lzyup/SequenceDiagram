# 2、示例

```
import { SequenceDiagrams } from '@luzyup/sequence-diagram';
import { ITaskItem, TaskType, TaskStatus, IRoleItem } from '@luzyup/sequence-diagram';
import '@luzyup/sequence-diagram/lib/style.css'


const taskList: ITaskItem[] = [
      {
        title: '1.任务标题哈哈哈啊哈哈',
        subTitle: '任务副标题1',
        type: TaskType.Send,
        from: 1,
        to: 2,
        taskSeq: 1,
      },
      {
        title: '2.任务标题',
        subTitle: '任务副标题2',
        type: TaskType.SendAndBack,
        status: TaskStatus.Initial,
        from: 2,
        to: 3,
        taskSeq: 2,
        depTasks: [1],
      },
      {
        title: '3.任务标题',
        subTitle: '任务副标题3',
        type: TaskType.SendSelf,
        from: 3,
        to: 4,
        taskSeq: 3,
        depTasks: [1, 2],
      },
      {
        title: '4.任务标题4',
        subTitle: '任务副标题4',
        type: TaskType.Send,
        status: TaskStatus.Initial,
        from: 3,
        to: 4,
        taskSeq: 4,
      },
      {
        title: '5.任务标题5',
        subTitle: '任务副标题5',
        type: TaskType.SendSelf,
        from: 3,
        to: 4,
        taskSeq: 5,
      },
      {
        title: '6.任务标题6',
        subTitle: '任务副标题6',
        type: TaskType.SendSelf,
        status: TaskStatus.Optional,
        from: 3,
        to: 4,
        taskSeq: 6,
      },
      {
        title: '7.任务标题7',
        subTitle: '任务副标题7',
        type: TaskType.Send,
        status: TaskStatus.Initial,
        from: 3,
        to: 4,
        taskSeq: 7,
      },
      {
        title: '8.任务标题8',
        subTitle: '任务标题8',
        type: TaskType.SendSelf,
        status: TaskStatus.Optional,
        from: 3,
        to: 4,
        taskSeq: 8,
      },
      {
        title: '9.任务标题9',
        subTitle: '任务标题9',
        type: TaskType.Send,
        status: TaskStatus.Initial,
        from: 3,
        to: 4,
        taskSeq: 9,
      },
    ],

 const roleList: IRoleItem[] = [
    { roleName: '用户', roleSeq: 1 },
    { roleName: '业务前台', roleSeq: 2 },
    { roleName: '中台', roleSeq: 3 },
    { roleName: '后台', roleSeq: 4 },
  ];

    return (<SequenceDiagrams
          taskGap={8}
          roleList={roleList}
          taskList={state.taskList}
        ></SequenceDiagrams>)
```
