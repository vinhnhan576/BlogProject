import { BrowserRouter, Route, Link } from "react-router-dom";

import Footer from "./Footer";
import Header from "./Header";
import Routes from "../routes/routes";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
        <div className="container">
          <div className="main">
            <Routes />
          </div>
        </div>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
