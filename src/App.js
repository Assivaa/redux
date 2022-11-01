import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addItem } from "./redux/modules/todos";
import './App.css';

const ContainerToDoItem = styled.div`
width: 250px;
height: 150px;
padding: 12px;
border: 4px teal solid;
background-color: white;
border-Radius:  10px ;
margin-left: 60px;
margin-right: -65px;
`;

const Task = styled.span`
font-size: 14px;
font-weight: bold;
`;

//form
 

const ToDoItem = ({task}) => {
  return(
    <ContainerToDoItem>
      <Task>{task.title}</Task>
      <Task>{task.description}</Task>
    </ContainerToDoItem>
  );
};

const ContainerToDoList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  background-color: white;
`;


const ToDoList = () => {
  const toDos = useSelector(state => state.toDos.items);
  return(
    <ContainerToDoList>
        {toDos.map(task => {
          return <ToDoItem task={task} key ={task} />;
        })}
        {/* <ToDoItem task={'Walk the Dog'}/> */}
    </ContainerToDoList>
  );
};


const ContainerJudul = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 66px;
  margin-bottom:10px;
  background-color: white;
`;

const ContainerJudul2 = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 66px;
  margin-bottom:10px;
  background-color: white;
`;


const Judul = () => {
  return(
    <ContainerJudul>
        <h1 className="judul">Working.. 🔥</h1>
    </ContainerJudul>
  )
}

const Judul2 = () => {
  return(
    <ContainerJudul2>
        <h1 className="judul2">Done..! 🎉</h1>
    </ContainerJudul2>
  )
}

const ContainerToDoForm = styled.div`
  padding: 32px;
  background-color: #eee;
  align-items: center;
  border: 20px ;
  display: flex;
  border-Radius: 10px ;
  margin-left: 40px;
  margin-right: 40px;
  margin-top: 25px;
`;

const ToDoForm = () => { 
  const dispatch = useDispatch();
  const [toDo, setToDo] = useState({id: 0, title: '', description: ''});
  const handleNewToDoTitle =  ({target: {value}})=> {
    setToDo(newTodo => ({...newTodo, title: value}))
  };
  const handleNewToDoDescription = ({target: {value}}) => {
    setToDo(newTodo => ({...newTodo, description: value}))
  };


  const createNewToDo = () => {
    if (!(toDo.title && toDo.description)) return; 
    alert(`new to do is ${toDo}`);
    dispatch(addItem(toDo));
  };
  return(
    <ContainerToDoForm>
    <div className="input-form">
    <h1>Title</h1>
    <input 
        value={toDo.title}
        onChange={handleNewToDoTitle}
    />
    </div>
    <break />
    <div className="input-form2">
    <h2>Context</h2>
    <input 
        value={toDo.description}
        onChange={handleNewToDoDescription}
    />
   
    </div>  
   
    <button className="add_button" onClick={createNewToDo}> Add New To Do </button>
    </ContainerToDoForm>
  );
};

const ContainerApp = styled.div`
    width: 100%;
    background-color: white;
    
`;

//header
const App = () => {
  // const count = useSelector(state => state.toDos.items.length); //untuk menghitung jumlah kotak yang ada pake ini
  return(
    <ContainerApp>
        <div className="header">
          <div> My Todo List </div> 
          <div>React</div>
        </div>
        <ToDoForm/>
        <Judul/> 
        <ToDoList/>
        <Judul2/>
    </ContainerApp>
  );
};

export default App;