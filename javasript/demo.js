const print = (data) => {
  console.log(data);
};

const testError = (a) => {
  try {
    return a * tryme(-4);
  } catch (err) {
    print(err.name);
  } finally {
    print("program done");
  }
};

const tryme = (x) => {
  if (x > 0) {
    return 5;
  } else {
    throw { message: "value should not be less than 0", name: "custom error" };
  }
};

print(testError(5));

print("here");
