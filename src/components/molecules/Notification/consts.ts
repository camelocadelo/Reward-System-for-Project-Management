import { NotificationTypesIProps, NotificationType } from './types';

export const DEFAULT_NOTIFICATION_DATA: NotificationTypesIProps = {
  size: 'small',
  type: NotificationType.Success,
  description: '',
  withIcon: true,
  duration: 5000,
  width: '600px',
};
