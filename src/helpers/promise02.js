export const promise01 = new Promise((resolve, reject) => {
  const isOk = false;

  setTimeout(() => {
    if (isOk) {
      const response = { nikName: "Kian", id: 40 };
      resolve(response);
    } else {
      const error = "404 example!";
      reject(error);
    }
  }, 3000);
});
