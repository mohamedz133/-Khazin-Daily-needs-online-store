import React from "react";
import "./Aboutus.css";
import Navbar from '../../COMPONENTS/Navbar/Navbar'

function About() {
  

    return (
        <div>
            <div><Navbar reloadnavbar={false}/></div>
        <div className="team" id="team">
            <h2 className="main-title">Team Members</h2>
            <div className="container">
                
                {/* Member 1 */}
                <div className="box">
                    <div className="data">
                        {/* <img src={Mohamed_Zaki} alt=""/> */}
                    <img  alt=""/>

                    </div>
                    <div className="info">
                        
                        <h3>Mohamed Zaki</h3>
                        
                        <p>Front-End</p>
                        <div className="social">
                            {/* Use the SVG icon instead of <i> tag */}
                           
                         
                        </div>
                    </div>
                    
                </div>
                
                {/* Member 2 */}
                <div className="box">
                    <div className="data">
                        <img  alt=""/>
                        
                    </div>
                    <div className="info">
                        <h3>Hazem Elshahawy</h3>
                        <p>Front-End</p>
                        <div className="social">
                            {/* Use the SVG icon instead of <i> tag */}
                           
                               
                        </div>
                    </div>
                </div>

                {/* Member 3 */}
                <div className="box">
                    <div className="data">
                        <img  alt=""/>
                        
                    </div>
                    <div className="info">
                        <h3>Mahmoud Elsharkawy</h3>
                        <p>Front-End</p>
                        <div className="social">
                            {/* Use the SVG icon instead of <i> tag */}
                           
                        </div>
                    </div>
                </div>


                {/* Member 4 */}
                <div className="box">
                    <div className="data">
                        <img  alt=""/>
                        
                    </div>
                    <div className="info">
                        <h3>Ahmed Elshafey</h3>
                        <p>Back-End</p>
                        <div className="social">
                            {/* Use the SVG icon instead of <i> tag */}
                            
                           
                        </div>
                    </div>
                </div>




                {/* Member 5 */}
                <div className="box">
                    <div className="data">
                        <img   alt=""/>
                        
                    </div>
                    <div className="info">
                        <h3>Youssef Shoaib</h3>
                        <p>Back-End</p>
                        <div className="social">
                            {/* Use the SVG icon instead of <i> tag */}
                           
                        </div>
                    </div>
                </div>



                {/* Member 6 */}
                <div className="box">
                    <div className="data">
                        <img  alt=""/>
                        
                    </div>
                    <div className="info">
                        <h3>Ahmed Ashraf</h3>
                        <p>Back-End</p>
                        <div className="social">
                            {/* Use the SVG icon instead of <i> tag */}
                            
                               
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        </div>
    );
}

export default About;
