/* eslint max-len: ["error", { "ignoreStrings": true }] */
import assets from 'config/assets';

export default {
  title: 'The delicious food',
  list: [
    {
      id: 'hotdog',
      title: 'Hotdog',
      img: assets.hotdog,
      price: '10.05',
      description: 'The demo food app',
      detail: 'I took to GitHub to do some digging on using nth-child in React Native because surely I’m not the first developer to have stumbled across this requirement. Luck has it, I’m not and many developers were utilising React Native Extended Stylesheet for their nth-child needs. However, this just didn’t sit well with me. I felt really uncomfortable with bundling another npm module with potentially tonnes of bloat into the application just to achieve nth-child. “This seems overkill?” I thought.',
    },
    {
      id: 'sweetcake',
      title: 'Sweet cupcake',
      img: assets.cupcake,
      price: '34.89',
      description: 'The demo food app',
      detail: 'I took to GitHub to do some digging on using nth-child in React Native because surely I’m not the first developer to have stumbled across this requirement. Luck has it, I’m not and many developers were utilising React Native Extended Stylesheet for their nth-child needs. However, this just didn’t sit well with me. I felt really uncomfortable with bundling another npm module with potentially tonnes of bloat into the application just to achieve nth-child. “This seems overkill?” I thought.',
    },
  ],
};
