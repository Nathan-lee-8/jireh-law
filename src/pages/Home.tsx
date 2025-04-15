import profileImage from '../assets/CherylLeeImage.jpg'

const Home = () => {
  
  return(
    <main id='homepage'>
      <p id="message">Website still in progress. Thank you for your patience :).</p>

      <div id="homeDescriptionContainer">
        <h2 style={{paddingRight: 10, paddingLeft: 10}}>Jireh Law Group PLLC</h2>
        <p style={{margin: 0, marginBottom: 5}}>
          Jireh Law is focused on transactional legal services for small businesses and 
          family offices as well as commercial leasing for both landlords and tenants, commercial 
          and residential property management, commercial real estate and personal property 
          transactions, and financing.
          </p>
      </div>

      <div id="homeImgContainer">
        <img src={profileImage} id="homeImg" alt="Cheryl Lee Photo"/>
        <div id='imgDescription'>
          <h3 style={{margin: 0}}>Cheryl Lee, Attorney</h3>
          <ul>
            <li>JD, University of Washington</li>
            <li>MBA, BSME, University of Washington</li>
            <li>Super Lawyers: Rising Star (2022-2025)</li>
            <li>Best Lawyers:  Ones to Watch in America (2023-2025)</li>
          </ul>
        </div>
      </div>
      
    </main>
  )
}
export default Home;