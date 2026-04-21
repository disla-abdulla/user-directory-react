function Avatar({ image, altName, classNames }) {
  return <img className={classNames} src={image} alt={altName} />;
}
export default Avatar;
