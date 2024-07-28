import profile_picture from './assets/20191030_211523.jpg'

function Card() {
  return(
   <div className="card">
     <img className="card-image" src={profile_picture} alt="profile picture" />
     <h2 className='card-title'>Pasan Gamage</h2>
     <p className='card-description'>Learning something everyday.</p>
   </div>
  );
}
export default Card;