import axios from "axios";
import { useState, useEffect } from "react";
import { Switch, Route,  Link } from "react-router-dom";
import Sidebar from "./admin/Sidebar";
import ContainerAd from "./admin/Container";
import ShowBook from "./admin/ShowBook";
import GlobalStyle from "./GlobalStyle";
function App() {
  const [product, SetProduct] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/show").then((res) => {
      SetProduct(res.data);
    });
  }, []);
  console.log();

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
          <ContainerAd>
          </ContainerAd>
          </Route>
		<Route path="/">
			<Link to="/HomeAdmin">Admin</Link>
		</Route>
      </Switch>

      {/* <div className="App">
			{product.map((data) => (
				<h1>{data.name}</h1>
			))}
		</div> */}
    </>
  );
}

export default App;
