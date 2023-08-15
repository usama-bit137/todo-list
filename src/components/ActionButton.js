function ActionButton({ action, children, image, alt, className }) {
  return (
    <button onClick={action} className={className}>
      <span style={{ padding: 0 }}>{children}</span>
      <img
        src={image}
        width="15 px"
        alt={alt}
        style={{ padding: 0, margin: 0 }}
        className="icon"
      />
    </button>
  );
}

export default ActionButton;