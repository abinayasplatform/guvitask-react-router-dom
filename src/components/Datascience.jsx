import React from 'react'
import Card from './Card'
function Datascience({data}) {
  const datascience=data.filter(card=>card.category==="Ds")
  return <div className="container">
  <div className="row">
    {
      datascience.map((e,i)=>{
        return <Card cardData={e} key={i}/>
      })
    }


    </div>
  </div>
}

export default Datascience