export const rgba = (hex, opacity = 0.5) => {
  const regex = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i;
  const isHexaColor = typeof hex === 'string' && regex.test(hex);

  if (isHexaColor) {
    const hexColor = hex.toLowerCase().replace('#', '');
    const color = hexColor.length === 3 ?
      hexColor.replace(/[0-9a-z]/ig, match => match.repeat(2)) : hexColor;
    const r = parseInt(color.substring(0, 2), 16);
    const g = parseInt(color.substring(2, 4), 16);
    const b = parseInt(color.substring(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  }
  return hex;
};

export default {};
