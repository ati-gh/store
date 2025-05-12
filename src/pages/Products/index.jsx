import SkeletonLoader from "../../components/kit/Skeleton";
import SingleProduct from "../../components/SingleProduct";
import useProducts from "../../hooks/useProducts";
import useStore from "../../store/store";
import { useCategory } from "../../contexts/CategoryContext";

export default function Products() {
  const { selectedCategory } = useCategory();
  const { data: products, isLoading } = useProducts(selectedCategory);

  const { productsCard, inc } = useStore();

  const handleAddToCart = (e, productId) => {
    e?.stopPropagation();
    inc({ id: productId });
  };

  if (isLoading) {
    return (
      <div className="grid grid-cols-4 gap-8">
        {[...Array(8)].map((_, index) => (
          <SkeletonLoader key={index} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-8">
      {products?.map((product) => {
        const cartItem = productsCard.find((item) => item.id === product?.id);
        const quantity = cartItem?.quantity || 0;

        return (
          <SingleProduct
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.title}
            category={product.category}
            quantity={quantity}
            onAddToCart={(e) => handleAddToCart(e, product?.id)}
          />
        );
      })}
    </div>
  );
}
