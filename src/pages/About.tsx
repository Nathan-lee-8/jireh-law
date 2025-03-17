import profileImage from '../assets/CherylLeeImage.jpg';

const About = () => {
  
  return(
    <main id="about">
      <div id="aboutDescription">
        <h2>About</h2>
        <img src={profileImage} className='imgContainer' alt="Cheryl Lee Photo"/>
        <p style={{flex: 1}}>
          Cheryl practiced business and real estate law at a mid-size law firm in Seattle and 
          served as General Counsel to Ballmer Group for over four years.  Prior to becoming an 
          attorney, Cheryl was a marketing director at Microsoft, small business owner, engineer at 
          Boeing Commercial Airplane Group, and founding councilmember of City of Shoreline. She 
          obtained her JD, MBA and undergraduate in Mechanical Engineering - all from the University 
          of Washington.  Her education and breadth of professional experiences enable her to bring 
          a unique perspective, insight, and approach to assisting her clients.  Cheryl's clients 
          have praised her out-of-the-box thinking and practical legal solutions.  She leverages 
          over two decades of business experience to holistically understand the clients' issues to 
          deliver legal counsel. One of her clients wrote “your energy is infectious, and your 
          solution orientation is something that I admire greatly.”          
        </p>
        <p>Cheryl is licensed to practice law in the State of Washington </p>

        </div>
        <div id="aboutDescription">
      <h3><b>Background and Education</b> </h3>
      <p>
        In-House Counsel to Ballmer Group, 2017-2021<br/>
        Legal Advisor to Korean Consulate General in Seattle, 2018-2019<br/>
        Helsell Fetterman LLP, Associate, Business and Real Estate<br/>
        Legal Intern at Amazon<br/>
        Recipient of Northwest Asian Weekly Foundation's “Living Pioneer Award” and International 
        Examiner's “Community Voices Award”<br/>
        J.D., University of Washington School of Law<br/>
        MBA, University of Washington Foster School of Business<br/>
        BSME, University of Washington School of Engineering
      </p>
      </div>
        <div id="aboutDescription">
      <h3><b>Professional and Community Service</b> </h3>
      <p>
        Washington State Bar Association, Member<br/>
        American Bar Association<br/>
        Korean American Bar Association, Member<br/>
        President (2019-2020); Board Member (2018-present)<br/><br/>

        Cheryl is Business Fellow of the American Bar<br/><br/>

        Chair & Volunteer, KCSC Pro Bono Legal Clinic (2017-2023)<br/>
        Asian Bar Association of Washington, Member<br/>
        American Bar Association, Standing Committee on Delivery of Legal Services<br/>
        Seattle Symphony, Secretary of the Board of Directors (2019-2023)<br/>
        Shoreline Community College Foundation, Board Member (2017-2023)<br/>
        University of Washington School of Law, Moot Court Contracts Negotiation Competition Judge<br/>
        University of Washington Foster School of Business, MBA Mentor
      </p>
      
      </div>
    </main>
  )
}
export default About;