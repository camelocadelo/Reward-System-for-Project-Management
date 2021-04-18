import React from 'react';
import { NotificationTypes, IRenderBody } from 'components/molecules/Notification/types';

interface IContextProps {
  add: (params: NotificationTypes.IProps) => void;
  remove: (id: string) => void;
  addStateNotification: (notification: IRenderBody) => void;
}

const NotificationContext = React.createContext({} as IContextProps);

export default NotificationContext;
