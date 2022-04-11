

import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import Products from "./pages/Products";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />

      <Home />
      <Contacts />
      <Products />

      <Footer />
    </div>
  )
};

export default App;
