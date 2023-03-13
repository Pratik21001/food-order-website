import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import RedditIcon from '@mui/icons-material/Reddit';
import '../style/Footer.css'


function Footer() {
  return (
   <div className='footer'>
   <div className='socialMedia'>
  <TwitterIcon />
  <LinkedInIcon />
  <InstagramIcon />
  <RedditIcon />
  <p>&copy;2023 FoodIndian.com</p>
   </div>
   </div>
  )
}

export default Footer