const getBeforeDays = (date: string): number => {
  const diff = (new Date().getTime() - new Date(date).getTime()) / 1000;
  return Math.floor(diff / (60 * 60 * 24));
};

export { getBeforeDays };
