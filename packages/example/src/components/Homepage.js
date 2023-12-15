import React from 'react';
import { HomepageBanner, HomepageCallout } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';
import { calloutLink } from './Homepage.module.scss';

import Carbon from './carbon.jpg';

const FirstLeftText = () => <p></p>;

const FirstRightText = () => (
  <p>
    As the first and largest marketplace for Non-Fungible Tokens and
    Semi-Fungible Tokens, OpenSea provides a first-in-class developer platform
    consisting of an API, SDK, and developer tutorials. Feel free to browse
    around and get acclimated with developing smart contracts and interacting
    with NFT data.
  </p>
);

const SecondLeftText = () => <p>Callout component</p>;

const SecondRightText = () => (
  <p>
    You can also not use these components at all by not providing the callout
    props to the template or writing your own template.
    <a
      className={calloutLink}
      href="https://github.com/carbon-design-system/gatsby-theme-carbon/blob/main/packages/example/src/gatsby-theme-carbon/templates/Homepage.js">
      Homepage source →
    </a>
  </p>
);

const BannerText = () => <h1>NFTx Developer Platform</h1>;

const customProps = {
  Banner: <HomepageBanner renderText={BannerText} image={Carbon} />,
  FirstCallout: (
    <HomepageCallout
      backgroundColor="#030303"
      color="white"
      leftText={FirstLeftText}
      rightText={FirstRightText}
    />
  ),
  SecondCallout: (
    <HomepageCallout
      leftText={SecondLeftText}
      rightText={SecondRightText}
      color="white"
      backgroundColor="#061f80"
    />
  ),
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;
