import React from "react";
import Rotate from "react-reveal/Rotate";
const Panda = () => {
  return (
    <div className="body3">
      <Rotate top delay={2500} duration={3000}>
        <h1>PANDAS</h1>
      </Rotate>
      <div className="pandabody">
        <div>
          <Rotate left delay={3000} duration={3000}>
            <img src="./Photos/panda1.jfif" alt="abc" className="pandass" />
          </Rotate>
        </div>
        <div>
          <Rotate right delay={4000} duration={3000}>
            <img src="./Photos/panda2.jfif" alt="abc" className="pandass" />
          </Rotate>
        </div>
        <div>
          <Rotate bottom delay={5000} duration={3000}>
            <img src="./Photos/panda3.jfif" alt="abc" className="pandass" />
          </Rotate>
        </div>
      </div>
      <div className="dodywritingbody">
        <div>
          <Rotate left delay={3500} duration={3000}>
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
          </Rotate>
        </div>
        <div>
          <Rotate right delay={4000} duration={3000}>
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
          </Rotate>
        </div>
        <div>
          <Rotate bottom delay={5000} duration={3000}>
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
          </Rotate>
        </div>
      </div>
    </div>
  );
};
export default Panda;
