

// 9th dec
let ram = {
  name: "ram",
  age: 22,
  address: {
    city: "hyderabad",
    rd: 21,
    pg: {
      name: "abc",
    },
    phone: [1234343, 56789],
  },
  addressname: function () {
    return this.name + "-" + this.address.city;
  },
};

let vamsi = {
  name: "vamsi",
  age: 27,
  address: {
    city: "hyderabad",
    rd: 21,
    pg: {
      name: "abc",
    },
    phone: [1234343, 56789],
  },
};

function getData(data, key) {
  return data[key];
}

console.log(getData(ram, "age"));
console.log(vamsi.age);

console.log(ram.addressname());

// strings
let text = "    ram kumar ch       ";
let myname = text.trim();
console.log(myname.length);

const firstName = myname.slice(0, 3);
console.log(firstName);

const lastName = myname.substr(4, 5);
console.log(lastName);

const replacedText = myname.replace("kumar", "kalyan");
console.log(replacedText);

const upperCase = myname.toLocaleUpperCase();
console.log(upperCase);

const lowerCase = myname.toLowerCase();
console.log(lowerCase);

const addition = myname.concat(" hyd");
console.log(addition);

console.log(myname.charAt(0));
console.log(myname.charCodeAt(0));

const data = "vamsi 22 hyd madhapur";
const words = data.split(" ");
console.log(words);

console.log("original string:", myname);

// arrays

const a = ["ram", "vamsi", "raju", "ravi"];
const b = ["ajay", "srinu"];
const c = [...a];
const points = [40, 100, 1, 5, 25, 10];

print(a[2]);
a[2] = "mohan";
print(a[2]);
print(a.length);
print(a[a.length - 1]);
print(Array.isArray(a));
print(a.toString());

print(a.push("krishna"));
print(a.pop());

print(a.unshift("krishna"));
print(a.shift());

// print(a.splice(1, 2));
print(a.slice(1, 3));

print(c.sort());
print(c.reverse());
print(points.sort((a, b) => a - b));
// const c = a.concat(b);

print(a);
// print(c);

// array iterations 
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
