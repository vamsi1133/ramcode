const print = (data) => {
  console.log(data);
};

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

// dates
const today = new Date();
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
print(today);
print(today.toString());
print(today.getHours());
print(today.getDate());
print(days[today.getDay()]);
print(today.getMilliseconds());
print(today.getTime());
today.setDate(13);
print(today.getDate());

// math
const x = -6 / 5;
print(x);
print(Math.floor(x));
print(Math.ceil(x));
print(Math.abs(x));

const randomMap = () => {
  let x, y;
  x = Math.ceil(Math.random() * 10);
  y = Math.ceil(Math.random() * 10);
  return [x, y];
};

print(randomMap());

// if else statements

const xc = 7;
const yc = 3;
const randomMap = () => {
  let x, y;
  x = Math.ceil(Math.random() * 10);
  y = Math.ceil(Math.random() * 10);
  if (x >= 7 && y <= 2) {
    x = 6;
    y = 4;
  }

  return [x, y];
};

print(randomMap());

function max(a, b, c) {
  if (a > b) {
    if (a > c) {
      return a;
    } else {
      return c;
    }
  } else {
    if (b > c) {
      return b;
    } else {
      return c;
    }
  }
}
print(max(23, 8, 10));

const powerColor = (val) => {
  if (val === 1) {
    return "red";
  } else if (val === -1) {
    return "green";
  } else {
    return "black";
  }
};

const powerSwitch = (val) => {
  switch (val) {
    case 1:
      return "red";
      break;
    default:
      return "black";
  }
};

print(powerColor(-1));
print(powerSwitch(1));

// loops

for (let i = 0; i < 100; i++) {
  print("vamsi");
}
let i = 0;
while (i < 100) {
  print("vamsi" + i);
  i++;
}

do {
  print(i);
  i++;
} while (i < 0);

let arr = ["volvo", "tata", "suzuki", "maruthi", "kia", "BMW", "Hyundai"];

for (let i = 0; i < arr.length; i++) {
  print(arr[i]);
}

let i = 0;

while (i < arr.length) {
  print(arr[i]);
  i += 2;
}
// iterables sets and maps
let str = "hello world";
let arr = ["volvo", "tata", "suzuki", "maruthi", "kia", "BMW", "Hyundai"];
let address = {
  street: [5, 45, 56],
  name: "xyz",
  flat: 123,
};

delete address.street;
print(address.street);
for (let x in address) {
  print(address[x]);
}

for (let x of arr) {
  print(x);
}

for (let i = 0; i < arr.length; i++) {
  print(arr[i]);
}

let myset = new Set([1, 2, 4, 2, 5, 1, 5]);
myset.add(6);
for (let x of myset.values()) {
  print(x);
}

// error handling
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
