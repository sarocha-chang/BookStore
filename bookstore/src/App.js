import { Switch, Route, Link } from "react-router-dom";
import Sidebar from "./admin/Sidebar";
import ContainerAd from "./admin/Container";
import ShowBook from "./admin/ShowBook";
import GlobalStyle from "./GlobalStyle";
import Login from "./resgister_and_login/Login";
import Container from "./resgister_and_login/components/containerforlogin";
import Register from "./resgister_and_login/Register";
import AddBookAd from "./admin/AddBook";
import EditBookAd from "./admin/EditBook";
import Navbar from "./home/Navbar"
import Navbar_list from "./listpage/Navbar_list"
import List from "./listpage/List"

function App() {

  return (

    <>
      <GlobalStyle />

      <Switch>
        <Route path="/List">
          <List/>
        </Route>

        <Route path="/Home">
          <Navbar />
        </Route>

        <Route path="/HomeAdmin">
          <Sidebar />
          <ContainerAd>
            <ShowBook />
          </ContainerAd>
        </Route>

        <Route path="/AddBookAdmin">
          <Sidebar />
          <ContainerAd>
            <AddBookAd />
          </ContainerAd>
        </Route>

        <Route path="/EditBookAdmin/:id">
          <Sidebar />
          <ContainerAd>
            <EditBookAd />
          </ContainerAd>
        </Route>

        <Route path="/Login">
          <Container>
            <Login />
          </Container>
        </Route>

        <Route path="/Register">
          <Container>
            <Register />
          </Container>
        </Route>

        <Route path="/">
          <Link to="/HomeAdmin" style={{margin:"30px"}}>Admin</Link>
          <Link to="/Home" style={{margin:"30px"}}>Home</Link>
          <Link to="/List">List</Link>
        </Route>

      </Switch>

    </>
  );
}

export default App;
