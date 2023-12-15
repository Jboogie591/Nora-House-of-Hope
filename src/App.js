import './App.css';
import { Route,Routes,withRouter,Redirect } from 'react-router-dom';
import Homepage from './Home';
import CreatePitch from './CreatePitch';
import DonorDash from './DonorDash';
import Pitches from './Pitches';
import RecipientDash from './RecipientDash';
import Donate from './Donate';
import Pitch from './Pitch';

function App() {
  return (
    <div className="App">
      
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/create-pitch' element={<CreatePitch/>}/>
      <Route path='/donor-dashboard' element={<DonorDash/>}/>
      <Route path='/pitches' element={<Pitches/>}/>
      <Route path='/recipient-dashboard' element={<RecipientDash/>}/>
      <Route path='/:id/donate' element={<Donate/>}/>
      <Route path='/pitches/:id' element={<Pitch/>}/>
    </Routes>
    </div>
  );
}

export default App;
