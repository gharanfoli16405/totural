// import React, { Component } from "react";

// export default class Home extends Component {
//   render() {
//     // console.log(["hi"]);
//     console.log(this);
//     return <div>Home</div>;
//   }
// }

import React from "react";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    console.log(this);
  }, []);

  return <div>Home</div>;
};

export default Home;
