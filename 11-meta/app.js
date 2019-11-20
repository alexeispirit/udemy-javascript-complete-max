// Symbols
const uid = Symbol();

const user = {
  // id: 'p1',
  [uid]: "p1",
  name: "Alex",
  age: 30,
  [Symbol.toStringTag]: "User"
};

user[uid] = "p3";

console.log(user[Symbol("uid")]);
console.log(user[uid]);
console.log(user.toString());

// Iterators
const company = {
  curEmployee: 0,
  employees: ["Max", "Manu", "Anna"],
  next() {
    if (this.curEmployee >= this.employees.length) {
      return { value: this.curEmployee, done: true };
    }
    const returnValue = { value: this.employees[0], done: false };
    this.curEmployee++;
    return returnValue;
  },
  [Symbol.iterator]: function* employeeGenerator() {
    // let employee = company.next();

    // while (!employee.done) {
    //   yield employee.value;
    //   employee = company.next();
    // }
    let currentEmployee = 0;
    while (currentEmployee < this.employees.length) {
      yield this.employees[currentEmployee];
      currentEmployee++;
    }
  }
};

for (const employee of company) {
  console.log(employee);
}

console.log([...company]);
// console.log(company.next());
// console.log(company.next());
// console.log(company.next());
// console.log(company.next());

// Reflect API

const course = {
  title: "Javascript - The Complete Guide"
};

Reflect.setPrototypeOf(course, {
  toString() {
    return this.title;
  }
});

Reflect.defineProperty(course, "price", { writable: false });

// Reflect.deleteProperty(course, 'title');

console.log(course.toString());

// Proxy API
const courseHandler = {
  get(obj, propertyName) {
    console.log(propertyName);
    // return `${propertyName}: ${obj[propertyName]}`;
    if (propertyName === "length") {
      return 0;
    }
    return obj[propertyName] || "NOT FOUND";
  },
  set(obj, propertyName, newValue) {
    if (propertyName === "rating") {
      return;
    }
    obj[propertyName] = newValue;
  }
};

const pCourse = new Proxy(course, courseHandler);
pCourse.rating = 5;
console.log(pCourse.title, pCourse.length, pCourse.rating);
