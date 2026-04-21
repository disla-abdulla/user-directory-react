function Avatar({ imageId, altName, classNames }) {
  return (
    <img
      className={classNames}
      src={`https://i.pravatar.cc/150?img=${imageId}`}
      alt={altName || "User Avatar"}
    />
  );
}
export default Avatar;
