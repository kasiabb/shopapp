import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Product.module.scss';

const ProductImage = ({ title, name, currentColor }) => {
  const imagePath = `${process.env.PUBLIC_URL}/images/products/shirt-${name}--${currentColor}.jpg`;

  return (
    <div className={styles.imageContainer}>
      <img className={styles.image} alt={title} src={imagePath} />
    </div>
  );
};

ProductImage.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  currentColor: PropTypes.string.isRequired,
};

export default ProductImage;
