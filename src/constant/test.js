const firstName = "Reza";

const person = {
  firstName: "Reza",
  lastName: "Babaei",
  age: 27,
};

const info = [
  ["firstName", "Hassan"],
  ["lastName", "Bagheri"],
  ["age", 30],
];

const car01 = { brand: "peugoet", model: "206" };

const names = ["Ali", "Hasaan", "Gholi", "Mamad"];

const numbers = [32, 21, 22];

const brands = ["McLaren", "Renault", "Ferrari", "Honda"];

const job = {
  position: "cashier",
  type: "hourly",
  isAvailable: true,
  //   showDetails() {
  //     const accepting = this.isAvailable
  //       ? "is accepting applications"
  //       : "is not currently accepting applications";
  //     console.log(`The ${this.position} position is ${this.type}
  //     and ${accepting}.`);
  //   },
};

const users = [
  {
    id: 1,
    email: "john@mail.com",
    password: "changeme",
    name: "Jhon",
    role: "customer",
    avatar: "https://i.imgur.com/LDOO4Qs.jpg",
    creationAt: "2024-07-20T03:10:57.000Z",
    updatedAt: "2024-07-20T03:10:57.000Z",
  },
  {
    id: 2,
    email: "maria@mail.com",
    password: "12345",
    name: "Maria",
    role: "customer",
    avatar: "https://i.imgur.com/DTfowdu.jpg",
    creationAt: "2024-07-20T03:10:57.000Z",
    updatedAt: "2024-07-20T03:10:57.000Z",
  },
  {
    id: 3,
    email: "admin@mail.com",
    password: "admin123",
    name: "Admin",
    role: "admin",
    avatar: "https://i.imgur.com/yhW6Yw1.jpg",
    creationAt: "2024-07-20T03:10:57.000Z",
    updatedAt: "2024-07-20T03:10:57.000Z",
  },
];

export { person, job, numbers, info, users, brands };
