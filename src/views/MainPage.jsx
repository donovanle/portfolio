import React from 'react'

const MainPage = () => {
  return (
    <div id="container">
        <header>
            <div class="headerleft">
                <img src="https://cdn-icons-png.flaticon.com/512/726/726056.png" alt="" />
                <h2>Portfolio</h2>
            </div>
            <div class="headerright">
                <a href="https://github.com/donovanle"><img src="github.png" alt="" /></a>
                <a href="https://www.linkedin.com/in/donolem"><img src="download.png" alt="" /></a>
                <img src="emaillogo.png" alt=""/>
            </div>
        </header>
        <div class="main">
            <div class="topmain">
                <img src="https://www.jncreative.com/wp-content/uploads/2013/09/web-design-portfolio-background.jpg" alt="" class="mainimg"/>
                <img src="IMG_3476.PNG" alt="" class="secondimg"/>
                <div class="maintext">
                    <h1>Donovan Lemmerman</h1>
                    <h2>Full Stack Developer</h2>
                    <p>Python, Java, Mern/React, and HTML/CSSS</p>
                </div>
            </div>
            <div class="mainpart">
                <h1>About Me</h1>
                <p>Hello, My name is Donovan Lemmerman I am an aspiring full stack developer with ceretifictaes in Python, Java , MERN, and HTML/CSS</p>
                <p>I Started my coding journey at the age of 15 coding minecraft servers and discord bots for fun. I enjoyed it so much that I fully decided that programming was what I wanted to do my whole life. After high school I attended a local community college to obtain a asscociates in applied science- programming. After My first semester however I felt my learning was severly slowed due to the class schedules I was given and I decided to take a semester off to attend a codind bootcamp (Coding Dojo) where I was able to develop my skills and learn alot of new things while also being able to be challenged to solve harder problems. </p>
            </div>
            <div class="projecttab">
                <div class="projecth">
                    <h1>Projects</h1>
                </div>
                <div class="salonbox">
                    <div class="salontitle">
                        <h1>Bri's Salon</h1>
                        <a href="https://github.com/donovanle/project_salon">Source Code</a>
                    </div>
                    <div class="mainsalon">
                        <img src="salonimg.png" alt="" />
                        <p>Usage of Python, Flask, and bcrypt I created a personal website for my sister's salon for clients to reserve appointments for the salon. The salon owner is able to login and add/ view existing services/products and see/delete current set appointments.</p>
                    </div>
                </div>
                <div class="salonbox">
                    <div class="salontitle">
                        <h1>Giftio</h1>
                        <a href="https://github.com/donovanle/MERN-Deployment/tree/master/client/src">Source Code</a>
                    </div>
                    <div class="mainsalon">
                        <img src="giftioimg.png" alt="" />
                        <p>Using React and stockx API I created a web where users are able to search for trending items either by search bar or by category. Users are able to see products price, title, and description though the API call.</p>
                    </div>
                </div>
            </div>
            <div class="projecttab">
                <div class="projecth">
                    <h1>Work Expirence</h1>
                </div>
                <div class="salonbox">
                    <div class="salontitle">
                        <h1>Desiree's Salon(Family's Buisness)</h1>
                        <p>January 2020- December 2021</p>
                    </div>
                    <div class="mainsalon">
                        <img src="imgsalon.jpg" alt="" />
                        <div>
                            <p>Responsibilities:</p>
                            <ul>
                                <li>Book Appointments for customers</li>
                                <li>Book-kepping</li>
                                <li>Cleaned the shop and sanatized areas</li>
                                <li>Answered phone's and answered customer's questions</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="salonbox">
                    <div class="salontitle">
                        <h1>Goodwill</h1>
                        <p>January 2021- May 2021</p>
                    </div>
                    <div class="mainsalon">
                        <img src="goodwillimg.png" alt="" />
                        <div>
                            <p>Responsibilities:</p>
                            <ul>
                                <li>Restock Shelves</li>
                                <li>Help customers with any questions/ problems</li>
                                <li>Organize main area/shelves</li>
                                <li>Unload Trucks and price items</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="salonbox">
                    <div class="salontitle">
                        <h1>Premier Parking</h1>
                        <p>August 2021 - November 2021</p>
                    </div>
                    <div class="mainsalon">
                    <img src="parkimg.jpg" alt="" />
                        <div>
                            <p>Responsibilities:</p>
                            <ul>
                                <li>Lot Attendent</li>
                                <li>Guided patients to designated spots</li>
                                <li>Opened gates for workers that had required id cards</li>
                                <li>Tracked amount of cars entering and exiting the lot</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="educationrow">
                <h1>Education</h1>
                <div class="columns">
                    <div class="leftcolumn">
                        <h2>Coding Dojo</h2>
                        <p>December 2021- April 2022</p>
                        <img src="cdlogo.png" alt="" />
                        <p>16 Week Long bootcamp. Learned skills such as HTML/CSS, JavaScript, Python, Java, and MERN/React.</p>
                    </div>
                    <div class="rightcolumn">
                        <h2>Community College Of Aurora</h2>
                        <p>August 2021 - Present</p>
                        <img src="cca.jpg" alt="" />
                        <p>Pursuing a Associates in Applied Science of Programming. Completed first semster of freshman year with a 2.5 GPA. Took a semester off to attend Coding Dojo. Plan to return In August 2022 to continue my education.</p>
                    </div>
                </div>
            </div>
        </div>
        <footer>
            <div class="footerlogos">
                <img src="download.png" alt="" />
                <img src="emaillogo.png" alt="" />
            </div>
            <div>
                <ul>
                    <li>About</li>
                    <li>Contact Me</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>Terms Of Use</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div>
                <p>@ 2022 Donovan Lemmerman</p>
            </div>
        </footer>
    </div>
  )
}

export default MainPage