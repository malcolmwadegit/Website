// client/src/pages/Home/Home.js

import React from 'react';
import './Home.css'; // Import the corresponding CSS file for styling
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import PersonalPhoto from '../../styles/images/PersonalPhoto.jpg';
import ConsultForm from '../../components/Forms/ConsultForm';


const Home = () => {
  return (
    <div>
      <div className="home-container">
        <header>
          <div>
            <Header />
          </div>
        </header>
        <main>
          {/* Start of Row 1 */}
          <div className='row-1'>
            <div className='col-4'>
              <div className='container-top'>
                <div className='element-container-id'>
                <img className='personal-photo' src={PersonalPhoto} alt='MalcolmWade'   />
                </div>
              </div>
            </div>
            <div className=' col-4'>
              <div className='container-top'>
                <div className='element-container-info'>
                  <div className='text-info'>
                      <p className='location-info'>Location: Las Vegas</p>
                      <table className='skills-table'>
                        <hd>Skills</hd>
                        <li>Full-Stack Web Development</li>
                        <li>Business Analysis</li>
                        <li>Data Analyis</li>
                        <li>Customer Service</li>
                        <li>Team Work</li>
                      </table>
                    </div>
                  </div>
                <div className='element-container-info'>
                  <div className='text-info'>
                      <table className='skills-table'>
                        <hd>Developer Knowledge</hd>
                        <li>Python</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>MySQL</li>
                        <li>React</li>
                        <li>MongoDB</li>
                        <li>Nodejs</li>
                        <li>Expressjs</li>
                        <li>Django</li>
                        <li>Flask</li>
                      </table>
                    </div>
                </div>
              </div>
            </div>
          </div>
          {/* Start of Row 2  */}
          <div className='row-2' >
            <div className='container-middle'>
                <div className='consult-element-container'>
                    <ConsultForm />
                </div>
              </div>
            
          </div>
          {/* Start of Row 3  */}
          <div className='row-3'>
            <div className='col-4'>
              <div className='container-bottom'>
                <div className='element-container-bottom'>
                  <div className='Portfolio-text'>
                      <p><h3>Analyst Portfolio</h3></p>
                      <p><h4>Experience</h4></p>
                      <ul>Microsoft Excel : 7 years </ul>
                      <ul>Data Analysis : 5 years</ul>
                      <ul>SQL : 5 years </ul>
                      <ul>Python : 3 years </ul>
                      <ul>R : 3 years </ul>
                      <p><h4>Projects</h4></p>
                      <ul>Gas Market Optimization</ul>
                      <ul>Business Analysis Tool</ul>
                      <ul>Finanacial Analysis Tool</ul>
                    </div>
                </div>
              </div>
            </div>
            {/* <div className=' col-2'>
              <div className='container-bottom'>
                <div className='element-container-bottom null'>
                </div>
              </div>
            </div> */}
            <div className=' col-4'>
              <div className='container-bottom'>
                <div className='element-container-bottom'>
                  <div className='Portfolio-text'>
                    <p><h3>Developer Portfolio</h3></p>
                    <table>
                    <p><h4>Published Projects</h4></p>
                    <ul>Poker Tools Website</ul>
                    <ul>Project Manager</ul>
                    <p><h4>Unpublished Projects</h4></p>
                    <ul>Poker Tools API</ul>
                    <ul>Financial Health Tool</ul>
                    <ul>Routine App (project plan)</ul>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <footer className='footer'>
          <Footer />
        </footer>

      </div>
    </div>
  );
};

export default Home;
