import React, {useState} from 'react'

export function NewForm() {

  const handleOnChange = (event) => {
    let newNumber = +event.target.value
    if (Number.isInteger(newNumber)){
      setText(newNumber)
    }
  }

  const Calculator = () => {
    let newNumber = +text
    let buffer = 0.5
    let detector = 2
    let tracker = 0.25
    let counting = 0.25
    let streamer = 0.25
    let newRes = ((buffer*newNumber)+(((detector*newNumber)/newNumber)+detector+(newNumber/2))+(tracker*newNumber)+(counting*newNumber)+(streamer*newNumber))
    newRes = Math.ceil(newRes)
    setRes(newRes)
    buffer = 0.33
    detector = 1
    let newResGPU = ((buffer*newNumber)+(((detector*newNumber)/newNumber)+detector+(newNumber/4))+(tracker*newNumber)+(counting*newNumber)+(streamer*newNumber))
    newResGPU = Math.ceil(newResGPU)
    setResGPU(newResGPU)
  }
  const [text, setText] = useState('');
  const [res, setRes] = useState('');
  const [resGPU, setResGPU] = useState('');
  return (
    <>
    <div className='container my-3 text-center'>
      <h1>CPU Calculator</h1>
    <div className='row'>
      <div className='col-3 offset-md-3'>
      <p>No. of Cameras</p>
      </div>
      <div className='col-3'>
      <textarea rows='1' value={text} onChange={handleOnChange} placeholder='0'></textarea>
    </div>
    </div>
      <div className='container text-center'>
      <button onClick={Calculator} className="btn btn-sm btn-outline-dark my-3 mx-3">Calculate</button>
      <p><strong>{res?'Without GPU: '+res:''}</strong></p>
      <p><strong>{resGPU?'With GPU: '+resGPU:''}</strong></p>
      </div>
    </div>
    </>
  )
}