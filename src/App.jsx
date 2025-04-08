import Product from "./components/products/product";

const App = () => {
  const reactInfo = {
    name: "React App",
    version: "1.0.0",
  };

  return (
    <div>
      <h1 className="text-2xl">Hello React App</h1>
      <Product info={reactInfo}></Product>
    </div>
  );
};

export default App;
