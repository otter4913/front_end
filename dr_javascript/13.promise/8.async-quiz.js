function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => 🥚`);
}

function fryEgg(egg) {
  return Promise.resolve(`${egg} => 🍳`);
}

function getChicken() {
  return Promise.reject(new Error('치킨을 가지고 올수 없음!'));
  // return Promise.resolve(`🌱 => 🐔`);
}

// quiz
async function fetchFriedEgg() {
  let result = await getChicken().catch(() => '🐔');
  result = await fetchEgg(result);
  result = await fryEgg(result);
  return result;
}
fetchFriedEgg().then((result) => console.log('Q = ', result));

//ellie
async function makeFriedEgg() {
  let chicken;
  try {
    chicken = await getChicken();
  } catch {
    chicken = '🐔';
  }
  const egg = await fetchEgg(chicken);
  return fryEgg(egg);
  // 로그남기고 넘기기위해서
  // .then((result) => {
  //   console.log(result);
  //   return result;
  // });
}
makeFriedEgg().then(console.log);
