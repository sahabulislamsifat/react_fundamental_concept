import ChildProduct from "./product/ChildProduct";

const Product = ({ info }) => {
  // console.log(info);

  return (
    <div>
      <h3 className="text-blue-800">This is form Product Component.</h3>
      <ChildProduct info={info}></ChildProduct>
    </div>
  );
};

export default Product;
