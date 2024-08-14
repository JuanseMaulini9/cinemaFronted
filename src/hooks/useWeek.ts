const useWeek = () => {
  const days = [];
  const today = new Date();

  for (let i = 0; i < 7; i++) {
    const day = new Date(today);
    day.setDate(today.getDate() + i);
    const formatDay = `${day.getDate()}/${day.getMonth() + 1}`;
    days.push(formatDay);
  }

  return { days };
};

export default useWeek;
