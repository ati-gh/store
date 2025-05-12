import { useNavigate } from "react-router";

export default function SingleProduct({
  image,
  title,
  id,
  onAddToCart,
  quantity,
  category,
}) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/product/${id}`)}
      className=" border border-gray-400 rounded-lg flex flex-col justify-center items-center shadow"
    >
      <img
        src={image}
        className="w-full object-contain aspect-square"
        alt={title}
      />
      <h2>{title}</h2>
      <span>{category}</span>
      <div className="flex justify-between items-center">
        <span>تعداد: {quantity}</span>
        <button
          onClick={onAddToCart}
          className="bg-blue-500 text-white px-3 py-1 rounded"
        >
          افزودن به سبد
        </button>
      </div>
    </div>
  );
}
