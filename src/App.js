
import Home from './pages/homes/Home';
import Login from './pages/login/Login';
import List from './pages/list/List';
import New from  './pages/new/New';
import { BrowserRouter , Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/"/>
        <Route index element={<Home/>}/>
        <Route path="login" element={ <Login/> } />
        <Route path="addUser" element={ <List/> } />
        <Route path="users/new" element={ <New/> } />

      </Routes>
      </BrowserRouter>
      
    </div>
    // <div className="App">
    //   <Home/>
    // </div>
  );
}

export default App;



