// import ChildProduct from "./product/ChildProduct";

// const Product = ({ info }) => {
//   // console.log(info);

//   return (
//     <div>
//       <h3 className="text-blue-800">This is form Product Component.</h3>
//       <ChildProduct info={info}></ChildProduct>
//     </div>
//   );
// };

// export default Product;
import ChildProduct from "./product/ChildProduct";

const Product = ({ transfer }) => {
  // console.log(info);

  // console.log(transfer);

  return (
    <div>
      <h3 className="text-blue-800 text-center">
        This is form Product Component.
      </h3>
      <ChildProduct info={transfer}></ChildProduct>
    </div>
  );
};

export default Product;
