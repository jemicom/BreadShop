import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/Home";
import Songs from "./routes/songs/Songs";
import SongDetail from "./routes/songs/SongDetail";
import Breads from "./routes/breads/Breads";

function App() {  
  return (
    <div className="App"> 
       <header>
          <ul className="flex gap-48">
            <li> <a href="/">HOME</a></li>
            <li> <a href="/songs">Songs</a></li>
            <li> <a href="/breads">Breads</a></li>
          </ul>
       </header>

       <Routes>
          <Route path="/"  element={ <Home /> }/>
          <Route path="/songs"  element={ <Songs /> }/>
          <Route path="/songs/:id"  element={ <SongDetail /> }/>
          <Route path="/breads"  element={ <Breads /> }/>
       </Routes>

       <footer>footer</footer>
    </div>
  );
}

export default App;
