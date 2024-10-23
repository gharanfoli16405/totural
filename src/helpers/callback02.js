import { getPost } from "./callback";

export const getRequeset = (callback) => {
  callback();
  console.log("getRequest");
};

// Function Description
// ّFuncaation call === HOF

export const getUser = (query, callback) => {
  setTimeout(() => {
    const response = { nikName: "Vorial", id: query, instageramId: "chert" };
    callback(response);
  }, 3000);
};

export const getPosts = (query, callback) => {
  setTimeout(() => {
    const response = [
      { postTitle: "title01", id: 100 },
      { postTitle: "title02", id: 101 },
      { postTitle: "title03", id: 102 },
    ];
    callback(response[0]);
  }, 2000);
};
export const getComments = (post) => {
  setTimeout(() => {
    const response = [{ comment01: "Alaki`01" }, { comment02: "Alaki02" }];
    console.log(" final response ", response);
  }, 1000);
};

// getUser
// getPost
// getComment

// line01 ==> Hof : getUser  , callback : getPoset
//line02 ==> HOF : getPosts  , callBack : getCommenet
