const ChildProduct = ({ info }) => {
  //   console.log(info);
  //   {
  //     name, version;
  //   }
  //   info;

  return (
    <div>
      <h1>THis is Child Product.</h1>
      {/* <p>{info.name}</p> */}
      <p>{info.name}</p>
      <p>{info.version}</p>
    </div>
  );
};

export default ChildProduct;
