import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";

function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async () => {
        try {
            const data = await getProducts();
            console.log("API Response:", data);
            setProducts(data);
        } catch (error) {
            console.error("API Error:", error);
        }
    };

    return (
        <div style={{ padding: "30px" }}>
            <h1>Products Page</h1>

            <h2>Total Products: {products.length}</h2>

            <pre>{JSON.stringify(products, null, 2)}</pre>
        </div>
    );
}

export default Products;