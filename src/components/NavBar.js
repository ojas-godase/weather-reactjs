import React , {useState} from 'react'

export default function NavBar(props) {
  const[value,setValue] = useState("")
  function changeValue(e) {
    setValue(e.target.value)
    // console.log(value)
  }
  return (
    <div className='navbar'>
        <div className="input">
            <input id='input' type="text" placeholder='Search a city' value={value} onChange={changeValue} />
            <img id='search' src="images/search.jpg" alt="" onClick={() => props.handleSearch(value)}/>
        </div>
    </div>
  )
}
