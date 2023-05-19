const Button = ({ children, icon, variant = "button-primary" }) => {
  return (
    <button className={`button ${variant}`}>
      <span>{children}</span>
      {icon && <span>{icon}</span>}
    </button>
  );
};

export default Button;
