import  { FC } from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { CheckCircleFilled, ExclamationCircleFilled } from '@ant-design/icons';

import { ITaskItem, TaskStatus } from '../type';
import './index.less';

export const SendTask: FC<ITaskItem> = ({ title, subTitle, status }) => {
  let StatusComponent = <div className="placeholder hidden" />;
  switch (status) {
    case TaskStatus.Pending:
      StatusComponent = <LoadingOutlined style={{ fontSize: '14px', color: '#006eff'}}/>;
      break;
    case TaskStatus.Success:
      StatusComponent = <CheckCircleFilled className={`txt-${status}`} style={{ fontSize: '14px' }} />;
      break;
    case TaskStatus.Error:
      StatusComponent = <ExclamationCircleFilled className={`txt-${status}`} style={{ fontSize: '14px' }} />;
      break;
    default:
      break;
  }
  return (
    <div className={`send-task ${status ? `bg-${status}` : ''}`}>
      <div className="title-wrapper">
        <div className={`title ${status ? `txt-${status}` : ''}`}>{title}</div>
        <div style={{width: '5px'}}></div>
        {StatusComponent}
      </div>
      <div className={`subtitle ${status ? `txt-${status}` : ''}`}>{subTitle}</div>
      <div className={`border-line ${status ? `line-bg-${status}` : ''}`}></div>
      <div className={`caret ${status ? `cart-border-${status}` : ''}`}></div>
      <div className={`histogram ${status ? `line-bg-${status}` : ''}`}></div>
    </div>
  );
};
