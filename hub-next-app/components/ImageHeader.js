const ImageHeader = ({children, size, src, imgFade}) => {
  return (
    <div className="image-header" style={
      {
        height: size !== 'lg' ? (size === 'md' ? '80vh' : '50vh') : '95vh',
        backgroundImage: imgFade ? `linear-gradient(0deg, rgba(40,40,40,1) 0%, rgba(0,0,0,0) 45%), url('${src}')` : `url('${src}')`
      }
    }>
      {children ? children : null}
    </div>
  );
}
 
export default ImageHeader;