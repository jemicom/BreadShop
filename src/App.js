import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/Home";
import Songs from "./routes/songs/Songs";
import SongDetail from "./routes/songs/SongDetail";
import Breads from "./routes/breads/Breads";
import ChicorBoard from "./routes/chicor_board/ChicorBoard";
import Skincare from "./routes/skincare/Skincare";
import Makeup from "./routes/makeup/Makeup";
import SidebarLayout from "./components/sidebar_layout/SidebarLayout";

function App() {  
  return (
    <div className="App"> 
       <header>
          {/* <ul className="flex gap-48">
            <li> <a href="/">HOME</a></li>
            <li> <a href="/songs">Songs</a></li>
            <li> <a href="/breads">Breads</a></li>
            <li> <a href="/skincare">Skincare</a></li>
            <li> <a href="/makeup">makeup</a></li>
          </ul> */}
       </header>

       <Routes>
          <Route path="/"  element={ <Home /> }/>
          <Route path="/songs"  element={ <Songs /> }/>
          <Route path="/songs/:id"  element={ <SongDetail /> }/>
          <Route path="/breads"  element={ <Breads /> }/>
          <Route path="/chicor_board"  element={ <ChicorBoard /> }/>
          <Route path="/skincare"  element={
            <SidebarLayout>
              <Skincare />
            </SidebarLayout>
           }  />
          <Route path="/makeup"  element={
              <SidebarLayout>
                <Makeup />
              </SidebarLayout>
           }  />
       </Routes>

       <footer>footer</footer>
    </div>
  );
}

export default App;
