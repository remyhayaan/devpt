import { Link } from "react-router-dom";

function Header() {
  return (
    <div className='Header'>
      <Link to={'/'}>Home</Link>
      <Link to={'/about'}>My Bookings</Link>
      <Link to={'/ratings'}>Ratings And Reviews</Link>
      <Link to={'/services'}>Login</Link>
     <hr className ='line'/>
    </div>
  );
}

export default Header;
