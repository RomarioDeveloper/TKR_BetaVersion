import { initializeApp } from 'firebase/app';
import { getMessaging, getToken } from 'firebase/messaging';

const firebaseConfig = {
    apiKey: "AIzaSyB2AFttchUNLtw3jy2OCqD_Ub80QU9TVKM",
    authDomain: "tkrpushpoject.firebaseapp.com",
    projectId: "tkrpushpoject",
    storageBucket: "tkrpushpoject.appspot.com",
    messagingSenderId: "522292548010",
    appId: "1:522292548010:web:8d730ac594734b9a2c5bd3",
    measurementId: "G-YW3JGYE2BW"
};

// Инициализация Firebase
const app = initializeApp(firebaseConfig);

const messaging = getMessaging(app);

export const askForPermissionToReceiveNotifications = async () => {
  try {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      console.log('Permission for notifications was granted.');
      const token = await getToken(messaging);
      console.log('User Notification Token:', token);
      return token;
    }
  } catch (error) {
    console.error('Failed to get permission or token for notifications.', error);
  }
};

// В данном случае экспорт messaging можно оставить, если планируется его использование в будущем
export { messaging };
