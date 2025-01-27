export default function ProductCard({product, setCartCount }) {
    const handleClick = () => {
        setCartCount(10);

    }
    return(
        <article className='product-crad'>
        <image src= {`website_images/P7ROD_${ product.imagefile}`}
          alt={product.title}>   </image>
         <a href="#KATEGORISIDE">{product.category}</a>
                <h3>{product.title}</h3>
                <p>KR. {product.price}</p>
                <button onClick={handleClick}>Legg i handlekurv</button>
        </article>
    )

}