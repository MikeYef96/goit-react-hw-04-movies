import React from 'react';
import Loader from 'react-loader-spinner';
import css from './Spinner.module.css';

const Spinner = () => (
  <Loader
    className={css.Loader}
    type="ThreeDots"
    color="#3f52b5"
    height={150}
    width={150}
    timeout={180000}
  />
);

export default Spinner;
