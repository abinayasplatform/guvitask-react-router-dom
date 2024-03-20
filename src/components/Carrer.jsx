import React from 'react'
import Card from './Card'

function Carrer({data}) {
  const carrerData=data.filter(card=>card.category==="Carrer")
  return <div className="container">
  <div className="row">
    {
      carrerData.map((e,i)=>{
        return <Card cardData={e} key={i}/>
      })
    }

  </div>
 </div>
}

export default Carrer