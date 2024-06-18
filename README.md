# 1、 SequenceDiagrams

时序图组件

| 参数名称 | 类型        | 描述               |
| -------- | ----------- | ------------------ |
| taskGap  | number      | 任务之间上下的间距 |
| roleList | IRoleItem[] | 角色               |
| taskList | ITaskItem[] | 任务               |

## 1.1 组成部分

### 1.1.1 任务 (ITaskItem)

| 参数名称 | 类型       | 描述                             |
| -------- | ---------- | -------------------------------- |
| title    | string     | 标题                             |
| subTitle | string     | 子标题                           |
| status   | TaskStatus | 任务状态                         |
| type     | TaskType   | 任务类型                         |
| from     | number     | 任务起始对应的角色序号（1 开始） |
| to       | number     | 任务结束对应的角色序号           |
| taskSeq  | number     | 任务序号                         |
| depTasks | number[]   | 该任务依赖的任务队列             |

`TaskStatus`

- TaskStatus.Initial
- TaskStatus.Pending
- TaskStatus.Success
- TaskStatus.Error
- TaskStatus.Optional

`TaskType`

- TaskType.send
- TaskType.sendSelf
- TaskType.sendAndBack

### 1.1.2 角色(IRoleItem)

| 参数名称 | 类型   | 描述      |
| -------- | ------ | --------- |
| roleName | string | 角色名称  |
| rolePic  | string | 角色 icon |
| roleSeq  | number | 角色序号  |

# 2、示例

```
import { SequenceDiagrams } from '@luzyup/sequence-diagram';
import { ITaskItem, TaskType, TaskStatus, IRoleItem } from '@luzyup/sequence-diagram';
import '@luzyup/sequence-diagram/lib/style.css'


const taskList = [
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

    return (<SequenceDiagrams
          taskGap={8}
          roleList={roleList}
          taskList={state.taskList}
        ></SequenceDiagrams>)
```
