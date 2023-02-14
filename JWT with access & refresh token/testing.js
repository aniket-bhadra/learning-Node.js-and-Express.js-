const getData = () => {
  return new Promise((resolve, reject) => {
    const value = false;
    setTimeout(() => {
      if (value) {
        resolve("yes");
      } else {
        reject("no");
      }
    }, 5000);
  });
};

const checking = async() => {
  try {
    data = await getData();
    return data;
  } catch (error) {
    // console.log(error);
    return error;
  }
};
async function jo() {
  console.log(await checking());
}
console.log("this is outside", checking());
jo();
