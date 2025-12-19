import { useState } from "react";

function Product({ name, price }) {
    // State for counter
    const [count, setCount] = useState(0);

    return (
        <div style={{ border: "1px solid #ccc", padding: "20px", margin: "20px" }}>
            {/* Props */}
            <h2>{name}</h2>
            <p>Price: ₹{price}</p>

            {/* State */}
            <h3>Quantity: {count}</h3>

            {/* Buttons */}
            <button onClick={() => setCount(count + 1)}>+</button>
            <button
                onClick={() => setCount(count - 1)}
                disabled={count === 0}
            >
                -
            </button>
        </div>
    );
}

export default Product;
