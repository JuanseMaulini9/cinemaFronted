const useWeek = () => {
  const days = [];
  const today = new Date();

  for (let i = 0; i < 7; i++) {
    const day = new Date(today);
    day.setDate(today.getDate() + i);
    days.push(day);
  }

  return { days };
};

export default useWeek;
