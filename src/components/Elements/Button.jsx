import PropTypes from 'prop-types';
const Button = ({ children , variant= ' bg-custom-red hover:bg-hover ' , styling='px-12 py-4 text-white'}) => {
  return (
    <button className={`${variant} flex justify-center items-center font-sans ${styling}`}>
        {children}
    </button>
  )
}

Button.propTypes = {
    styling: PropTypes.string,
    variant: PropTypes.string,
    children: PropTypes.node.isRequired,
  };

export default Button
