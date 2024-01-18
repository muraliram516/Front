import React from 'react';

const ProductList = ({ products, addToCart }) => {
  return (
    <div>
      <h2>Product List</h2>
      <table className="product-table">
        <thead>
          <tr>
            <th>Medicine Name</th>
            <th>Description</th>
            <th>Selling Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.MedicineName}</td>
              <td>{product.description}</td>
              <td>${product.Price}</td>
              <td>
                <button onClick={() => addToCart(product)}>Add to Cart</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;



// import React from 'react';

// const ProductList = ({ products }) => {
//   return (
//     <div>
//       <h2>Product List</h2>
//       <ul>
//         {products.map((product, index) => (
//           <li key={index}>
//             <strong>{product.medicineName}</strong> <p>{product.description}</p> <p>Price: ${product.price}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ProductList;
