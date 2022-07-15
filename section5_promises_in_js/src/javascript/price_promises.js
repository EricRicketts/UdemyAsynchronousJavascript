const askFirstDealer = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(8000), 50);
  });
}

const askSecondDealer = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(12000), 100);
  });
}

const askThirdDealer = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(10000), 150);
  });
}

const askFourthDealer = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error('Not a suitable car')), 200);
  });
}

export { askFirstDealer, askSecondDealer, askThirdDealer, askFourthDealer };
