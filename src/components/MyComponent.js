import PropTypes from 'prop-types';
import clsx from 'clsx';

export const MyComponent = ({ className }) => {
  return (
    <div className={clsx(className)}>
      <p className="text-2xl font-bold text-blue-600">
        This text should be 2xl, bold, and blue-600.
      </p>
    </div>
  );
};

MyComponent.propTypes = {
  className: PropTypes.string,
};

export default MyComponent;
