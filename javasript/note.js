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
