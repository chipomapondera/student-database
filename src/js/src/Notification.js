import {notification} from 'antd';

const openNotification = (type, message, description) => {
    return notification[type]({
      message,
      description
    });
  };

  export const successNotification = (message, description) => {
      return openNotification('success', message, description);
  }

  export const infoNotification = (message, description) => {
    return openNotification('info', message, description);
}

export const warningNotification = (message, description) => {
    return openNotification('warning', message, description);
}

export const errorNotification = (message, description) => {
    return openNotification('error', message, description);
}
