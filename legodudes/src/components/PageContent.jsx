import CategoryHeading from './components/CategoryHeadin';
import ProductCard from './components/ProductCard';
export default function PagContent({products, setCartCount }) {
    const [title, setTitle] = useState("Ninjago");
    return(
            <main>
            <CategoryHeading title={title}/>
            <div id="productlist"> 
                {products.map((product, index) => (
        <ProductCard product={product} key={`FCT_${index}`} setCartCount={setCartCount}>
            ))} 
            </div>
                   
            </main>
         
    )
}