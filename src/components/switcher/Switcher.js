import { useEffect, useState } from "react";
import "./Switcher.css";

function Coffee(props) {
  return (
    <>
      <input onClick={() => {props.onSelect(1)}} className="button" type="radio" name="toggle" id="one" style={props.isActive ? {"opacity": "0.56"} : {"opacity": "0"}}/>
        <div className="input-value" id="coffee" style={props.isActive ? {color: "#FEFAE0"} : {color: "#283618"}}>
          Кофе
        </div>  
    </>
  )
}

function NotCoffee(props) {
  return (
    <>
    <input onClick={() => {props.onSelect(2)}} className="button" type="radio" name="toggle" id="two" style={props.isActive ? {"opacity": "0.56"} : {"opacity": "0"}}/>
      <div className="input-value" id="not-coffee" style={props.isActive ? {color: "#FEFAE0"} : {color: "#283618"}}>
        Не <br/> кофе
      </div>
  </>
  )
 
}

function Food(props) {
  return(
    <>
      <input onClick={() => {props.onSelect(3)}} className="button" type="radio" name="toggle" id="three" style={props.isActive ? {"opacity": "0.56"} : {"opacity": "0"}}/>
        <div className="input-value" id="food" style={props.isActive ? {color: "#FEFAE0"} : {color: "#283618"}}>
          Еда
        </div>
    </>
  )
}


function Switcher(props) {
  const [active, setActive] = useState(2)

  const onSelect = (id) => {
    setActive(id); 
    props.onSwitch(active)
  }

  useEffect(() => {
    props.onSwitch(active)
  }, [active])

  return (
    <div className="tri-state-toggle">
      <Coffee isActive={active === 1 ? true : false} onSelect={onSelect}/>
      <NotCoffee isActive={active === 2 ? true : false} onSelect={onSelect}/>
      <Food isActive={active === 3 ? true : false} onSelect={onSelect}/>
    </div>
  );
}

export default Switcher;
