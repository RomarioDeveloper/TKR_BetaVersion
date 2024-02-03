import React, { useEffect } from 'react';
import { askForPermissionToReceiveNotifications } from './firebase-config';

function App() {
  useEffect(() => {
    askForPermissionToReceiveNotifications().then((token) => console.log(token));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>Push Notification Demo</p>
        <button onClick={askForPermissionToReceiveNotifications}>Enable Notifications</button>
      </header>
    </div>
  );
}

export default App;
