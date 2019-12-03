
  import React, {useState} from 'react'



const HomePage = () => {
	const [input,setInput]=useState('')
	const [operator,setOperator]=useState()
	const [first, setFirst]=useState(false)
	const [runningValue,setRunningValue]=useState()

  
  
  const inputClicked=(inp)=>{
  setInput(prev=>{
		if (first) {
			setFirst(false)
			return inp.toString()
		} else {
			return prev + inp.toString()
		}
  })
}


const operand=(op) =>{
	
	console.log(op)
setOperator(op)
setRunningValue(input)
setFirst(true)
let rt=calculate(op)
// setRunningValue(rt)
setInput('')
}

const calculate =()=>{
  console.log("calculating")
  if (operator==="-") {
    console.log("yes")
    setInput(parseInt(runningValue)-parseInt(input))
  } else if (operator==="+"){
    setInput(parseInt(runningValue)+parseInt(input))
  } else if (operator==="*"){
    setInput(parseInt(runningValue)*parseInt(input))
  } else if (operator==="/"){
    setInput(parseInt(runningValue)/parseInt(input))
	}
	
}

const clearState=()=>{
  setOperator('')
	setInput('')
	setRunningValue('')
}
  return(

<>
<section className="calculator">
<section className="output">
<h1>Calculator</h1>
<h1 id="display">{input}</h1>
</section>
<section className="buttons">
<ul>
  <section className="clear-row">
  <li>
    <button id="clear-button" onClick={()=>clearState()}>clear</button>
  </li>
  <li>
    <button onClick={()=>operand("/")}>/</button>
  </li>
  </section>
  <section className="top-row">
  <li>
    <button onClick={()=>inputClicked(7)}>7</button>
  </li>
  <li>
    <button onClick={()=>inputClicked(8)}>8</button>
  </li>
  <li>
    <button onClick={()=>inputClicked(9)}>9</button>
  </li>
  <li>
    <button onClick={()=>operand("-")}>-</button>
  </li>
  </section>
  <section className="middle-row">
  <li>
    <button onClick={()=>inputClicked(4)}>4</button>
  </li>
  <li>
    <button onClick={()=>inputClicked(5)}>5</button>
  </li>
  <li>
    <button onClick={()=>inputClicked(6)}>6</button>
  </li>
  <li>
    <button onClick={()=>operand("+")}>+</button>
  </li>
  </section>
  <section className="bottom-row">
  <li>
    <button onClick={()=>inputClicked(1)}>1</button>
  </li>
  <li>
    <button onClick={()=>inputClicked(2)}>2</button>
  </li>
  <li>
    <button onClick={()=>inputClicked(3)}>3</button>
  </li>
  <li>
    <button onClick={()=>calculate()}>=</button>
  </li>
  </section>
</ul>
</section>
</section>

</>
  )
}

export default HomePage