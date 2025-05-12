import { useParams } from "react-router";
import useSingleProduct from "../../hooks/useSingleProduct";
import SkeletonLoader from "../../components/kit/Skeleton";
import useStore from "../../store/store";

export default function SinglePageProduct() {
  const { id } = useParams();
  const { data: singleCart, isLoading } = useSingleProduct(id);
  const { productsCard, inc, dec } = useStore();
  const handleAddToCart = (productId) => {
    inc({ id: productId });
  };

  const cartItem = productsCard.find((item) => item.id === singleCart?.id);
  const quantity = cartItem?.quantity || 0;
  return (
    <div className=" border w-[400px] border-gray-400 rounded-lg flex flex-col justify-center items-center shadow">
      {isLoading ? (
        <SkeletonLoader />
      ) : (
        <>
          <img
            src={singleCart?.image}
            className="w-full object-contain aspect-square"
          />
          <h2>{singleCart?.title}</h2>
          <section>
            <button
              onClick={() => {
                dec({ id: singleCart?.id });
              }}
            >
              -
            </button>
            <span> {quantity} </span>
            <button onClick={() => handleAddToCart(singleCart?.id)}>+</button>
          </section>
        </>
      )}
    </div>
  );
}
