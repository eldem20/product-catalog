export interface Product {
  id: number
  title: string
  price: number
  description: string
  category: {    
    id: number
    name: string
    image: string
  }
  images: string[]  
 
}


export interface Filters {
  search: string;
  category: string; 
  minPrice: number;
  maxPrice: number;
}

export interface CartItem {
  product: Product
  quantity: number
}