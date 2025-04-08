// const ChildProduct = ({ info }) => {
const ChildProduct = ({ info }) => {
  //   console.log(info);
  //   {
  //     name, version;
  //   }
  //   info;

  // console.log(info);

  return (
    <div className="text-center my-5">
      <h1>THis is Child Product.</h1>
      {/* <p>{info.name}</p> */}
      {/* <p>{info.name}</p>
      <p>{info.version}</p> */}

      <button
        onClick={() => info("Click From Child Product.")}
        className="bg-sky-500 px-2 text-white py-1 flex  mx-auto cursor-pointer"
      >
        Click Me
      </button>
    </div>
  );
};

export default ChildProduct;
