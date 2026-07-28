import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";

function Products() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async () => {
        const data = await getProducts();
        setProducts(data);
    };

    return (
        <div style={{ padding: 30 }}>
            <h1>Products</h1>

            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Stock</th>
                    </tr>
                </thead>

                <tbody>
                    {products.map(product => (
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>{product.category}</td>
                            <td>₹{product.selling_price}</td>
                            <td>{product.stock}</td>
                        </tr>
                    ))}
                </tbody>

            </table>

        </div>
    );
}

export default Products;