import React, { useState } from 'react';

function Product() {
  const [productId, setProductId] = useState('');
  const [sellingPrice, setSellingPrice] = useState('');
  const [productName, setProductName] = useState('');
  const [products, setProducts] = useState([]);

  const handleProductIdChange = (e) => {
    setProductId(e.target.value);
  };

  const handleSellingPriceChange = (e) => {
    setSellingPrice(e.target.value);
  };

  const handleProductNameChange = (e) => {
    setProductName(e.target.value);
  };

  const handleAddProduct = () => {
    if (productId && sellingPrice && productName) {
      const newProduct = {
        id: productId,
        price: parseFloat(sellingPrice),
        name: productName,
      };

      setProducts([...products, newProduct]);
      setProductId('');
      setSellingPrice('');
      setProductName('');
    }
  };

  const handleDeleteProduct = (indexToDelete) => {
    const updatedProducts = products.filter((product, index) => index !== indexToDelete);
    setProducts(updatedProducts);
  };

  const calculateTotalValue = () => {
    return products.reduce((total, product) => total + product.price, 0);
  };

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ marginRight: '10px' }}>
          <label>Product ID:</label>
          <input type="number" value={productId} onChange={handleProductIdChange} />
        </div>
        <div style={{ marginRight: '10px' }}>
          <label>Product Name:</label>
          <input type="text" value={productName} onChange={handleProductNameChange} />
        </div>
        <div style={{ marginRight: '10px' }}>
          <label>Selling Price:</label>
          <input type="number" value={sellingPrice} onChange={handleSellingPriceChange} />
        </div>
        <button onClick={handleAddProduct}>Add Product</button>
      </div>

      

      <h2>Products List</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.id}- {product.name} - ${product.price}
            <button onClick={() => handleDeleteProduct(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <h2>Total Value of Products</h2>
      <p>Total: ${calculateTotalValue()}</p>
    </div>
  );
}

export default Product;
