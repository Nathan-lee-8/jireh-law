import profileImage from '../assets/CherylLeeImage.jpg'

const Home = () => {
  
  return(
    <main>
      <div id="homeDescription">
        <h2>Jireh Law Group PLLC</h2>
        <p>
          Jireh Law is focused on transactional legal services for small businesses and 
          family offices as well as commercial leasing for both landlords and tenants, commercial 
          and residential property management, commercial real estate and personal property 
          transactions, and financing. 
        </p>
      </div>
      <img src={profileImage}  id="homeImg" alt="Cheryl Lee Photo"/>
      
    </main>
  )
}
export default Home;