import React from "react";
import { useState } from "react";

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};
  
const toCelsius = (fahrenheit) => {
  return (fahrenheit - 32) * 5 / 9;
}

const toFahrenheit = (celsius) => {
  return (celsius * 9 / 5) + 32;
}
  
const tryConvert = (temperature, convert) => {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

const BoilingVerdict = (props) => {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

const TemperatureInputV2 = (props) => {
  const handleChange = (e) => {
    props.onTemperatureChange(e.target.value);
  }
  const temperature = props.temperature;
  const scale = props.scale;
  return (
    <fieldset>
      <legend>Enter temperature in {scaleNames[scale]}:</legend>
      <input value={temperature}
              onChange={handleChange} />
    </fieldset>
  );
}

const TempConverterV2 = (props) => {
  const [state, setState] = useState({temperature: '', scale: 'c'});
  const handleCelsiusChange = (temperature) => {
    setState({scale: 'c', temperature});
  };
  const handleFahrenheitChange = (temperature) => {
    setState({scale: 'f', temperature});
  };
  const scale = state.scale;
  const temperature = state.temperature;
  const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
  const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

  return (
    <div>
        <TemperatureInputV2
          scale="c"
          temperature={celsius}
          onTemperatureChange={handleCelsiusChange} />
        <TemperatureInputV2
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={handleFahrenheitChange} />
        <BoilingVerdict
          celsius={parseFloat(celsius)} />
      </div>
  );
}

export default TempConverterV2