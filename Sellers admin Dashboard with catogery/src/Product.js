import React, { useState } from 'react';

function Product() {
  const [productId, setProductId] = useState('');
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [category, setCategory] = useState('electronic');
  const [products, setProducts] = useState([]);

  const handleProductIdChange = (e) => {
    setProductId(e.target.value);
  };

  const handleProductNameChange = (e) => {
    setProductName(e.target.value);
  };

  const handleProductPriceChange = (e) => {
    setProductPrice(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleAddProduct = () => {
    if (productId && productName && productPrice) {
      const newProduct = {
        id: productId,
        name: productName,
        price: parseFloat(productPrice),
        category: category,
      };

      setProducts([...products, newProduct]);
      setProductId('');
      setProductName('');
      setProductPrice('');
    }
  };

  const handleDeleteProduct = (productIdToDelete) => {
    const updatedProducts = products.filter((product) => product.id !== productIdToDelete);
    setProducts(updatedProducts);
  };

  const categories = ['electronic', 'food', 'skincare'];

  return (
    <div>
      <div>
        <label>Product ID:</label>
        <input type="text" value={productId} onChange={handleProductIdChange} />
      </div>
      <div>
        <label>Product Name:</label>
        <input type="text" value={productName} onChange={handleProductNameChange} />
      </div>
      <div>
        <label>Product Price:</label>
        <input type="number" value={productPrice} onChange={handleProductPriceChange} />
      </div>
      <div>
        <label>Choose a Category:</label>
        <select value={category} onChange={handleCategoryChange}>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)} Items
            </option>
          ))}
        </select>
      </div>
      <button onClick={handleAddProduct}>Add Product</button>

      {categories.map((cat) => (
        <div key={cat}>
          <h2>{cat.charAt(0).toUpperCase() + cat.slice(1)} Items List</h2>
          <ul>
            {products
              .filter((product) => product.category === cat)
              .map((product) => (
                <li key={product.id}>
                  {product.id} - {product.name} - ${product.price}
                  <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Product;