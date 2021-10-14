import React from "react";
import Zoom from "react-reveal/Zoom";
const Lions = () => {
  return (
    <div className="body4">
      <Zoom top delay={1000} duration={3000}>
        <h1>LIONS</h1>
      </Zoom>
      <div className="lionbody">
        <div>
          <Zoom left delay={2000} duration={3000}>
            <img src="./Photos/lion1.jfif" alt="abc" className="lions" />
          </Zoom>
        </div>
        <div>
          <Zoom right delay={3000} duration={3000}>
            <img src="./Photos/lion2.jfif" alt="abc" className="lions" />
          </Zoom>
        </div>
        <div>
          <Zoom bottom delay={4000} duration={3000}>
            <img src="./Photos/lion3.jfif" alt="abc" className="lions" />
          </Zoom>
        </div>
      </div>
      <div className="dodywritingbody">
        <div>
          <Zoom left delay={2000} duration={3000}>
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
          </Zoom>
        </div>
        <div>
          <Zoom right delay={3000} duration={3000}>
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
          </Zoom>
        </div>
        <div>
          <Zoom bottom delay={3500} duration={3000}>
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
          </Zoom>
        </div>
      </div>
    </div>
  );
};
export default Lions;
