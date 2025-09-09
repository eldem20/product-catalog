import { CartItem } from '../types/products'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Props {
    cartItems: CartItem[],
    onUpdateQuantity: (productId: number, newQuantity: number) => void
    onRemoveFromCart: (productId: number) => void
    getTotal: () => number
}

export default function Cart({ cartItems, onUpdateQuantity, onRemoveFromCart, getTotal }: Props) {

    const butt = () => {
        toast.warning(`ВАШ ЗАКАЗ ОФОРМЛЕН`)
    }
    return (
        <div className='cart'>

            <h2>Корзина</h2>
            {cartItems.length === 0 ? (
                <p>Корзина пуста</p>
            ) : (
                <>
                    {cartItems.map(item => (
                        <div key={item.product.id} className='cardItem'>
                            <img src={item.product.images[0]} alt={item.product.title} />
                            <h3>{item.product.title}</h3>
                            <p>Цена: {item.product.price} руб.</p>
                            <span>{item.quantity} шт.</span>
                            <p>Сумма: {item.product.price * item.quantity} руб.</p>
                            <div className='buttons'>
                                <button
                                    onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                                    aria-label="Увеличить количество"
                                >
                                    +
                                </button>

                                <span className="quantity-display">{item.quantity} шт.</span>

                                <button
                                    onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                                    aria-label="Уменьшить количество"
                                    disabled={item.quantity <= 1}
                                >
                                    -
                                </button>

                                <button
                                    onClick={() => onRemoveFromCart(item.product.id)}
                                    aria-label="Удалить товар"
                                    className="delete-btn"
                                >
                                    🗑️
                                </button>
                            </div>

                        </div>
                    ))}
                    <div className='final'>
                        <h3>Итого: {getTotal()} руб.</h3>
                        <button onClick={butt}>Оформить заказ</button>
                    </div>

                </>
            )}
        </div>
    )
}