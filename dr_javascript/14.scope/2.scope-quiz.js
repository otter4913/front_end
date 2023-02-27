{
  const x = 1;
  {
    const y = 2;
    console.log(x);
  }

  console.log(x);
  //console.log(y); // 오류
}

const text = 'global';
{
  const text = 'inside block1';
  {
    console.log(text);
  }
}
