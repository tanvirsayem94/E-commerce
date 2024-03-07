import Image from "next/image";
import Link from "next/link";

const AllProduct = ({product}) => {
  return (
    <div className="card card-compact w-72 bg-base-100 shadow-xl">
      <figure>
        <Image
         width={50} height={50}
          src={product.producImg[0]}
          alt="Shoes"
          className="w-72 h-44"
          placeholder="blur"
          blurDataURL={`blur:${product.producImg[0]}`}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.productName}</h2>
        <p className="text-red-400">${product.productPrice}</p>
        <div className="card-actions justify-end">
          <Link href={`/details/${product._id}`} className="btn btn-primary">Buy Now</Link>
        </div>
      </div>
    </div>
  );
};

export default AllProduct;
