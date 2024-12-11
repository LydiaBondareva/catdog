import React from 'react'
import {data} from './data'
import AnimalCard from './Components/AnimalCard'
import { useSearchParams } from 'react-router'

export default function CatDogs() {
  const [sP, setSP] = useSearchParams()

  const searchType = sP.get('type') || ''
  const searchSex = sP.get('sex') || ''

  function getAnimals(arr){
    return  arr.map(animal=><AnimalCard
      key={animal.id} 
      id={animal.id}
      img={animal.img}
      sex={animal.sex}
      age={animal.age}
      name={animal.name}
      sp={searchType}
      />) 
  }

  let res
  if (searchType&&searchSex){
    let itog = data.filter(an=>
      an.sex===searchSex&&an.type===searchType)
    if (itog.length){
      res=getAnimals(itog)} else{
        res=<h2>Sorry, we couldn't find animals matching these filters :(</h2>
      } 
  } else if (searchType){
    let itog = data.filter(an=>
      an.type===searchType)
    res=getAnimals(itog)
  } else if (searchSex){
    let itog = data.filter(an=>
      an.sex===searchSex)
    res=getAnimals(itog)
  } else{
    res=getAnimals(data)
  }
  
 function handleType (t){
  if (t!=searchType)
  {setSP(prevParams => {
    if (t === null) {
      prevParams.delete('type')
    } else {
      prevParams.set('type', t)
    }
    return prevParams})}
  else {setSP(prP=>{prP.delete('type')
    return prP
  })}  

}

 function handleSex (s){
  if (s!=searchSex)
  { setSP(prevParams=>{
    prevParams.set('sex', s)
    return prevParams
   })}
   else {setSP(prP=>{prP.delete('sex')
    return prP
  })}
  }
  let text
  if (searchType==='cat'){
    text='Cats & Kittens'
  } else if (searchType==='dog'){
    text='Dogs & Puppies'
  } else {text='All animals'}
 
  return (
    <div >
    <p className='anim first'>{text}</p>
    <p className='anim last'>available for adoption</p>
    <div className='anim-buttons-cont'>
      <div className='btns-type'>
      <button className={searchType==='' ? 'active' : ''}  onClick={()=>handleType(null)}>All animals</button>
      <button className={searchType==='cat' ? 'active' : ''} onClick={()=>handleType('cat')}>Cats & Kittens</button>
      <button className={searchType==='dog' ? 'active' : ''} onClick={()=>handleType('dog')}>Dogs & Puppies</button>
      </div>
      <div className='btns-sex'>
      <button  onClick={()=>handleSex('f')} className={searchSex==='f' ? 'btns-sex-f active' : 'btns-sex-f'}>F</button>
      <button  onClick={()=>handleSex('m')} className={searchSex==='m' ? 'btns-sex-m active' : 'btns-sex-m'}>M</button>
      </div>
      <div>
        <p style={{fontSize:'1.2rem', 
          textDecoration:'underline',
          cursor:'pointer'
          }} onClick={()=>setSP((prP)=>{prP.delete('sex')
            prP.delete('type')
            return prP
          })}>Clear filters</p>
      </div>
    </div>
    <div className='all-aminals-cont'>
      {res}
    </div>
    </div>
  )
}
