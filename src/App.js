import './App.css';
import Adresse from './Component/Profile/Adresse';
import FullName from './Component/Profile/FullName';
import ProfilePhoto from './Component/Profile/ProfilePhoto';

function App() {
  return (
    <div className="App">
      <ProfilePhoto />
      <FullName />
      <Adresse />
      
    </div>
  );
}

export default App;
