import React from "react";
import Fade from "react-reveal/Fade";
import "./Styles.css";

const ReactRevel = () => {
  return (
    <div className="body">
      <Fade top delay={500} duration={3000}>
        <h1>DOGS</h1>
      </Fade>
      <div className="dogybody">
        <div>
          <Fade left delay={1000} duration={3000}>
            <img
              src="./Photos/dogieimg1.jpg"
              alt="dogy1"
              className="doggiiee dogy1"
            />
          </Fade>
        </div>
        <div>
          <Fade bottom delay={2000} duration={3000}>
            <img
              src="./Photos/dogieimg2.jfif"
              alt="dogy2"
              className="doggiiee dogy2"
            />
          </Fade>
        </div>
        <div>
          <Fade right delay={3000} duration={3000}>
            <img
              src="./Photos/dogieimg3.crdownload"
              alt="dogy3"
              className="doggiiee dogy3"
            />
          </Fade>
        </div>
      </div>
      <div className="dodywritingbody">
        <div>
          <Fade left delay={4000} duration={3000}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              blandit faucibus mollis. Praesent ultrices vehicula hendrerit.
              Maecenas ut ante ut magna viverra consequat. Sed pretium viverra
              quam non blandit. Nullam bibendum odio non posuere venenatis.
              Aliquam a quam non velit pharetra convallis. Duis lorem libero,
              vehicula fermentum elementum vel, finibus at purus. Curabitur
              feugiat felis a dolor ultricies interdum. Pellentesque habitant
              morbi tristique senectus et netus et malesuada fames ac turpis
              egestas. Cras sit amet sem interdum, lacinia nulla ac, tincidunt
              odio.
            </p>
          </Fade>
        </div>
        <div>
          <Fade left delay={5000} duration={3000}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              blandit faucibus mollis. Praesent ultrices vehicula hendrerit.
              Maecenas ut ante ut magna viverra consequat. Sed pretium viverra
              quam non blandit. Nullam bibendum odio non posuere venenatis.
              Aliquam a quam non velit pharetra convallis. Duis lorem libero,
              vehicula fermentum elementum vel, finibus at purus. Curabitur
              feugiat felis a dolor ultricies interdum. Pellentesque habitant
              morbi tristique senectus et netus et malesuada fames ac turpis
              egestas. Cras sit amet sem interdum, lacinia nulla ac, tincidunt
              odio.
            </p>
          </Fade>
        </div>
        <div>
          <Fade left delay={6000} duration={3000}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              blandit faucibus mollis. Praesent ultrices vehicula hendrerit.
              Maecenas ut ante ut magna viverra consequat. Sed pretium viverra
              quam non blandit. Nullam bibendum odio non posuere venenatis.
              Aliquam a quam non velit pharetra convallis. Duis lorem libero,
              vehicula fermentum elementum vel, finibus at purus. Curabitur
              feugiat felis a dolor ultricies interdum. Pellentesque habitant
              morbi tristique senectus et netus et malesuada fames ac turpis
              egestas. Cras sit amet sem interdum, lacinia nulla ac, tincidunt
              odio.
            </p>
          </Fade>
        </div>
      </div>
    </div>
  );
};
export default ReactRevel;
