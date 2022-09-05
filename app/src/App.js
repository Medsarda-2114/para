import New from "./admin/pages/new";
import Home from "./admin/pages/Home";
import List from "./admin/pages/list";
import Single from "./admin/pages/single";
import Grid from "./admin/pages/Grid";
import Orders from "./admin/pages/Orders";
import Categories from "./admin/pages/Categories";

import { Route, Routes, BrowserRouter } from "react-router-dom";
import { userInputs, productInputs } from "./admin/formSource";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/orders" element={<Orders type="orders" />} />
          <Route path="/Categories" element={<Categories type="categorie" />} />
          <Route path="users">
            <Route index element={<List type="users" />} />

            <Route path=":id" element={<Single />} />
            <Route
              path="new"
              element={
                <New inputs={userInputs} title="Add New User" type="users" />
              }
            />
          </Route>
          <Route path="products">
            <Route index element={<Grid />} />
            <Route
              path="new"
              element={
                <New
                  inputs={productInputs}
                  title="Add New product"
                  type="products"
                />
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
