import React from 'react';

import { Contribute, Description, Header } from '../css/components/about';

/*
 * Note: This is kept as a container-level component,
 *  i.e. We should keep this as the container that does the data-fetching
 *  and dispatching of actions if you decide to have any sub-components.
 */
const About = () => {
  return (
    <div>
      <Header>About Ninja Ocean</Header>
      <Description>
        <p>
          Imagine an ocean of ninjas. Now think of it as a metaphor.
          <br />
          Seriously, we love good tech. React, redux, scala, Haskell, machine learning, you name it!
        </p>
      </Description>
      <Contribute>
        <p>
          Want to contribute? Help us out!
          If you think the code on &nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/choonkending/react-webpack-node">this repo</a>
          &nbsp;could be improved, please create an issue&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/choonkending/react-webpack-node/issues">here</a>
          !
        </p>
      </Contribute>
    </div>
  );
};

export default About;
