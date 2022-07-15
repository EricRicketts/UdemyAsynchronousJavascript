const askJohn = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('Yep, I have one extra pen'), 3000);
  });
}

const askEugene = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error('Sorry man, only got one.')), 5000);
  });
}

const askSusy = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('Sure, I have a pen for you'), 2000);
  });
}

const askFailArmy = () => {
  return Promise.reject(new Error('Sorry, you asked the Fail Army!'));
}

export { askJohn, askSusy, askEugene, askFailArmy };
