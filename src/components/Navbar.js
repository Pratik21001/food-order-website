import React,{useState} from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import '../style/Navbar.css';
// import ReorderIcon from '@material-ui/icons/Reorder';
import ViewListIcon from '@mui/icons-material/ViewList';

function Navbar() {
    const[showLinks,setShowLinks]=useState(false);
    function click(){
        setShowLinks(!showLinks);
    }

  return (
   <div className='navbar'>
      <div className='leftSide' id={showLinks ? "open" : "close"}>
      <img src={logo} alt='not loaded'/>
      <div className="hiddenLinks">
      <Link to ='/'>Home</Link>
        <Link to ='/menu'>Menu</Link>
        <Link to ='/about'>About US</Link>
        <Link to ='/contact'>Contact</Link>
      </div>
      </div>
      <div className='rightSide'>
        <Link to ='/'>Home</Link>
        <Link to ='/menu'>Menu</Link>
        <Link to ='/about'>About US</Link>
        <Link to ='/contact'>Contact</Link>
        <button onClick={()=>setShowLinks(click)}>
        {/* <ReorderIcon /> */}
         <ViewListIcon />           
        </button>
        </div>
      </div>
  )
}     


export default Navbar;