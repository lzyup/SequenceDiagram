import React, { FC } from 'react';
import { Space } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { CheckCircleFilled, ExclamationCircleFilled } from '@ant-design/icons';

import { ITaskItem, TaskStatus } from '../type';
import './index.less';

export const SendAndBackTask: FC<ITaskItem> = ({ title, subTitle, status }) => {
  let StatusComponent = null;
  switch (status) {
    case TaskStatus.Pending:
      // StatusComponent = <Icon type="loading" size="s" />;
      StatusComponent = <LoadingOutlined style={{ fontSize: '16px', color: '#006eff' }}/>;
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
    <div className={`send-and-back-task ${status ? `bg-${status}` : ''}`}>
      <Space size={3.5}>
        <div className={`title ${status ? `txt-${status}` : ''}`}>{title}</div>
        {status && [TaskStatus.Pending, TaskStatus.Success, TaskStatus.Error].includes(status) && StatusComponent}
      </Space>
      <div className={`subtitle ${status ? `txt-${status}` : ''}`}>{subTitle}</div>
      <div className={`border-line ${status ? `line-bg-${status}` : 'line-bg-initial'}`}></div>
      <div className={`caret ${status ? `cart-border-${status}` : ''}`}></div>
      <div className={`caret-back ${status ? `caret-back-line-bg-${status}` : ''}`}></div>
      <div className={`histogram ${status ? `line-bg-${status}` : 'line-bg-initial'}`}></div>
      <div className={`border-line-dotted ${status ? `line-bg-dot-${status}` : ''}`}></div>
    </div>
  );
};
