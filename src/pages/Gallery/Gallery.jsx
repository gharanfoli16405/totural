import Box from "components/Box";
import { useState } from "react";

const Gallery = () => {
  const [isShow, setIsShow] = useState(false);
  const test = [1, 2, 3, 4, 5, 6];

  return (
    <>
      <div>Gallary page</div>
      <button onClick={() => setIsShow(!isShow)}>Toggle Btn</button>
      {!isShow && test.map((item) => <Box />)}
    </>
  );
};

export default Gallery;
