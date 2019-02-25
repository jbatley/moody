import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { useGesture } from 'react-with-gesture';
import { useSpring } from 'react-spring';

import styles from './styles.module.css';

const updatePos = (down, local, pos, store, id, x, y, width, card) => {
  if (!down) {
    console.log('d', local);
    // store(id, {
    //   x: x + local[0],
    //   y,
    //   // y: y + local[1],
    // });
  }
  const t = width !== card.width ? x + local[0] - width / 2 : x + local[0];
  console.log(x);
  pos({
    x: t,
    y,
    // y: y + local[1],
  });
};

const Card = ({
  children,
  updateStore,
  card,
}) => {
  const {
    id,
  } = card;
  const [{ x, y }, setPos] = useState({
    x: card.x || 0,
    y: card.y || 0,
  });
  const [{ width, height }, setSize] = useState({
    width: card.width,
    height: card.height,
  });
  const resizeIcon = useRef(null);
  const box = useRef(null);
  const bind = useGesture(
    ({ down, local, target, delta }) => {
      if (target !== resizeIcon.current) {
        updatePos(down, local, setPos, updateStore, id, x, y, width, card);
      } else {
        // const newWidth = ;
        // const newHeight = height + (delta[1]);
        setSize({
          width: width + (delta[0]),
          height,
          // height: newHeight,
        });
        setPos({
          y,
          x: Math.round((x) + (delta[0] / 2)),
        });
      }
    },
  );
  return (
    <div
      className={styles.card}
      {...bind()}
      ref={box}
      style={{
        width,
        height,
        transform: `translate3d(${x}px,${y}px,0)`,
        // top: y,
        // left: x,
      }}
    >
      {x}[]{width}
      <div
        className={styles.resize}
        ref={resizeIcon}
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
