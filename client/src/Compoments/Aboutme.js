import React, { Fragment } from "react";
import PropTypes from "prop-types";

const Aboutme = props => {
  return (
    <Fragment>
      <div className="basicinfo">
        <div className="profilepic"></div>
        <div className="picturetext">
          <p>Milan Chalishajarwala</p>
        </div>
      </div>
    </Fragment>
  );
};

Aboutme.propTypes = {};

export default Aboutme;
