function getFruit(fruitName) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (fruitName === 'watermelon') {
          reject(new Error('Sorry, we\'re out of watermelons'));
        } else {
          resolve(`Here is your ${fruitName}`);
        }
      }, 1000);
    });
  }
  