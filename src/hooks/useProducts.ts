
import { useState, useEffect } from 'react'
import { Product } from '../types/products'

export function useProducts() {
    const [products, setProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        const mockProducts: Product[] = [
            {
                id: 1,
                title: "Asics",
                price: 6500,
                description: "кроссовки",
                category: { id: 1, name: "shoes", image: "" },
                images: ["https://www.traektoria.ru/upload/resized/2/11489939/11489939-1500x1500.jpg"]
            },
            {
                id: 2,
                title: "Adidas",
                price: 4900,
                description: "кроссовки",
                category: { id: 2, name: "shoes", image: "" },
                images: ["https://meet-market.ru/_ipx/_/https://cdn.meet-market.ru/s3/products/IE7002/01_IE7002-31790b73-6ea9-4ee7-a42c-dfa07795c459.webp"]
            },
            {
                id: 3,
                title: "Solomon",
                price: 10000,
                description: "кроссовки",
                category: { id: 1, name: "shoes", image: "" },
                images: ["https://sportiq.ru/uploadedFiles/eshopimages/big/sportik_krossovki_salomon_speedcross-6-w.jpg"]
            },
            {
                id: 4,
                title: "Jordan",
                price: 5900,
                description: "кроссовки",
                category: { id: 2, name: "shoes", image: "" },
                images: ["https://image.goat.com/1000/attachments/product_template_pictures/images/078/715/560/original/1042577_00.png.png"]
            },
            {
                id: 5,
                title: "Nike",
                price: 7990,
                description: "кроссовки",
                category: { id: 1, name: "shoes", image: "" },
                images: ["https://img.joomcdn.net/3ca6bee48092facfb7463ef4363c1859f058b3ca_1024_1024.jpeg"]
            },
            {
                id: 6,
                title: " Nike",
                price: 8000,
                description: "Беговые кроссовки",
                category: { id: 3, name: "shoes", image: "" },
                images: ["https://static.insales-cdn.com/images/products/1/6162/875722770/P6000-11.jpg"]
            },
            {
                id: 7,
                title: "Puma",
                price: 2500,
                description: "кроссовки",
                category: { id: 4, name: "shoes", image: "" },
                images: ["https://static.insales-cdn.com/images/products/1/2290/850528498/puma4.jpg"]
            },
            {
                id: 8,
                title: "Галоши",
                price: 9999,
                description: "Галоши ",
                category: { id: 5, name: "shoes", image: "" },
                images: ["https://tzro.ru/wp-content/uploads/2021/06/1-35.jpg"]
            },
            {
                id: 9,
                title: "New",
                price: 8900,
                description: "кроссовки",
                category: { id: 1, name: "shoes", image: "" },
                images: ["https://meet-market.ru/_ipx/_/https://cdn.meet-market.ru/s3/products/M1906RTI/01_M1906RTI-995a07ee-13af-4168-8b96-418064ec311c.webp"]
            },
            {
                id: 10,
                title: "Puma",
                price: 4900,
                description: "кроссовки",
                category: { id: 1, name: "shoes", image: "" },
                images: ["https://www.traektoria.ru/upload/resized/2/11568577/11568577-387x387.jpg"]
            }
        ]

        setProducts(mockProducts)
        setLoading(false)
    }, [])

    return { products, loading, error }
}
