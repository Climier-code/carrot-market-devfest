export const getTemperatureColor = (temperature?: number) => {
  if (!temperature) return;
  if (temperature < 30) {
    return '#777F87';
  }
  if (temperature < 36.2) {
    return '#4D8FCE';
  }
  if (temperature < 37.5) {
    return '#58B9ED';
  }
  if (temperature < 41.9) {
    return '#66D06B';
  }
  if (temperature >= 42 && temperature < 52) {
    return '#FFB938';
  }
  return '#FF7E36';
};
