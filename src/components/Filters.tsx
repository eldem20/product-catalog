import { Filters } from '../types/products'

import { useState } from 'react'

export interface Props {
    onFiltersChange: (filters: Filters) => void
   
}

export default function FiltersType({ onFiltersChange }: Props) {
    const [search, setSearch] = useState('')
    const [category, setCategory] = useState('')
    const [minPrice, setMinPrice] = useState(0)
    const [maxPrice, setMaxPrice] = useState(10000)

    const handleSearchChange = (newSearch: string) => {
        setSearch(newSearch)
        onFiltersChange({
            search: newSearch,
            category: category,
            minPrice: minPrice,
            maxPrice: maxPrice
        })
    }

    const handleCategoryChange = (newCategory: string) => {
        setCategory(newCategory)
        onFiltersChange({
            search: search,
            category: newCategory,
            minPrice: minPrice,
            maxPrice: maxPrice
        })
    }

    const handleMinPriceChange = (newMinPrice: number) => {
        setMinPrice(newMinPrice)
        onFiltersChange({
            search: search,
            category: category,
            minPrice: newMinPrice,
            maxPrice: maxPrice
        })
    }

    const handleMaxPriceChange = (newMaxPrice: number) => {
        setMaxPrice(newMaxPrice)
        onFiltersChange({
            search: search,
            category: category,
            minPrice: minPrice,
            maxPrice: newMaxPrice
        })
    }

    const handleReset = () => {
        setSearch('')
        setCategory('')
        setMinPrice(0)
        setMaxPrice(10000)
        onFiltersChange({
            search: '',
            category: '',
            minPrice: 0,
            maxPrice: 10000
        })
    }

    return (
        <div>
            <input type="text" placeholder='поиск' onChange={(e) => handleSearchChange(e.target.value)} value={search} className='input'/>
            {/* <select name="" id="" onChange={(e) => handleCategoryChange(e.target.value)} value={category}></select> */}
            {/* <input type="range" placeholder='цены' onChange={(e) => handleMinPriceChange(Number(e.target.value))} value={minPrice} /> */}
            <button onClick={handleReset} className='reset'>Сброс</button>
        </div>
    )
}


