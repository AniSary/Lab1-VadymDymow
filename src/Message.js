import React from 'react';
import PropTypes from 'prop-types';

const Message = (props) => {
  return (
    <div style={{ 
      padding: '10px', 
      margin: '10px', 
      backgroundColor: '#f0f0f0',
      border: '1px solid #ddd'
    }}>
      <strong>Wiadomość:</strong> {props.text}
    </div>
  );
};

// Wartości domyślne
Message.defaultProps = {
  text: "To jest domyślna wiadomość"
};

// Walidacja właściwości
Message.propTypes = {
  text: PropTypes.string.isRequired
};

export default Message;