import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import HomePage from '../components/HomePage';
import PortfolioPage from '../components/PortfolioPage';
import ContactPage from '../components/ContactPage';
import '../AppRouter.css';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>I will be a header component... some day</div>
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/portfolio" component={PortfolioPage} />
        <Route path="/contact" component={ContactPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default AppRouter;
