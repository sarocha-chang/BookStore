import { Switch, Route, Link } from "react-router-dom";
import Sidebar from "./admin/Sidebar";
import ContainerAd from "./admin/Container";
import ShowBook from "./admin/ShowBook";
import GlobalStyle from "./GlobalStyle";
function App() {
  return (
    <>
      <GlobalStyle />
      
      <Switch>

        <Route path="/HomeAdmin">
          <Sidebar />
          <ContainerAd>
            <ShowBook />
          </ContainerAd>
        </Route>

        <Route path="/AddBookAd">
          <Sidebar />
          <ContainerAd></ContainerAd>
        </Route>

        <Route path="/">
          <Link to="/HomeAdmin">Admin</Link>
        </Route>

      </Switch>
    </>
  );
}

export default App;
