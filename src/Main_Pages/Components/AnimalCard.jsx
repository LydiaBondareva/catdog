import { NavLink } from "react-router"

export default function AnimalCard ({id, img, name, age, sex, sp}){

    return (
      <NavLink to={`/catsdogs/${id}`} state={sp}>
    <div className='animal-card'>
      <img className='animal-img' src={img}></img>
         <div style={{margin:'10px 15px', display:'flex', justifyContent:'space-between'}}>
            <div>
                <h3 style={{margin:0}}>{name}</h3>
                <p style={{margin:'10px 0', fontSize:'1.2rem'}}>{age}</p>
            </div>
            <div 
            className='sex-icon-cont' 
            style={{backgroundColor: sex==='m' ?'#c0fdff' : '#ffd6ff'}}
            >
              <img 
              className='sex-icon' 
              src={sex==='m' ? 'mars.png' : 'venus.png'}  
              alt="sex" />
            </div>
          </div>
    </div>
    </NavLink>
    )
  }