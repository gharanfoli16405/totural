export const getData = (query, callback) => {
  setTimeout(() => {
    const res = { namee: "hassan", id: query };
    callback(res);
  }, 2000);
};

export const printData = (res) => {
  console.log("res is 36", res);
};

export const getUser = (firstName, callback) => {
  setTimeout(() => {
    const res = { firstName, id: 23 };
    callback(res);
  }, 4000);
};

export const getPost = (res, callback) => {
  
};

export const getComments = () => {
  console.log("comments");
};
