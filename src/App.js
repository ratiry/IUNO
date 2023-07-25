import logo from './logo.svg';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import classes from  './App.module.scss';
import Welcome from './components/Pages/Welcome/Welcome';
import Game from './components/Pages/Game/Game';
import Results from './components/Pages/Results/Results';
export const URLs={
  welcome:'/',
  game:"Game",
  results:"Results"
}
function App() {

  return (
    <div className={classes.App}>
      <BrowserRouter>
        <Routes>
          <Route path={URLs.welcome} element={<Welcome/>}></Route>
          <Route path={URLs.game} element={<Game/>}></Route>
          <Route path={URLs.results} element={<Results/>}></Route>          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
