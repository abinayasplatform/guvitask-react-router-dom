import React from 'react'
import Card from './Card'

function Cybersecurity({data}) {
  const cyber=data.filter(card=>card.category==="Cyber")
  return  <div className="container">
  <div className="row">
    {
      cyber.map((e,i)=>{
        return <Card cardData={e} key={i}/>
      })
    }


  </div>
  </div>
    
  
}

export default Cybersecurity