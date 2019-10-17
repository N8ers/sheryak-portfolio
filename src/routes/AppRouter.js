import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Header from '../components/Header';
import HomePage from '../components/HomePage';
import PortfolioPage from '../components/PortfolioPage';
import ContactPage from '../components/ContactPage';
import '../AppRouter.css';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/portfolio" component={PortfolioPage} />
        <Route path="/contact" component={ContactPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default AppRouter;
