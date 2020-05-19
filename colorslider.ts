
const { React, ReactDOM } = window
const { useEffect, useState, useRef } = React
const { render } = ReactDOM
const rootNode = document.getElementById('ColorSlider')

/**
 * Exploring hooks to find color between two points
 */
const getAngle = (event, element, buffer) => {
  const { clientX: x, clientY: y } =
    event.touches && event.touches.length ? event.touches[0] : event;
  const {
    x: handleX,
    y: handleY,
    width: handleWidth,
    height: handleHeight
  } = element.getBoundingClientRect();
  const handleCenterPoint = {
    x: handleX + handleWidth / 2,
    y: handleY + handleHeight / 2
  };
  const angle =
    (Math.atan2(handleCenterPoint.y - y, handleCenterPoint.x - x) * 180) /
    Math.PI;
  return Math.max(buffer, Math.min(180 - buffer, Math.abs(angle)));
};

const getInitialAngle = (value, buffer) => {
  return ((180 - buffer * 2) / 100) * value + buffer;
};

const ColorSlider = ({
  hue: propsHue = 180,
  saturation: propsSaturation = 100,
  lightness: propsLightness = 50,
  handleSize = 50,
  BUFFER = 40,
  onChange
}) => {
  const [hue, setHue] = useState(propsHue);
  const [cursor, setCursor] = useState("touch");
  const [lightness, setLightness] = useState(propsLightness);
  const [saturation, setSaturation] = useState(propsSaturation);
  const [saturationAngle, setSaturationAngle] = useState(
    getInitialAngle(saturation, BUFFER)
  );
  const [lightnessAngle, setLightnessAngle] = useState(
    180 + (180 - getInitialAngle(lightness, BUFFER))
  );
  const handleRef = useRef(null);
  const trackRef = useRef(null);

  /**
   * Updates hue based on the pointer position
   * @param {Number} x - Where pointer is in relation to hue track
   */
  const updateHue = (e) => {
    // Return if moving handle
    if (e.target.dataset.hslSliderHandle) return;
    const { clientX: x } = e.touches && e.touches.length ? e.touches[0] : e;
    const {
      left: trackLeft,
      width: trackWidth
    } = trackRef.current.getBoundingClientRect();
    const newValue = (x - trackLeft) / trackWidth;
    setHue(Math.max(0, Math.min(360, newValue * 360)));
  };

  /*
   * @param {Object} event - pointer event
   */
  const updateLightness = (event) => {
    const angle = getAngle(event, handleRef.current, BUFFER);
    const lightness = ((angle - BUFFER) / (180 - BUFFER * 2)) * 100;
    setLightnessAngle(180 + (180 - angle));
    setLightness(lightness);
  };

  const updateSaturation = (event) => {
    const angle = getAngle(event, handleRef.current, BUFFER);
    const saturation = ((angle - BUFFER) / (180 - BUFFER * 2)) * 100;
    setSaturation(saturation);
    setSaturationAngle(angle);
  };

  /**
   * A method to handle event listening on handle
   * Removes event listeners on pointerUp
   */
  const handleUp = (onMove) => {
    const up = () => {
      setCursor("touch");
      document.documentElement.style.setProperty("--cursor", "initial");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("mouseup", up);
      window.removeEventListener("touchend", up);
    };
    return up;
  };

  /**
   * Method listening for handle
   */
  const handleDown = (onMove, stopPropagation) => (e) => {
    if (stopPropagation) e.stopPropagation();
    setCursor("touching");
    document.documentElement.style.setProperty("--cursor", "touching");
    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onMove);
    window.addEventListener("mouseup", handleUp(onMove));
    window.addEventListener("touchend", handleUp(onMove));
  };

  useEffect(() => {
    if (onChange) onChange({ hue, saturation, lightness });
  }, [hue, saturation, lightness]);

  useEffect(() => {
    trackRef.current.addEventListener("click", updateHue);
    return () => {
      trackRef.current.removeEventListener("click", updateHue);
    };
  }, []);


const ColorSlider = () => {
  const [color, setColor] = useState({});
  /* const [color, setColor] = useState(new w3color("hsl(180, 100%, 50%")); */
  const styles = {color: color};
  /* const onChange = ({ hue, saturation, lightness }) => {
    setColor(new w3color(`hsl(${hue}, ${saturation}%), ${lightness}%`)); */
  };
  
  return (

ReactDOM.render('ColorSlider')
  )};