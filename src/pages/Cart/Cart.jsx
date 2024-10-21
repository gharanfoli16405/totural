const Cart = () => {
  const firstFuntion = (callbackFunc) => {
    setTimeout(() => {
      console.log("🚀 ~ firstFuntion ");
      console.log("---------------");
      callbackFunc();
    }, 3000);
  };

  const sectondFunction = () => {
    console.log("🚀 ~ sectondFunction ");
  };

  firstFuntion(sectondFunction);

  return <div>iN THE NAME OF GOD</div>;
};

export default Cart;
