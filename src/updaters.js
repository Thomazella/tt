export const pushHistory = async task => {
  const history = await readHistory();
  history.pushHistory(task);
  // persistState(undefined, `${ttDir}/history.json`, history);
};

export const readHistory = () => {
  // return readState(undefined, `${ttDir}/history.json`);
};

export const printHistory = () => {
  return "I Print the history to cli";
};

export default {
  pushHistory,
  readHistory,
  printHistory
};
