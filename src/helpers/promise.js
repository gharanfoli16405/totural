// export const getUser = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // Resolve
//     // const response = { firstName: "Mohsen", id: 25 };
//     // resolve(response);
//     reject(404);
//   }, 2000);
// });

// const info = new Promise();

// export const promise01 = new Promise((resolve, reject) => {
//   resolve(1);
// });

// // new Promise((res, rej) => {
// //   setTimeout(() => {
// //     console.log("fist step");
// //     res(1);
// //   }, 3000);
// // })
// //   .then((res) => {
// //     console.log("second step");
// //     return res + 1;
// //   })
// //   .then((res) => {
// //     console.log(" final step");
// //     console.log("----------------");
// //     console.log("response is : ", res);
// //   });

export default {
  get: "get",
  post: "post",
  put: "put",
  delete: "delete",
};

// get: axios.get,
// post: axios.post,
// put: axios.put,
// delete: axios.delete
