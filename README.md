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


const taskList [
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

    return (<SequenceDiagrams
          taskGap={8}
          roleList={roleList}
          taskList={state.taskList}
        ></SequenceDiagrams>)
```
