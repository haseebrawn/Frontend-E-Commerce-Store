import React from 'react';
import './Button.css'; // Import any additional CSS for styling
// import '';

const Button = ({ click_event, btn_label, class_name }) => {
  return (
    <button className={class_name} onClick={click_event}>
      {btn_label}
    </button>
  );
};

export default Button;
