

import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import Products from "./pages/Products";
import About from "./pages/About";
import Shop from "./pages/Shop";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />

      <Home />
      <Contacts />
      <Products />
<About />
<Shop />

      <Footer />
    </div>
  )
};

export default App;
