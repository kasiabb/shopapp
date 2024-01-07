import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import { useState, useMemo } from 'react';
import ProductImage from './ProductImage/ProductImage.js';
import ProductForm from './ProductForm/ProductForm.js';

const Product = (props) => {
  const [currentColor, setColor] = useState(`${props.colors[0]}`);
  const [currentSize, setSize] = useState(`${props.sizes[0].name}`);

  const handleSizeChange = (size) => {
    setSize(size);
  };

  const handleColorChange = (color) => {
    setColor(color);
  };

  const price = useMemo(() => {
    const selectedSize = props.sizes.find((size) => size.name === currentSize);
    return selectedSize
      ? props.basePrice + selectedSize.additionalPrice
      : props.basePrice;
  }, [currentSize, props.basePrice, props.sizes]);

  return (
    <article className={styles.product}>
      <ProductImage
        title={props.title}
        name={props.name}
        currentColor={currentColor}
      />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {price}$</span>
        </header>
        <ProductForm
          sizes={props.sizes}
          colors={props.colors}
          currentSize={currentSize}
          currentColor={currentColor}
          handleSizeChange={handleSizeChange}
          handleColorChange={handleColorChange}
          price={price}
          title={props.title}
        />
      </div>
    </article>
  );
};

Product.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  sizes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      additionalPrice: PropTypes.number.isRequired,
    })
  ).isRequired,
  basePrice: PropTypes.number.isRequired,
};

export default Product;
