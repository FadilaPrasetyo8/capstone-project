import "./App.css";
import { Navigasi } from "./component/dashboard/Navigasi";
import Content from "./component/dashboard/content";
import Content1 from "./component/dashboard/content1";
import CardArtikel from "./component/dashboard/cardArtikel";

function App() {
  return (
    <div>
      <Navigasi />
      <Content />
      <Content1 />
      <CardArtikel />
    </div>
  );
}

export default App;
