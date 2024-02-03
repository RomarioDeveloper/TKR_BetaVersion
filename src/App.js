import React, { useEffect, useState } from 'react';
import './App.css';
import { askForPermissionToReceiveNotifications } from './firebase-config';

function App() {
  const [token, setToken] = useState('');

  useEffect(() => {
    askForPermissionToReceiveNotifications()
      .then(fetchedToken => {
        console.log(fetchedToken);
        setToken(fetchedToken); // Сохраняем токен в состоянии
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>Push Notification Demo</p>
        <button onClick={() => askForPermissionToReceiveNotifications().then(setToken)}>
          Enable Notifications
        </button>
        {token && <div><p>Your Notification Token:</p><textarea readOnly value={token} /></div>}
      </header>
    </div>
  );
}

export default App;
