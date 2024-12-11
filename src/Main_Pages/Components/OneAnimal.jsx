import React from 'react'
import { NavLink, useLocation, useNavigate, useParams } from 'react-router'
import { data } from '../data'

export default function OneAnimal() {
    const {id} = useParams()
    const animal = data.find(an=>an.id==id)
    const {img, name, age, sex, description1, description2} = animal
    const navigate = useNavigate()
    const location = useLocation()
    const type = location.state
    function goBack (){
       navigate(-1)
    }

  return (
    <>
    <p onClick={goBack}className='back-arrow'><span className='back-arrow-span'>←</span> 
    Back to 
    {type==='cat' && ' cats & kittens'}
    {type==='dog' && ' dogs & puppies'}
    {!type && ' all animals'}
    </p>
    <div style={{display:'flex', justifyContent:'center'}}>
    <div style={{display:'flex', justifyContent:'space-around', width:'75%', marginTop:'20px'}}>
       <div style={{margin:'10px 0'}}>
        <img className='one-animal-img' src={`/public/${img}`}/>
       </div>
       <div style={{textAlign:'left', marginLeft:'50px'}}>
        <h1 style={{margin:'0'}}>{name}</h1>
        <p style={{fontSize:'1.2rem', margin:'10px 0'}}>
        <span style={{display:'inline-block', padding:'0 10px 0 2px'}}> 
          <img 
          className='sex-icon-small'
          src={sex==='m' ? '/public/mars.png' : '/public/venus.png'}  
          alt="sex" /></span> •<span style={{display:'inline-block', padding:'0 15px'}}> {age}</span>
          </p>
          <p style={{fontSize:'1.1rem', lineHeight:'1.6rem'}}>{description1}</p>
          <p style={{fontSize:'1.1rem', lineHeight:'1.6rem'}}>{description2}</p>  
       </div>
    </div>
    </div>
    <div className='one-btns-cont'>
        <button className='o-b-f'> 
          <span className='heart' style={{display:'inline-block', paddingRight:'10px'}}>❤</span>
           I'm interested in adopting</button>
        <button className='o-b-s'>Donate to my care</button>
        <NavLink to='/contact'><button className='o-b-t'>Contact us</button></NavLink>
      </div>
    </>
  )
}
