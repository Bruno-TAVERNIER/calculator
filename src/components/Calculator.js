import MyInput from "./MyInput";
import MyResult from "./MyResult";
import MyButton from "./MyButton";
import { useState } from "react";

export default function Calculator() {

  const [n1, chgN1] = useState(0); 
  const [n2, chgN2] = useState(0); 
  const [result, setResult] = useState(0);

  const onAdd = (e) => {
    //alert('+');
    //alert(e.target.name);
    setResult(n1 + n2);
  }
  const onSub = (e) => {
    setResult(n1 - n2);
  }
  const onMul = (e) => {
    setResult(n1 * n2);
  }
  const onDiv = (e) => {
    if(n2 !== 0) setResult(n1 / n2);
    else setResult("Division par zéro...");
  }

  const chgData = (e) => {
    if(e.target.value==='') chgN1(0);
    else chgN1(parseFloat(e.target.value));
  }
  const chgData2 = (e) => {
    if(e.target.value === '') chgN2(0);
    else chgN2(parseFloat(e.target.value));
  }

  return (
    <div>
      <MyResult val= { result }/>
      <MyInput label="Nombre 1" onChgInput={ chgData } val={ n1 }/>
      <MyInput label="Nombre 2" onChgInput={ chgData2 } val={ n2 }/>
      <MyButton texte="+" name="add" onAction={ onAdd }/>
      <MyButton texte="-" name="sub" onAction={ onSub }/>
      <MyButton texte="*" name="mul" onAction={ onMul }/>
      <MyButton texte="/" name="div" onAction={ onDiv }/>
    </div>
  )
}