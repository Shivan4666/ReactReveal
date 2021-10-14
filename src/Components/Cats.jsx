import React from "react";
import Flip from "react-reveal/Flip";
const Cats = () => {
  return (
    <div className="body2">
      <Flip top delay={500} duration={3000}>
        <h1>CATS</h1>
      </Flip>
      <div className="catbody">
        <div>
          <Flip left delay={2000} duration={3000}>
            <img src="./Photos/cat1.jpg" alt="abc" className="catss" />
          </Flip>
        </div>
        <div>
          <Flip right delay={3000} duration={3000}>
            <img src="./Photos/cat2.jpg" alt="abc" className="catss" />
          </Flip>
        </div>
        <div>
          <Flip bottom delay={4000} duration={3000}>
            <img src="./Photos/cat3.jpg" alt="abc" className="catss cat3" />
          </Flip>
        </div>
      </div>
      <div className="dodywritingbody">
        <div>
          <Flip left delay={3000} duration={3000}>
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
          </Flip>
        </div>
        <div>
          <Flip right delay={3500} duration={3000}>
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
          </Flip>
        </div>
        <div>
          <Flip bottom delay={4000} duration={3000}>
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
          </Flip>
        </div>
      </div>
    </div>
  );
};
export default Cats;
