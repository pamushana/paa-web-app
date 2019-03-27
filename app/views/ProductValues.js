import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import LayoutBody from 'components/LayoutBody';
import Typography from 'components/Typography';

import productCurvyLines from 'images/productCurvyLines.png';
import productValues1 from 'images/honey.svg';
import productValues2 from 'images/market.svg';
import productValues3 from 'images/drone.svg';

const styles = theme => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: theme.palette.primary.light,
  },
  layoutBody: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(30),
    display: 'flex',
    position: 'relative',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 3),
  },
  image: {
    height: 55,
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
  },
});

function ProductValues(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <LayoutBody className={classes.layoutBody} width="large">
        <img
          src={productCurvyLines}
          className={classes.curvyLines}
          alt="curvy lines"
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src={productValues1}
                alt="suitcase"
              />
              <Typography variant="h6" className={classes.title}>
                Ecological Farming
              </Typography>
              <Typography variant="h5">
                {
                  'We ensure healthy farming and healthy food for today and tomorrow, by protecting soil, water and climate, promoting biodiversity'
                }
                {
                  ', and avoiding contamination of the environment with chemical inputs or genetic engineering.'
                }
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img className={classes.image} src={productValues2} alt="graph" />
              <Typography variant="h6" className={classes.title}>
                Market Gardening
              </Typography>
              <Typography variant="h5">
                {
                  'Besides cash crops like maize, we produce fruits, vegetables and flowers, selling directly to consumers and restaurants.'
                }
                {
                  ' We provide a wide range and steady supply of fresh produce through the local growing season.'
                }
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img className={classes.image} src={productValues3} alt="clock" />
              <Typography variant="h6" className={classes.title}>
                Smart Farming
              </Typography>
              <Typography variant="h5">
                {
                  'We use modern technology to increase the quantity and quality of our agricultural products. '
                }
                {
                  'By precisely measuring variations within a field and adapting the strategy accordingly, we increase the effectiveness of pesticides and fertilizers, and use them more selectively.'
                }
              </Typography>
            </div>
          </Grid>
        </Grid>
      </LayoutBody>
    </section>
  );
}

ProductValues.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductValues);
