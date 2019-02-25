import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useGesture } from 'react-with-gesture';

import styles from './styles.module.css';

const Card = ({
  children,
  updateStore,
  card,
}) => {
  const { id } = card;
  const [{ x, y }, setPos] = useState({
    x: card.x || 0,
    y: card.y || 0,
  });
  const [{ width, height }, setSize] = useState({
    width: card.width,
    height: card.height,
  });
  const move = useGesture(
    ({ down, local }) => {
      if (!down) {
        updateStore(id, {
          x: x + local[0],
          y: y + local[1],
        });
      }
      setPos({
        x: x + local[0],
        y: y + local[1],
      });
    },
  );
  const resize = useGesture(
    ({ down, local }) => {
      if (!down) {
        updateStore(id, {
          width: width + local[0],
          height: height + local[1],
        });
      }
      setSize({
        width: width + local[0],
        height: height + local[1],
      });
    },
  );
  // create on dom node level wrapper, not touching resize
  return (
    <div
      className={styles.card}
      style={{
        width,
        height,
        top: y,
        left: x,
      }}
    >
      {children}
      <div {...move()} className={styles.move} />
      <div
        {...resize()}
        className={styles.resize}
      />
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node,
  updateStore: PropTypes.func,
  card: PropTypes.object,
};

export default Card;
