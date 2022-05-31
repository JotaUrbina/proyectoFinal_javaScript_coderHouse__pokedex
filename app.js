window.onload = () => {
  let begin = POKEDEX.filterByNum(1, 20);
  const start = (begin) => {
    printPkmnList(begin);
  };
  start(begin);
};
