import {BrowserRouter,Route,Routes} from 'react-router-dom';
import  Leaderboard  from './Pages/LeaderBoard';
function App()
{
  return <BrowserRouter>
  <Routes>
    <Route path="/" element={<Leaderboard/>}/>
  </Routes>
  </BrowserRouter>
}
export default App;