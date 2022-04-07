const ImageHeader = ({children, size, url, imgFade}) => {
  return (
    <div className="image-header" style={
      {
        height: size !== 'lg' ? '50vh' : '95vh', 
        backgroundImage: imgFade ? `linear-gradient(0deg, rgba(40,40,40,1) 0%, rgba(0,0,0,0) 45%), url('${url}')` : `url('${url}')`
      }
    }>
      {children ? children : null}
    </div>
  );
}
 
export default ImageHeader;