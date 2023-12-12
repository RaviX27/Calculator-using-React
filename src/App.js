import logo from './logo.svg';
import './App.css';

function App() {
  function handleNumber(){
    alert('handle number click');
  }

  function handleOperator(){

  }
  return (
    <div className="App">
      <div className='display'>0</div>
      <CalcButton value="7" onClick={handleNumber}/>
      <CalcButton value="8" onClick={handleNumber}/>
      <CalcButton value="9" onClick={handleNumber}/>
      <CalcButton className="operator" value="/" onClick={handleOperator}/>

      <CalcButton value="4" onClick={handleNumber}/>
      <CalcButton value="5" onClick={handleNumber} />
      <CalcButton value="6" onClick={handleNumber}/>
      <CalcButton className="operator" value="*" onClick={handleOperator}/>

      <CalcButton value="3" onClick={handleNumber}/>
      <CalcButton value="2" onClick={handleNumber}/>
      <CalcButton value="1" onClick={handleNumber}/>
      <CalcButton className="operator" value="-" onClick={handleOperator}/>

      <CalcButton value="C"/>
      <CalcButton value="0" onClick={handleNumber}/>
      <CalcButton value="="/>
      <CalcButton className="operator" value="+" onClick={handleOperator}/>
    </div>
  );
}

function CalcButton(props){
  return <button className={props.className} onClick={props.onClick}>{props.value}</button>

}

export default App;
