import styles from '../Product.module.scss';
import OptionSize from './OptionSize/OptionSize';
import OptionColor from './OptionColor/OptionColor';
import Button from './Button/Button';
import PropTypes from 'prop-types';

const ProductForm = (props) => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log('Summary');
    console.log('==============');
    console.log('Name: ', props.title);
    console.log('Price: ', props.price, '$');
    console.log('Size: ', props.currentSize);
    console.log('Color: ', props.currentColor);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={styles.sizes}>
        <h3 className={styles.optionLabel}>Sizes</h3>
        <ul className={styles.choices}>
          {props.sizes.map((size) => (
            <li key={size.name}>
              <OptionSize
                size={size}
                onSelectSize={props.handleSizeChange}
                isActive={size.name === props.currentSize}
                additionalPrice={size.additionalPrice}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.colors}>
        <h3 className={styles.optionLabel}>Colors</h3>
        <ul className={styles.choices}>
          {props.colors.map((color) => (
            <li key={color}>
              <OptionColor
                color={color}
                currentColor={props.currentColor}
                handleColorChange={props.handleColorChange}
              />
            </li>
          ))}
        </ul>
      </div>
      <Button className={styles.button} type='submit'>
        <span className='fa fa-shopping-cart' />
      </Button>
    </form>
  );
};

ProductForm.propTypes = {
  sizes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      additionalPrice: PropTypes.number.isRequired,
    })
  ).isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentSize: PropTypes.string.isRequired,
  currentColor: PropTypes.string.isRequired,
  handleSizeChange: PropTypes.func.isRequired,
  handleColorChange: PropTypes.func.isRequired,
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default ProductForm;
