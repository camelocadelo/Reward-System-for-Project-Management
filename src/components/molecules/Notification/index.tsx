import React, { useEffect, useState } from 'react';
// import Image from 'src/components/atoms/Image';
// import Typography from 'src/components/atoms/Typography';
// import CancelIcon from 'src/components/atoms/Svg/Icons/cancel';

import { NotificationType, NotificationTypesIProps } from 'components/molecules/Notification/types';
import iconSuccess from 'assets/images/success.svg';
import iconDanger from 'assets/images/danger.svg';
import iconWarning from 'assets/images/warning.svg';
import iconInfo from 'assets/images/icon-notification--info.svg';
import 'components/molecules/Notification/index.scss';

function Notification(props: NotificationTypesIProps) {
  const [showNotification, setNotification] = useState(true);
  const { type, title, description, size, remove, withIcon, duration, width } = props;

  const notificationIcons = {
    [NotificationType.Success]: iconSuccess,
    [NotificationType.Danger]: iconDanger,
    [NotificationType.Warning]: iconWarning,
    [NotificationType.Info]: iconInfo,
  };

  useEffect(() => {
    const id =
      duration &&
      setTimeout(() => {
        setNotification(false);
      }, duration);
    return () => {
      id && clearTimeout(id);
    };
  }, []);

  return (
    <>
      {showNotification && (
        <div
          style={{ width }}
          className={`d-flex notification align-items-center notification--${type} notification--${size}`}
        >
          {withIcon && (
            <img
              src={notificationIcons[type]}
              alt="name icon"
              // alt={NotificationType[type]}
              className="notification__image"
            />
          )}
          <div
            className={`notification__content--${size} d-flex ${
              size === 'big' ? 'flex-column' : 'flex-row align-items-center'
            }`}
          >
            <p className="notification__title">{title}</p>
            <p>{description}</p>
          </div>
          {/*{duration && <CancelIcon className="close-icon ml-auto" onClick={remove} />}*/}
        </div>
      )}
    </>
  );
}

export default Notification;
