import React, {memo} from 'react'
import '../homeAppllancess/homeAppllancess.css'

function HomeAppllancess(props) {
  console.log(props);
  return (
    <div className='banner'>
      <h2>{props.nav}</h2>
      <img src={props.url} width={500} alt="" />
    </div>
  )
}

export default memo(HomeAppllancess)