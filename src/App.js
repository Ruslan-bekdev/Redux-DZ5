import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Container} from "react-bootstrap";
import UsersList from "./pages/usersList/UsersList";
import AddUser from "./pages/addUser/AddUser";
import Header from "./components/header/Header";
import UserInfo from "./components/userInfo/UserInfo";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Header/>
        <Routes>
          <Route index element={<UsersList/>}/>
          <Route path='register' element={<AddUser/>}/>
          <Route path='/:id' element={<UserInfo/>}/>
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
