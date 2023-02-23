function runInDelay(seconds) {
  return new Promise((resolve, reject) => {
    if (!seconds || seconds < 0) {
      reject(new Error('seconds가 0 보다 작음'));
    }
    // setTimeout(() => {
    //   resolve();
    // }, seconds * 10000);
    setTimeout(resolve, seconds * 10000); // 축약
  });
}

runInDelay(2)
  .then(() => console.log('타이머 완료!'))
  .catch(console.error) // error => console.error(error) 인자가 동일하니 생략
  .finally(() => console.log('끝났다!!'));
