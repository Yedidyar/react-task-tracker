import PropTypes from "prop-types";

const Button = ({ color, text,onAdd }) => {
  return (
    <div>
      <button className="btn" style={{ backgroundColor:color } } onClick={onAdd}>
        {text}
      </button>
    </div>
  );
};
Button.defaultProps = {
  color: "steelblue",
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
};

export default Button;
