import { useProducts } from "../hooks/useProducts";

import { ProductCard } from "./ProductCard";

import { Filters } from '../types/products'

import { useState } from "react";

import FiltersType from "./Filters";

import { Product } from '../types/products';

interface Props {
    onAddToCart: (product: Product) => void;
}

export default function ProductList({ onAddToCart }: Props) {



    const { products, loading, error } = useProducts()

    const [currentFilters, setCurrentFilters] = useState<Filters>({
        search: '',
        category: '',
        minPrice: 0,
        maxPrice: 10000
    })

    if (loading) return (
        <div>
            Загрузка...
        </div>
    )
    if (error !== '') return (
        <div>
            {error}
        </div>
    )
    if (products.length === 0) return <div>Товаров нет!</div>

    const handleFiltersChange = (filters: Filters) => {

        console.log('Фильтры изменились:', filters)
        setCurrentFilters(filters)
    }

    const filteredProducts = products.filter(product => {
        const matchesSearch = product.title.toLowerCase().includes(currentFilters.search.toLowerCase())

        const matchesPrice = product.price >= currentFilters.minPrice && product.price <= currentFilters.maxPrice

        return matchesSearch && matchesPrice
    })


    return (
        <div className="product-list">
            <FiltersType onFiltersChange={handleFiltersChange}/>
            <ul>
                {filteredProducts.map((product) => (
                    <li key={product.id}>
                        <ProductCard product={product} onAddToCart={onAddToCart}></ProductCard>
                    </li>
                ))}
            </ul>

        </div>
    )
}

