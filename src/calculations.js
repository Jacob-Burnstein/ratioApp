export const calculateMissingA = (b, c, d) => {
  return (b * (c / d)).toFixed(2);
};

export const calculateMissingB = (a, c, d) => {
  return ((a * d) / c).toFixed(2);
};

export const calculateMissingC = (a, b, d) => {
  return ((a * d) / b).toFixed(2);
};

export const calculateMissingD = (a, b, c) => {
  return ((b * c) / a).toFixed(2);
};
