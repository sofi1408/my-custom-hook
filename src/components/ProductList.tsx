
import ProductCard from "./ProductCard";
import {useProductList} from '../hooks/useProductList'

const ProductList = () => {

    const {products} = useProductList();

    return(
        <div className="productList">
          {
            products.map(product => <ProductCard key={product.id} title={product.title} imageUrl={product.image} price={product.price} />)
          }
        </div>
    )
}

export default ProductList;