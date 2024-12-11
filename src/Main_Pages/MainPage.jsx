import { NavLink } from "react-router";

export default function MainPage() {
  return (
    <div className="main-container">
      <div style={{backgroundColor:'black', maxHeight:'548px', 
      position: 'relative', marginBottom:'30px'}}>
      <img className='main-img' src="animals.jpeg"></img>
      <p style={{marginTop:'0', 
        position:'absolute', 
        bottom:'40px', 
        left:'100px',
        color:'white',
        fontSize:'3.5rem',
        fontWeight:'bold'
        }}> Find Your Pet Soulmate Wherever They Are</p>
        </div>
      <NavLink to={'/catsdogs'}>
        <button>Find a loyal friend</button>
        </NavLink>
        <p className="main-descr first">
        We've served the New York City Tri-State area since 1967,
         and are humbled to be trusted experts in the animal rescue world.
         </p>
         <p className="main-descr last">
         The care we provide our cats and dogs, including behavior intervention, 
         enrichment outings, and ongoing support after adoption, make us one of the top 
         choices for pet adoption in the region.
        </p>
    </div>
  )
}
