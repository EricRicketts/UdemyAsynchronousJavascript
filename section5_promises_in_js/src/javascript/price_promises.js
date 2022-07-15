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

export { askFirstDealer, askSecondDealer, askThirdDealer };
