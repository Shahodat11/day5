import React, {memo} from 'react'
import '../homeAppllancess/homeAppllancess.css'

function HomeAppllancess(props) {
  console.log(props);
  return (
    <div style={{background: `url(${props.url})  no-repeat center/cover `}}
     className='banner'>
      <h2>{props.nav}</h2>
      <h1 className='h1'>{props.title}</h1>
      <p className='p'>{props.price}</p>
      <button className='button'>{props.btn}</button>
    </div>
  )
}

export default memo(HomeAppllancess)