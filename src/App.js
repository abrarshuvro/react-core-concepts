import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';
import { useEffect, useState } from 'react';

function App() {
  const nayoks = ['siam', 'rahim', 'hablu','sakib','rabbi']
  const friends = ['lallu', 'kallu','pada','Badshah']
  const products =[
    {name:'Photoshop', price:'$99.99'},
    {name:'illustrator', price:'$60.99'},
    {name:'pdf', price:'$6.99'}

  ]

  return (
    <div className="App">
      <header className="App-header">
       <p>I am a react person</p>
       <Counter></Counter>
       <Users></Users>
       <Todos></Todos>
       <ul>
         {
           friends.map(friend=><li>{friend}</li>)
         }
         {
           nayoks.map(nayok =><li>{nayok}</li>)
         }
         {
           products.map(product=><li>{product.name}</li>)
         }
       </ul>
       {
         products.map(pd=><Product product={pd}></Product>)
       }
       
      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(10)
  
  
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() =>setCount(count-1)}>Decrease</button>

      <button onClick={ () => setCount(count +1)}>Increase</button>

    </div>
  )
}


function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])


  return(
    <div>
      <h3>Dynamic Users: {users.length} </h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

function Todos(){
  const [Mtodo, setTodo] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data=> setTodo(data))
  },[])
  return(
    <div>
      <h3>Dynamic Todo:{Mtodo.length}</h3>
      {
        Mtodo.map(todo=> <li>{todo.title}</li>)
      }
    
    </div>
  )
}

function Product(props){
  const productStyle={
      border:'1px solid gray',
      borderRadious:'5px',
      backgroundColor:'lightgray',
      height:'200px',
      width:'200px',
      folat:'left'
  }
const {name, price }= props.product;
console.log(name, price);
  return (
    
    <div style={productStyle}>
    <h3>{name}</h3>
    <h5>{price}</h5>
    <button>Buy Now</button>
    </div>
  )
}
export default App;