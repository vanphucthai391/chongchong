//import logo from './logo.svg';
import './App.css';
const Person =(props)=>{
  return(
    <>
    <h3>Name: {props.name}</h3>
    <h3>Age: {props.age}</h3>
    </>
  )
}
function App() {
  return (
    <div className="App">
      <Person name={'John'} age={'25'}/>
      <Person name={'John2'} age={'26'}/>
      <Person name={'John3'} age={'27'}/>
      <Person name={'John4'} age={'28'}/>
    </div>
  );
}
export default App;
