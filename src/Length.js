import React from "react";
import { useState } from "react";

const scaleNames = {
    m: 'Meters',
    f: 'Feets'
}
const meterToFeet = (meter) => meter * 3.2808
const feetToMeter = (feet) => feet / 3.2808

const convert = (length, convert) => {
    const num = parseFloat(length);
    if (Number.isNaN(num)) return '';
    const converted = Math.round(convert(num) * 1000) / 1000;
    return converted.toString();
}

const LengthInput = (props) => {
    const handleChange = (e) => {
        props.onLengthChange(e.target.value);
      }
      const length = props.length;
      const scale = props.scale;
      return (
        <fieldset>
          <legend>Enter length in {scaleNames[scale]}:</legend>
          <input value={length}
                  onChange={handleChange} />
        </fieldset>
      );
}

const LengthConvert = (props) => {
    const [state, setState] = useState({length: '', scale: 'm'});
    const handleMeterChange = (length) => {
        setState({scale: 'm', length});
    };
    const handleFeetChange = (length) => {
    setState({scale: 'f', length});
    };
    const scale = state.scale;
    const length = state.length;
    const meter = scale === 'f' ? convert(length, meterToFeet) : length;
    const feet = scale === 'm' ? convert(length, feetToMeter) : length;

    return (
        <div>
            <LengthInput 
                scale='m'
                length={meter}
                onLengthChange={handleMeterChange}
                />
            <LengthInput 
                scale='f'
                length={feet}
                onLengthChange={handleFeetChange}
                />
        </div>
    )
}

export default LengthConvert