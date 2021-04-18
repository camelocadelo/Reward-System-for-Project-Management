// export declare namespace NotificationTypes {
export interface NotificationTypesIProps {
  /**
   * Size of notification
   */
  size: 'big' | 'small' | 'basic';
  /**
   * Type of notification
   */
  type: NotificationType;
  /**
   * Title of notification
   */
  title?: string;
  /**
   * Details of notification
   */
  description: string;
  withIcon?: boolean;
  remove?(): void;
  duration?: number;
  width?: string;
}

// export declare namespace NotificationProviderTypes {
export interface NotificationProviderTypesIProps extends NotificationTypesIProps {
  id: string;
}
// }

export enum NotificationType {
  Success = 'success',
  Danger = 'danger',
  Warning = 'warning',
  Info = 'info',
}

export interface IRenderBody<T = any> {
  responseType: NotificationType;
  description: string;
  data?: T;
}
