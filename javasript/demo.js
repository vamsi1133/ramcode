const print = (data) => {
  console.log(data);
};

const cars = [
  { type: "Volvo", year: 2016 },
  { type: "Saab", year: 2001 },
  { type: "BMW", year: 2010 },
];

const nums = [1, 2, 3, 4, 5, 6, 7];

nums.forEach((val, index) => {
  val += 1;
  console.log(val);
});

let arr = nums.map((val) => {
  return val + 2;
});

let fil = nums.filter((val) => {
  return val > 2;
});

let red = nums.reduce((acc, val) => {
  return acc + val;
});

let res = nums
  .map((val) => val * 3)
  .filter((val) => val % 2 !== 0)
  .reduce((acc, val) => acc + val);

print(arr);
print(fil);
print(red);
print(`result ${res}`);
print(nums.includes(5));
print(nums);
