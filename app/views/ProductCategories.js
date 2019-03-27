import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import LayoutBody from 'components/LayoutBody';
import Typography from 'components/Typography';

const styles = theme => ({
  root: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4),
  },
  images: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexWrap: 'wrap',
  },
  imageWrapper: {
    position: 'relative',
    display: 'block',
    padding: 0,
    borderRadius: 0,
    height: '40vh',
    [theme.breakpoints.down('sm')]: {
      width: '100% !important',
      height: 100,
    },
    '&:hover': {
      zIndex: 1,
    },
    '&:hover $imageBackdrop': {
      opacity: 0.15,
    },
    '&:hover $imageMarked': {
      opacity: 0,
    },
    '&:hover $imageTitle': {
      border: '4px solid currentColor',
    },
  },
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.common.black,
    opacity: 0.5,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px 14px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
});

function ProductCategories(props) {
  const { classes } = props;

  const images = [
    {
      url:
        'https://images.unsplash.com/photo-1549978113-29eb25c8177f?auto=format&fit=crop&w=400&q=80',
      title: 'Groundnuts',
      width: '40%',
    },
    {
      url:
        'https://images.unsplash.com/photo-1448062885262-aa6670248b0e?auto=format&fit=crop&w=400&q=80',
      title: 'Honey',
      width: '20%',
    },
    {
      url:
        'https://images.unsplash.com/photo-1460400355256-e87506dcec4f?auto=format&fit=crop&w=400&q=80',
      title: 'Strawberry',
      width: '40%',
    },
    {
      url:
        'https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=400&q=80',
      title: 'Maize',
      width: '38%',
    },
    {
      url:
        'https://images.unsplash.com/photo-1526470303-82c787d88682?auto=format&fit=crop&w=400&q=80',
      title: 'Pepper',
      width: '38%',
    },
    {
      url:
        'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=400&q=80',
      title: 'Potatoes',
      width: '24%',
    },
    {
      url:
        'https://images.unsplash.com/photo-1447175008436-054170c2e979?auto=format&fit=crop&w=400&q=80',
      title: 'Carrots',
      width: '40%',
    },
    {
      url:
        'https://images.unsplash.com/photo-1476455493505-114dd6921b54?auto=format&fit=crop&w=400&q=80',
      title: 'Butternut',
      width: '20%',
    },
    {
      url:
        'https://images.unsplash.com/photo-1543056295-d585ba290712?auto=format&fit=crop&w=400&q=80',
      title: 'Lettuce',
      width: '40%',
    },
  ];

  return (
    <LayoutBody className={classes.root} component="section" width="large">
      <Typography variant="h4" marked="center" align="center" component="h2">
        Mother Nature Approved.
      </Typography>
      <div className={classes.images}>
        {images.map(image => (
          <ButtonBase
            key={image.title}
            className={classes.imageWrapper}
            style={{
              width: image.width,
            }}
          >
            <div
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`,
              }}
            />
            <div className={classes.imageBackdrop} />
            <div className={classes.imageButton}>
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className={classes.imageTitle}
              >
                {image.title}
                <div className={classes.imageMarked} />
              </Typography>
            </div>
          </ButtonBase>
        ))}
      </div>
    </LayoutBody>
  );
}

ProductCategories.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductCategories);
