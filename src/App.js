import logo from './logo.svg';
import './App.css';
import {Authenticator} from '@aws-amplify/ui-react';
import GetScreen from "./pages/GetScreen";

function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
        <Authenticator>
            {({ signOut, user }) => (
                <div className="App">
                    <p>
                        Hey {user.username}, welcome to my channel, with auth!
                    </p>
                    <button onClick={signOut}>Sign out</button>
                </div>
            )}
        </Authenticator>
      <GetScreen />
    </div>
  );
}

export default App;
