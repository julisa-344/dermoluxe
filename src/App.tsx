import "./App.css";
import React, { Suspense } from "react";
import Nav from "./components/navBar";
const HomePage = React.lazy(() => import("./pages/HomePage"));
import Footer from "./components/footer";
import "./theme.scss";

function App() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@300"
        rel="stylesheet"
      />
      <Nav />
      <Suspense fallback={<div>Loading...</div>}>
        <HomePage />
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
