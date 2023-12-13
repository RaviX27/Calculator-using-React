import React from 'react';
import './App.css';

function App() {
    const [calc, setcalc] = React.useState({
      current: "0",
      total: "0",
      isInitial: true,
      perOp: ""
    });



  function handleNumber(value){
    let newValue = value;

    if(!calc.isInitial){
      newValue = calc.current+value;
    }
    setcalc({current: newValue, total:calc.total, isInitial: false, perOp: calc.perOp});
  }



  function handleOperator(value){
    const total = doCalculation();
    setcalc({current: total.toString(), total: total.toString(), isInitial: true, perOp: value});

  }

  function doCalculation(){
    let total = parseInt(calc.total);

    switch(calc.perOp){
      case "+":
        total += parseInt(calc.current);
        break;
      case "-":
        total -= parseInt(calc.current);
        break;
      case "*":
        total *= parseInt(calc.current);
        break;
      case "/":
        total /= parseInt(calc.current);
        break;
      default:
        total = parseInt(calc.current);

    }
    return total;
  }

  function handleClear(){
    setcalc({
      current: "0",
      total: "0",
      isInitial: true,
      perOp: ""
    });
  }


  function renderDisplay(){
    return calc.current;
  }
  return (
    <div className="App">
      <div className='display'>{renderDisplay()}</div>
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

      <CalcButton value="C" onClick={handleClear}/>
      <CalcButton value="0" onClick={handleNumber}/>
      <CalcButton value="=" onClick={handleOperator}/>
      <CalcButton className="operator" value="+" onClick={handleOperator}/>
    </div>
  );
}

function CalcButton(props){
  return <button className={props.className} onClick={() => props.onClick(props.value)}>{props.value}</button>

}

export default App;
