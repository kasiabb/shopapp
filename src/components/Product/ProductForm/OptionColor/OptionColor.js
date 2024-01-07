import clsx from 'clsx';
import styles from '../../Product.module.scss';

const OptionColor = ({ color, currentColor, handleColorChange }) => {
  return (
    <button
      type='button'
      className={clsx(
        styles[
          `color${color[0].toUpperCase()}${color.substr(1).toLowerCase()}`
        ],
        color === currentColor && styles.active
      )}
      onClick={() => handleColorChange(color)}
    ></button>
  );
};

export default OptionColor;
