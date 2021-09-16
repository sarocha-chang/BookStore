import axios from "axios";
import { useState, useEffect } from "react";
import { Switch, Route,  Link } from "react-router-dom";
import Sidebar from "./admin/Sidebar";
import Container from "./admin/Container";
import ShowBook from "./admin/ShowBook";
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
      <Switch>
        <Route path="/HomeAdmin">
          <Sidebar />
          <Container>
            <ShowBook />
          </Container>
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
