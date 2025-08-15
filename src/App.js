import './App.css';
import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";
import AddTodo from "./MyComponents/AddTodo";
import React, { useState } from 'react';

function App() {
  const onDelete = (todo) => {
    console.log("I am onDelete function of todo", todo);
    setTodos(todos.filter((e) => e.sno !== todo.sno));
  };
const addTodo = (title,desc)=>{
  console.log("I am addTodo function" , title, desc);
}
  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to the Market",
      desc: "You need to go to the market to buy vegetables"
    },
    {
      sno: 2,
      title: "Go to the Mall",
      desc: "You need to go to the mall to buy Perfume"
    },
    {
      sno: 3,
      title: "Go to the Ghat",
      desc: "You need to go to the Ghat to get the boat"
    },
  ]);

  return (
    <>  
      <Header title="My Todos List" searchBar={true} />
      <AddTodo addTodo={addTodo}/>
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
