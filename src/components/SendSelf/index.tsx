import React, { FC } from 'react';

import { ITaskItem } from '../type';
import './index.less';

export const SendSelfTask: FC<ITaskItem> = ({ title, subTitle }) => (
  <div className={`send-self-task`}>
    <div className="send-self-task-left-part">
      <div className="histogram"></div>
      <div className="border-line-top"></div>
      <div className="border-line-right"></div>
      <div className="border-line-bottom"></div>
      <div className="caret"></div>
    </div>
    <div className="send-self-task-right-part">
      <div className="title">{title}</div>
      <div className="subtitle">{subTitle}</div>
    </div>
  </div>
);
