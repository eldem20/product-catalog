import { Filters } from '../types/products'
import { useState } from 'react'

export interface Props {
    onFiltersChange: (filters: Filters) => void
}

export default function FiltersType({ onFiltersChange }: Props) {
    const [search, setSearch] = useState('')
    const [minPrice, setMinPrice] = useState(0)
    const [maxPrice, setMaxPrice] = useState(10000)

    const handleSearchChange = (newSearch: string) => {
        setSearch(newSearch)
        onFiltersChange({
            search: newSearch,
            category: '', 
            minPrice: minPrice,
            maxPrice: maxPrice
        })
    }

    const handleReset = () => {
        setSearch('')
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
            <input 
                type="text" 
                placeholder='поиск' 
                onChange={(e) => handleSearchChange(e.target.value)} 
                value={search} 
                className='input'
            />
            <button onClick={handleReset} className='reset'>Сброс</button>
        </div>
    )
}


