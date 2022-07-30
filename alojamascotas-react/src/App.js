import React, { useEffect, useState } from 'react';
import './App.css';
import PanelTotal from './components/PanelTotal';
import PanelProductsList from './components/PanelProductsList';

function App() {

  const [totalProducts, setTotalProducts] = useState([]);
  const [totalUsers, setTotalUsers] = useState([]);
  const [totalProductsList, setTotalProductsList] = useState([]);

  useEffect(() => {
    
    // Petición Asincrónica al montarse el componente
    const endpointProducts = "http://localhost:8000/api/products";
    const endpointUsers = 'http://localhost:8000/api/users';

    // Fetch Api Productos
    fetch(endpointProducts)
      .then(response => response.json())
      .then(data => {
        setTotalProducts(data.count)
        if (!data.Error) {
          setTotalProducts(data.count);
          setTotalProductsList(data.products)
          // console.log(data.products)
        } else {
          setTotalProducts([]);
        }
      })
      .catch(error => console.log(error))

    // Fetch Api Usuarios
    fetch(endpointUsers)
      .then(response => response.json())
      .then(data => {
        if (!data.Error) {
          setTotalUsers(data.count);
        } else {
          setTotalUsers([]);
        }
      })
      .catch(error => console.log(error))



  }, [])


  return (
    <div>
      <PanelTotal
        cardName="Productos"
        cardValue={totalProducts}
      />
      <PanelTotal
        cardName="Usuarios"
        cardValue={totalUsers}
      />
      <PanelTotal
        cardName="Categorias"
        cardValue="1"
      />
        
        <div className="row">

            {totalProductsList.map( (product, i) => {

                return <PanelProductsList {...product} key={i}/>
            
            })}

        </div>

    </div>
  );
}

export default App;
