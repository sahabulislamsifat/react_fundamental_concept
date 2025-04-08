// import Product from "./components/products/product";

// import { useEffect, useState } from "react";
import Product from "./components/products/product";

const App = () => {
  // *** Props are arguments passed into React components.
  // const reactInfo = {
  //   name: "React App",
  //   version: "1.0.0",
  // };

  // const handleShowMessage = (message) => {
  //   console.log(message);
  // };

  // *** useState is a Hook that lets you add React state to function components.
  // const [state, setState] = useState(0);
  // let storeVariable = 0;

  // const handleChangeVariableCount = () => {
  //   // storeVariable += 1;
  //   storeVariable = storeVariable + 1;
  //   console.log(storeVariable);
  // };

  // const handleChangeStateCount = () => {
  //   setState(state + 1);
  //   console.log(state);
  //   // console.log("State Count", state);
  // };

  // console.log("Outside Global Console State Count", state);

  // *** useEffect is a Hook that lets you perform side effects in function components.
  // const [state, setState] = useState(0);

  // const handleChangeStateCount = () => {
  //   setState(state + 1);
  //   console.log(state);
  // };

  // useEffect(() => {
  //   console.log("Inside useEffect", state);
  // });
  // useEffect(() => {
  //   console.log("Inside useEffect", state);
  // }, []);
  // useEffect(() => {
  //   console.log("Inside useEffect", state);
  // }, [state]);

  // *** conditional rendering
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const handleLogin = () => {
  //   setIsLoggedIn(!isLoggedIn);
  // };
  // console.log(isLoggedIn);

  // *** Props Lifting

  const propsLifting = (data) => {
    console.log(data);
  };

  return (
    <>
      {/* <h1 className="text-2xl text-center my-5">Hello React App</h1>
      <div className="text-center"> */}
      {/* <h1>This is Variable Count {storeVariable}</h1> */}
      {/* <h1>This is State Count {state}</h1>
      </div>
      <div className="text-center gap-5 flex justify-center my-5"> */}
      {/* <button
          onClick={handleChangeVariableCount}
          className="bg-green-500 px-2 text-white py-1 cursor-pointer"
        >
          Change Variable Count
        </button> */}
      {/* <button
          onClick={handleChangeStateCount}
          className="bg-red-500 px-2 text-white py-1 cursor-pointer"
        >
          Change State Count
        </button>
      </div> */}
      {/* <button
        onClick={() => handleShowMessage("Print This Message.")}
        className="bg-sky-500 px-2 text-white py-1 flex  mx-auto cursor-pointer"
      >
        Click Here
      </button> */}
      {/* <Product info={reactInfo}></Product> */}
      {/* <Product></Product> */}

      {/* Conditional Rendering */}
      {/* <div className="text-center my-10">
        <h1 className="text-2xl font-semibold mb-5">
          Conditional Rendering.....
        </h1>
        <button
          onClick={handleLogin}
          className="px-2 py-1 text-white bg-blue-300 cursor-pointer"
        >
          Show Status
        </button>
        {isLoggedIn ? (
          <h1 className="text-2xl font-semibold mt-5">Welcome User</h1>
        ) : (
          <h1 className="text-2xl font-semibold mt-5">Please Login</h1>
        )}
      </div> */}

      <div>
        <h1 className="text-center text-2xl font-semibold my-10">
          Props Lifting..
        </h1>
      </div>
      <Product transfer={propsLifting}></Product>
    </>
  );
};

export default App;
