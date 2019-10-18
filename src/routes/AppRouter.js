import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Header from '../components/Header';
import HomePage from '../components/HomePage';
import PortfolioPage from '../components/PortfolioPage';
import ContactPage from '../components/ContactPage';
import BlogPage from '../components/BlogPage';
import '../styles/AppRouter.css';

const AppRouter = () => {
  return (
    <div className="body">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" component={HomePage} exact={true} />
          <Route path="/portfolio" component={PortfolioPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/blog" component={BlogPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default AppRouter;
