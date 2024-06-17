import Home from "./pages/home/Home";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import List from "./pages/list/List";
import Edit from "./pages/new/New";
import Single from "./components/single/Single";
import { userInputs } from "./formSource";
import './style/dark.scss'
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";


function App() {
  const {darkMode} = useContext(DarkModeContext)
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="users">
            
            <Route index element={<List />} />
            <Route path=":id" element={<Single />} />
            <Route path="edit" element={<Edit inputs = {userInputs} title='Add new User' />} />
          </Route>
        </Route>
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
