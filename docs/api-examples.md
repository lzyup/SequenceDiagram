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
