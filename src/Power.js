import React, { useState } from 'react';
import PropTypes from 'prop-types';


const Power = (props) => {
  const [x, setX] = useState(props.x);
  const [y, setY] = useState(props.y);
  const [result, setResult] = useState(null);

  const calculatePower = () => {
    const base = parseFloat(x);
    const exponent = parseFloat(y);
    if (!isNaN(base) && !isNaN(exponent)) {
      setResult(Math.pow(base, exponent));
    }
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px' }}>
      <h3>Komponent Power - Obliczanie x^y</h3>
      <div>
        <label>
          Podstawa (x):
          <input
            type="number"
            value={x}
            onChange={(e) => setX(e.target.value)}
            style={{ margin: '5px' }}
          />
        </label>
      </div>
      <div>
        <label>
          Wykładnik (y):
          <input
            type="number"
            value={y}
            onChange={(e) => setY(e.target.value)}
            style={{ margin: '5px' }}
          />
        </label>
      </div>
      <button onClick={calculatePower} style={{ margin: '10px', padding: '5px 10px' }}>
        Oblicz
      </button>
      {result !== null && (
        <div>
          <strong>Wynik: {x}^{y} = {result}</strong>
        </div>
      )}
    </div>
  );
};

Power.defaultProps = {
  x: 2,
  y: 3
};

Power.propTypes = {
  x: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  y: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

export default Power;