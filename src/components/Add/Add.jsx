import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

const Add = ({ add }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [size, setSize] = useState({ width: 0, height: 0 });
  const toggle = () => setIsOpen(!isOpen);
  const handleChange = e => {
    const { target: { name } } = e;
    console.log(name, parseInt(e.target.value, 0));
    setSize({ ...size, [name]: parseInt(e.target.value, 0) });
  };
  const handleSubmit = () => {
    add(size);
    setIsOpen(false);
  };

  return (
    <>
      { isOpen && (
        <div className={styles.modal}>
          <input placeholder="width" name="width" type="tel" onChange={handleChange} />
          <input placeholder="height" name="height" type="tel" onChange={handleChange} />
          <button type="button" onClick={handleSubmit}>Add</button>
        </div>
      )}
      <div className={styles.add} onClick={toggle} onKeyPress={toggle}>
        <svg viewBox="0 0 24 24" height="80" widths="80">
          <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm3,11H13v2a1,1,0,0,1-2,0V13H9a1,1,0,0,1,0-2h2V9a1,1,0,0,1,2,0v2h2a1,1,0,0,1,0,2Z" />
        </svg>
      </div>
    </>
  );
};

Add.propTypes = {
  add: PropTypes.func,
};

export default Add;
