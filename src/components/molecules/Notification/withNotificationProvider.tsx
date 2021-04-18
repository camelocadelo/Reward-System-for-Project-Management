import React, { useState, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { generateId } from 'utils/generation';
import Notification from 'components/molecules/Notification/index';
import NotificationContext from 'components/molecules/Notification/NotificationContext';
import { IRenderBody } from 'components/molecules/Notification/types';
import {
  NotificationProviderTypesIProps,
  NotificationTypesIProps,
} from 'components/molecules/Notification/types';

const withNotificationProvider = (Component: any) => {
  function WithNotificationProvider(props: any) {
    const [notifications, setNotifications] = useState<NotificationProviderTypesIProps[]>([]);

    const add = (params: NotificationTypesIProps) => {
      const id = generateId();
      setNotifications([...notifications, { id, ...params }]);
    };

    const remove = (id: string) => {
      setNotifications(notifications.filter((n: NotificationProviderTypesIProps) => n.id !== id));
    };

    const addStateNotification = (notification: IRenderBody) => {
      add({
        type: notification.responseType,
        description: notification.description,
        duration: 5000,
        size: 'small',
        width: '600px',
      });
    };

    const providerValue = useMemo(() => ({ add, remove, addStateNotification }), [notifications]);

    return (
      <NotificationContext.Provider value={providerValue}>
        <Component {...props} />
        {createPortal(
          <div className="notifications-wrapper">
            {notifications.map((n) => (
              <Notification key={n.id} {...n} remove={() => remove(n.id)} />
            ))}
          </div>,
          document.body
        )}
      </NotificationContext.Provider>
    );
  }
  return WithNotificationProvider;
};

export default withNotificationProvider;
