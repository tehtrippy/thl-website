import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export const LinkText = ({ to, textContent }) => {
  return (
    <Link to={to} className={styles.link}>
      {textContent}
    </Link>
  );
};

export const BiggestHeader = ({
  text,
  to,
  style,
  colorful = false,
  className,
}) => {
  return to ? (
    <LinkText
      to={to}
      textContent={
        <h1
          className={clsx(
            colorful && styles.colorful,
            styles.biggestHeader,
            className,
          )}
          style={style}
        >
          {text}
        </h1>
      }
    />
  ) : (
    <h1
      className={clsx(
        colorful && styles.colorful,
        styles.biggestHeader,
        className,
      )}
      style={style}
    >
      {text}
    </h1>
  );
};

export const SubBiggestHeader = ({
  text,
  to,
  style,
  colorful = false,
  className,
}) => {
  return to ? (
    <LinkText
      to={to}
      textContent={
        <h1
          className={clsx(
            colorful && styles.colorful,
            styles.subBiggestHeader,
            className,
          )}
          style={style}
        >
          {text}
        </h1>
      }
    />
  ) : (
    <h1
      className={clsx(
        colorful && styles.colorful,
        styles.subBiggestHeader,
        className,
      )}
      style={style}
    >
      {text}
    </h1>
  );
};

export const Header = ({ text, to, style, colorful = false, className }) => {
  return to ? (
    <LinkText
      to={to}
      textContent={
        <h1
          className={clsx(
            colorful && styles.colorful,
            styles.header,
            className,
          )}
          style={style}
        >
          {text}
        </h1>
      }
    />
  ) : (
    <h1
      className={clsx(colorful && styles.colorful, styles.header, className)}
      style={style}
    >
      {text}
    </h1>
  );
};

export const SubHeader = ({ text, to, style, colorful = false, className }) => {
  return to ? (
    <LinkText
      to={to}
      textContent={
        <h1
          className={clsx(
            colorful && styles.colorful,
            styles.subHeader,
            className,
          )}
          style={style}
        >
          {text}
        </h1>
      }
    />
  ) : (
    <h1
      className={clsx(colorful && styles.colorful, styles.subHeader, className)}
      style={style}
    >
      {text}
    </h1>
  );
};

export const HeaderDescription = ({
  text,
  to,
  style,
  colorful = false,
  className,
}) => {
  return to ? (
    <LinkText
      to={to}
      textContent={
        <span
          className={clsx(
            colorful && styles.colorful,
            styles.headerDescription,
            className,
          )}
          style={style}
        >
          {text}
        </span>
      }
    />
  ) : (
    <span
      className={clsx(
        colorful && styles.colorful,
        styles.headerDescription,
        className,
      )}
      style={style}
    >
      {text}
    </span>
  );
};

export const Description = ({
  text,
  to,
  style,
  colorful = false,
  className,
}) => {
  return to ? (
    <LinkText
      to={to}
      textContent={
        <span
          className={clsx(
            colorful && styles.colorful,
            styles.description,
            className,
          )}
          style={style}
        >
          {text}
        </span>
      }
    />
  ) : (
    <span
      className={clsx(
        colorful && styles.colorful,
        styles.description,
        className,
      )}
      style={style}
    >
      {text}
    </span>
  );
};

export const SubDescription = ({
  text,
  to,
  style,
  colorful = false,
  className,
}) => {
  return to ? (
    <LinkText
      to={to}
      textContent={
        <span
          className={clsx(
            colorful && styles.colorful,
            styles.subDescription,
            className,
          )}
          style={style}
        >
          {text}
        </span>
      }
    />
  ) : (
    <span
      className={clsx(
        colorful && styles.colorful,
        styles.subDescription,
        className,
      )}
      style={style}
    >
      {text}
    </span>
  );
};

export const HighlightHeader = ({
  style,
  colorful = false,
  className,
  text,
  to,
  centered = false,
}) => {
  return to ? (
    <LinkText
      to={to}
      textContent={
        <div
          style={style}
          className={clsx(
            colorful && styles.colorful,
            styles.highlightContainer,
            className,
          )}
        >
          <h1 className={styles.highlightText}>{text}</h1>
          <div
            className={
              centered ? styles.underlineCentered : styles.underlineLeft
            }
          />
        </div>
      }
    />
  ) : (
    <div
      style={style}
      className={clsx(
        colorful && styles.colorful,
        styles.highlightContainer,
        className,
      )}
    >
      <h1 className={styles.highlightText}>{text}</h1>
      <div
        className={centered ? styles.underlineCentered : styles.underlineLeft}
      />
    </div>
  );
};
