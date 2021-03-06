import React from 'react';
import { NotificationTypesIProps, IRenderBody } from 'components/molecules/Notification/types';

interface IContextProps {
  add: (params: NotificationTypesIProps) => void;
  remove: (id: string) => void;
  addStateNotification: (notification: IRenderBody) => void;
}

const NotificationContext = React.createContext({} as IContextProps);

export default NotificationContext;
