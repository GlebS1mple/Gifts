import React, { Suspense } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Form from "./components/Form/Form";
import store from "./redux/store";
import { Provider } from 'react-redux';
import FooterContainer from './components/Footer/FooterContainer';
import AboutContainer from './components/About/AboutContainer';
import CatalogPageContainer from "./components/CatalogPage/CatalogPageContainer";
import NavContainer from './components/Nav/NavContainer';
import MainContainer from './components/Main/MainContainer';
//import Preloader from './components/Common/Preloader/Preloader';


//const Main = React.lazy(() => import("./components/Main/Main"));
//const CatalogPage = React.lazy(() => import("./components/CatalogPage/CatalogPage"));






function App() {
  return (
    <div >
      <HashRouter>
        <Provider store={store}>
          <AboutContainer />
          <NavContainer />
          <Routes>
            <Route path="main/" element={<MainContainer />} />
            <Route index element={<MainContainer />} />
            <Route path="/catalog" element={<CatalogPageContainer />} />
            <Route path='*' element={<div>404 NOT FOUND</div>} />
          </Routes>
          <Form />
          <FooterContainer />
        </Provider>
      </HashRouter>
    </div>
  );
}

export default App;
