interface ProductCardProps{
    title: string;
    imageUrl: string;
    price: number;
}

const ProductCard = ({title, imageUrl, price} : ProductCardProps) => {
    return(
        <div className="productCard">
          <img src={imageUrl} alt={title} />
          <p>{title}</p>
          <p>{price}</p>
        </div>
    )
}

export default ProductCard;