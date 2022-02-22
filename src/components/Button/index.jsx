function Button({ className, onClick, ...props }) {
  className = Array.isArray(className) ? className.join(' ') : className;
  className = ['button', className].join(' ').trim();

  return (
    <button type="button" className={className} onClick={onClick}>
      {props.children}
    </button>
  );
}

export default Button;
