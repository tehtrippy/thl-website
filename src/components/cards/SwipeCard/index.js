import React, { useCallback, useState } from 'react';
import clsx from 'clsx';
import BulletItem from './BulletItem';
import SwipeCardItem from './SwipeCardItem';
import { useWindowSize } from '../../../hooks/useWindowSize';
import { useSwipeable } from 'react-swipeable';
import styles from './styles.module.css';

const SwipeCard = ({ labs, style, className }) => {
  const { windowWidth } = useWindowSize();
  const [index, setIndex] = useState(0);
  const cardDimensions = {
    width: 300,
    height: 400,
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (index < labs.length - 1) setIndex(index + 1);
    },
    onSwipedRight: () => {
      if (index > 0) setIndex(index - 1);
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const getCardProps = useCallback(
    (i) => {
      const { width } = cardDimensions;

      if (i - 3 >= index) {
        return {
          translateX: width / 2 + width / 40,
          zIndex: -1,
          opacity: 0,
          scale: 0.75,
        };
      }

      if (i - 2 === index) {
        return {
          translateX: width / 2 + width / 40,
          zIndex: 0,
          opacity: windowWidth > 996 ? 1 : 0,
          scale: 0.75,
        };
      }

      if (i - 1 === index) {
        return {
          translateX: width / 4,
          zIndex: 1,
          opacity: windowWidth > width + width / 2 ? 1 : 0,
          scale: 0.85,
        };
      }

      if (i === index) {
        return {
          translateX: 0,
          zIndex: 2,
          opacity: 1,
          scale: 1,
        };
      }

      if (i + 1 === index) {
        return {
          translateX: -width / 4,
          zIndex: 1,
          opacity: windowWidth > width + width / 2 ? 1 : 0,
          scale: 0.85,
        };
      }

      if (i + 2 === index) {
        return {
          translateX: -width / 2 - width / 40,
          zIndex: 0,
          opacity: windowWidth > 996 ? 1 : 0,
          scale: 0.75,
        };
      }

      if (i + 3 <= index) {
        return {
          translateX: -width / 2 - width / 40,
          zIndex: -1,
          opacity: 0,
          scale: 0.75,
        };
      }
    },
    [index, cardDimensions, windowWidth],
  );
  return (
    <div
      className={clsx(styles.container, className)}
      {...handlers}
      style={style}
    >
      <div
        className={styles.slider}
        style={{
          height: cardDimensions.height,
          width:
            windowWidth * 0.95 > cardDimensions.width
              ? cardDimensions.width || '100%'
              : '100%',
        }}
      >
        {labs.map((card, i) => {
          const cardProps = getCardProps(i);
          return (
            <div
              key={card.title}
              className={styles.item}
              style={{
                transform: `translateX(${cardProps.translateX}px) scale(${cardProps.scale})`,
                opacity: cardProps.opacity,
                zIndex: cardProps.zIndex,
                cursor: i === index ? 'auto' : 'pointer',
              }}
              onClick={() => {
                setIndex(i);
              }}
            >
              <SwipeCardItem
                data={card}
                active={i === index}
                width={
                  windowWidth * 0.95 > cardDimensions.width
                    ? cardDimensions.width || '100%'
                    : '100%'
                }
                height={cardDimensions.height}
              />
            </div>
          );
        })}
      </div>
      {labs.length > 1 && (
        <div className={styles.bulletContainer}>
          {labs.map((card, i) => (
            <BulletItem
              key={card.title}
              active={i === index}
              onClick={() => {
                setIndex(i);
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SwipeCard;
