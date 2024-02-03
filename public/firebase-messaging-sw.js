// В этом файле нельзя использовать ES6+ импорты, используйте importScripts
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyB2AFttchUNLtw3jy2OCqD_Ub80QU9TVKM",
    authDomain: "tkrpushpoject.firebaseapp.com",
    projectId: "tkrpushpoject",
    storageBucket: "tkrpushpoject.appspot.com",
    messagingSenderId: "522292548010",
    appId: "1:522292548010:web:8d730ac594734b9a2c5bd3",
    measurementId: "G-YW3JGYE2BW"
});

const messaging = firebase.messaging();
