import Header from "./Components/Header";
import "./App.css";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Foundation from "./Components/Foundation";
import { Route, Routes } from "react-router-dom";
import Prayer from "./Components/Prayer"

function App() {
  return (
    <>
      <main className="">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="Foundation" element={<Foundation />}></Route>
          <Route path="prayer" element={<Prayer />}></Route>
        </Routes>

        <Footer />
      </main>
    </>
  );
}

export default App;
