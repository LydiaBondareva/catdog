import React from 'react'

export default function About() {
  return (
    <div style={{display:'flex', flexDirection:'column', 
    justifyContent:'center',
    alignItems:'center'}}>
    <div style={{width:'60%'}}>
    <h3>About us</h3>
    <hr color='#6121BF' width='70%'/>
    <p>CatDog helps give all animals a healthy life and a loving home. We enable animal rescues
       to create fundraisers and wishlists to support animals in their care. Through CatDog,
        animal lovers can purchase and give in a modern, transparent way. With over 3,500+ animal
         welfare organizations on board, CatDog's mission is to help save as many animals globally
          through community, innovation, and creativity. </p>
          <p>As a for-good startup, we believe animals
           often "rescue" us. And it is our obligation to support those who do not have a voice. 
           As a company, we believe the best way for us to make an impact is by providing the 
           "business" tools, namely fundraising, marketing, and a valuable community, to 
      animal-focused non-profits so that they can fulfill their potential and continue to do good.</p>
</div>  
<div className='donate-div'>
  <div style={{paddingRight:'50px'}}>
  <h3>Give rescue animals joy-filled lives</h3>
  <p>
  CatDog is not just a shelter. We’re a family of passionate staff, 
volunteers, and supporters committed to enriching the lives of homeless pets from the 
moment they enter our care.
Every animal we rescue stays in our care for as long as it takes to find their forever home.</p>
<button className='donate-btn'>Donate</button>
</div>
<div>
  <img className='donate-img' src="donate.webp" alt="" />
</div>
</div>
</div>
)
}
