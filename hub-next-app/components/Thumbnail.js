
// This component creates a thumbnail image that can maintain its aspect-ratio

// the background can be set to an image URL

// The styling is in the componenet itself and not Sass since the paddingTop and background are set based on the props passed in.

const Thumbnail = (props) => {
  // if the aspectRatio prop is set use and split it otherwise default to and split a 1:1 ratio
  const aspectRatios = props.aspectRatio ? props.aspectRatio.split(':') : "1:1".split(':');

  const containerStyling = {
    maxWidth: "100%",
    height: "auto",
    margin: "0"
  };

  const targetStyling = {
    // if the background prop is set use it
    backgroundImage: `url("${props.src}")`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
    // calculate the padding based on the aspect ratio
    paddingTop: (aspectRatios[1] / aspectRatios[0]) * 100 + '%' /* Eg: a 16:9 aspect ratio is 9 / 16 * 100 = 56.25% */
  };

  return (
    <div style={containerStyling} className={props.containerClassNames}>
      <div className={props.imageClassNames} style={targetStyling}></div>
    </div>
  );
}
 
export default Thumbnail;