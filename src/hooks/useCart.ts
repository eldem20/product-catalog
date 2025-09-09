import { useState, useEffect } from "react";

import { CartItem } from "../types/products";

import { Product } from "../types/products";

export default function useCart() {
    const [cartItems, setCartItems] = useState<CartItem[]>(() => {
        const saved = localStorage.getItem('cart')
        return saved ? JSON.parse(saved) : []
    })

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product: Product) => {
        console.log('Добавляем товар:', product.title);
        setCartItems(prev => {
            const existingItem = prev.find(item => item.product.id === product.id)

            if (existingItem !== undefined) {
                return prev.map(item =>
                    item.product.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            }
            return [...prev, { product, quantity: 1 }]
        })
    }
    const removeFromCart = (productId: number) => {
        setCartItems(prev => {
            return prev.filter(item => item.product.id !== productId)
        })

    }

    const updateQuantity = (productId: number, newQuantity: number) => {
        if (newQuantity <= 0) {
            removeFromCart(productId)
            return
        }
        setCartItems(prev => {
            return prev.map(item =>
                item.product.id === productId
                    ? { ...item, quantity: newQuantity }
                    : item

            )
        }

        )

    }

    const clearCart = () => {
        setCartItems([])
    }

    const getTotal = () => {
        return cartItems.reduce((total, item) => {
            return total + (item.product.price * item.quantity)
        }, 0)
    }

    const getTotalItems = () => {
        return cartItems.reduce((total, item) => {
            return total + item.quantity
        }, 0)
    }

    return {
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotal,
        getTotalItems
    }
}
