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
import Navbar from "./home/Navbar";
import List from "./user/showBook/List";
import NavBarAll from "./user/Navbar_list";
import ContainerAll from "./user/Container";
import BookDetail from "./user/bookDetail/Bookdetail";
import Footer from "./user/Footer";
import Cart from "./user/cart/Cart";
import "boxicons";


function App() {
  return (
    <>
      <GlobalStyle />

      <Switch>
        <Route path="/List">
          <NavBarAll />
          <ContainerAll>
            <List />
          </ContainerAll>
          <Footer/>
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

        <Route path="/BookDetail/:id">
          <NavBarAll />
          <ContainerAll>
            <BookDetail />
          </ContainerAll>
        </Route>

        <Route path="/Cart">
          <NavBarAll />
          <ContainerAll>
            <Cart />
          </ContainerAll>
        </Route>

        <Route path="/">
          <Link to="/HomeAdmin" style={{ margin: "30px" }}>
            Admin
          </Link>
          <Link to="/Home" style={{ margin: "30px" }}>
            Home
          </Link>
          <Link to="/List">List</Link>
        </Route>
      </Switch>
    </>
  );
}

export default App;
