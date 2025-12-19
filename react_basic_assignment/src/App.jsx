import Product from "./Product";

function App() {
    return (
        <div>
            <h1>Product List</h1>

            {/* Reusable Product Components */}
            <Product name="Laptop" price={50000} />
            <Product name="Mobile Phone" price={20000} />
        </div>
    );
}

export default App;
