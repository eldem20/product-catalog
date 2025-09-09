
import { Product } from "../types/products";

import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

interface Props {
  product: Product;
  onAddToCart: (product: Product) => void
}

export function ProductCard({ product, onAddToCart }: Props) {

  const handleAddToCart = () => {
    onAddToCart(product);
    toast.success(`"${product.title}" добавлен в корзину! 🛒`);
  }
  return (
    <div className="product-card">
      <img src={product.images[0]} alt={product.title} />
      <h1>{product.title}</h1>
      <div className="price">
        <p>Цена: {product.price}</p>
        <p>Категория: {product.category.name}</p>
      </div>

      <button onClick={handleAddToCart}>Добавить</button>
    </div>
  )
}