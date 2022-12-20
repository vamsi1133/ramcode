const print = (data) => {
  console.log(data);
};

const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function (age) {
    return this.firstName + " " + this.lastName + " " + age;
  },
};
const person2 = {
  firstName: "vamsi",
  lastName: "varma",
};
// This will invoke method directly
print(person.fullName.call(person2, 25));
print(person.fullName.apply(person2, [26]));
// this will bind method to p2
const p2 = person.fullName.bind(person2);
print(p2(27));
print(p2(28));
