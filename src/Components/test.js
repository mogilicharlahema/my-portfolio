import React, { useEffect, useState } from "react";

const TestData = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.in/api/products")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched data:", data);
        setProducts(data.products); // Correct property
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Product List</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {products.map((product) => (
          <div key={product.id} style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "10px",
            width: "200px",
            textAlign: "center"
          }}>
            <img
              src={product.image}
              alt={product.title}
              style={{ width: "100px", height: "100px", objectFit: "contain" }}
            />
            <h4 style={{ fontSize: "14px" }}>{product.title}</h4>
            <p style={{ color: "green", fontWeight: "bold" }}>₹{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestData;
