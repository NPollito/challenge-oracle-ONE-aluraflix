const Button = ({ type, value, typeBotton, paddingX }) => {
  return (
    <input
      className={`btn ${typeBotton} px-${paddingX}`}
      type={type}
      value={value}
    />
  );
};

export default Button;
