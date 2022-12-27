const my = () => {
  console.log("should be 2");
};

async function he() {
  await console.log("should be no1");
  await my();
}

he();
console.log("no3");
