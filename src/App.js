import "./App.css";
import Main from "./components/Main";
import React, { useEffect } from "react";
import { Routes, Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SectionLeft from "./components/SectionLeft";
import { useState, UseEffect } from "react";
import { Form } from "react-bootstrap";
import NotFound from "./components/NotFound";
import SectionRigth from "./components/SectionRigth";
function App() {
  const [nav, setNav] = useState({});
  const [titles, setTitle] = useState();
  useEffect(() => {
    fetch("data/info.json")
      .then((e) => e.json())
      .then((res) => setNav(res));
  }, []);

  useEffect(() => {
    setTitle(Object.keys(nav));
  }, [nav]);
  const style = {
    backgroundImage: "linear-gradient(to top, #fad0c4 0%, #ffd1ff 100%)",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };
  return (
    <div>
      <Header data={nav} />
      <div style={style}>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          {titles &&
            titles.map((title, index) => {
              return (
                <Route
                  key={index}
                  path={`${title}`}
                  element={<SectionLeft data={Object.keys(nav[`${title}`])} />}
                >
                  {Object.keys(nav[`${title}`]).map((innerTitle, i) => {
                    return (
                      <Route
                        key={i}
                        path={`${innerTitle}`}
                        element={
                          <SectionRigth
                            data={nav[`${title}`][`${innerTitle}`]}
                          />
                        }
                      ></Route>
                    );
                  })}
                </Route>
              );
            })}
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
