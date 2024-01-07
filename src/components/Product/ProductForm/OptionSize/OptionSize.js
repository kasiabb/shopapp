import clsx from 'clsx';
import styles from '../../Product.module.scss';
import PropTypes from 'prop-types';

const OptionSize = ({ size, onSelectSize, isActive }) => {
  return (
    <button
      value={size.name}
      type='button'
      className={clsx(isActive && styles.active)}
      onClick={() => onSelectSize(size.name)}
    >
      {size.name}
    </button>
  );
};

OptionSize.propTypes = {
  size: PropTypes.shape({
    name: PropTypes.string.isRequired,
    additionalPrice: PropTypes.number.isRequired,
  }).isRequired,
  onSelectSize: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  additionalPrice: PropTypes.number.isRequired,
};

export default OptionSize;
