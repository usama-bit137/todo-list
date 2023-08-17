function ActionButton({ action, children, image, imageWidth, alt, className }) {
  return (
    <button
      style={{ cursor: "pointer" }}
      onClick={action}
      className={className}
    >
      <span style={{ padding: 0 }}>{children}</span>
      <img
        src={image}
        width={`${imageWidth}`}
        alt={alt}
        style={{ padding: 0, margin: 0 }}
        className="icon"
      />
    </button>
  );
}

export default ActionButton;
