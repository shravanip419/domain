import {BrowserRouter,Route,Routes} from 'react-router-dom';
import  Leaderboard  from './Pages/LeaderBoard';
import Home from './Pages/Home';
function App()
{
  return <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}/>
  </Routes>
  </BrowserRouter>
}
export default App;