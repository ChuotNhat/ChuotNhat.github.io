/* eslint max-len: ["error", { "ignoreStrings": true }] */
import assets from 'config/assets';

export default {
  title: 'The fruit juice',
  list: [
    {
      id: 'pineapplejuice',
      title: 'Pineapple juice',
      img: assets.pineapplejuice,
      price: '20.20',
      description: 'The demo food app',
      detail: 'I took to GitHub to do some digging on using nth-child in React Native because surely I’m not the first developer to have stumbled across this requirement. Luck has it, I’m not and many developers were utilising React Native Extended Stylesheet for their nth-child needs. However, this just didn’t sit well with me. I felt really uncomfortable with bundling another npm module with potentially tonnes of bloat into the application just to achieve nth-child. “This seems overkill?” I thought.',
    },
    {
      id: 'strawberry',
      title: 'Strawberry smoothie',
      img: assets.strawberry,
      price: '36.40',
      description: 'The demo food app',
      detail: 'I took to GitHub to do some digging on using nth-child in React Native because surely I’m not the first developer to have stumbled across this requirement. Luck has it, I’m not and many developers were utilising React Native Extended Stylesheet for their nth-child needs. However, this just didn’t sit well with me. I felt really uncomfortable with bundling another npm module with potentially tonnes of bloat into the application just to achieve nth-child. “This seems overkill?” I thought.',
    },
  ],
};
