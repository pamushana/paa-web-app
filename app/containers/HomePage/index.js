/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import withRoot from 'withRoot';
// --- Post bootstrap -----
import ProductCategories from 'views/ProductCategories';
import ProductSmokingHero from 'views/ProductSmokingHero';
import AppFooter from 'views/AppFooter';
import ProductHero from 'views/ProductHero';
import ProductValues from 'views/ProductValues';
import ProductHowItWorks from 'views/ProductHowItWorks';
import ProductCTA from 'views/ProductCTA';
import AppAppBar from 'views/AppAppBar';

/* eslint-disable react/prefer-stateless-function */
class HomePage extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <AppAppBar />
        <ProductHero />
        <ProductValues />
        <ProductCategories />
        <ProductHowItWorks />
        <ProductCTA />
        <ProductSmokingHero />
        <AppFooter />
      </React.Fragment>
    );
  }
}

export default withRoot(HomePage);
