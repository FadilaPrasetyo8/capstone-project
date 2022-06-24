// import "./App.css";

// import Dashboard from "./pages/dashboard";
// import DetailArtikel from "./pages/detailArtikel";

// function App() {
//   return (
//     <div>
//       <Dashboard />
//       {/* <DetailArtikel /> */}
//     </div>
//   );
// }

// export default App;

import React from "react";

// import { ListArticle } from "./pages/article-list/ListArticle";
// import Edukasi from "./pages/edukasi/Edukasi";
// import CheckKesehatan from "./pages/cek-kesehatan/Kesehatan";
// import Navigasi from "./pages/navbar/Navbar";
import { Navigasi } from "./component/dashboard/Navigasi";
import Dashboard from "./pages/dashboard";
import DetailArtikel from "./pages/detailArtikel";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import getData from "./utils/data";

import "./App.css";

function App() {
  // const datas = getData();

  // const Dashboard = () => {
  //   return <h1>Halaman Home</h1>;
  // };

  return (
    <Router>
      <div className="App">
        <Navigasi />
        <Switch>
          {/* <Route path="/" children={<Dashboard />} /> */}
          <Route path="/DetailArtikel" children={<DetailArtikel />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
