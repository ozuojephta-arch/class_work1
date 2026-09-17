import React from 'react'

const App = () => {
  return (
    <div>
<nav className="Parent">
    <div className="logo">My site</div>
           <ul className="child">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Service</a></li>
            <li><a href="#">Contact</a></li>
           </ul>
</nav>
     {/* <!--HERO SECTION--> */}
     <section className="hero">
        <div className="overlay">
            <div className="hero-content">
                <h1>Welcome to my website</h1> 
                <p>We are glad to have you here. Explore our content and enjoy your stay!</p>
                <button className="btn">Get Started</button> 
            </div>
        </div>
    {/* <!-- TESTIMONIAL --> */}
     <section id="testimonials">
        <h4>TESTIMONIALS</h4>
        <h2>What Our Students Say</h2>
        <div className="testimonial-container">
            <div className="card">
                <img src="../../Downloads/BREASTFEEDING MOTHER.jpg" alt="Breastfeading Mother"/>
                <h3>Oluchi Iwueze</h3>
                <p>"The practical experience I gained here was invaluable. It prepared me for real-world challenges and boosted my confidence."</p>
            </div>
            <div className="card">
                <img src="../../Downloads/BREASTFEEDING MOTHER.jpg" alt="Breastfeading Mother"/>
                <h3>Ozuo Jeptha</h3>
                <p>"The practical experience I gained here was invaluable. It prepared me for real-world challenges and boosted my confidence."</p>
            </div>
            <div className="card">
                <img src="../../Downloads/BREASTFEEDING MOTHER.jpg" alt="Breastfeading Mother"/>
                <h3>Madu Ebuka</h3>
                <p>"The practical experience I gained here was invaluable. It prepared me for real-world challenges and boosted my confidence."</p>
            </div>
        </div>
</section>
  {/* <!-- ABOUT SECTION --> */}
     <section className="about">
    <div  className="about-text">
        <h3>About Us</h3>
        <h2>Building Skill</h2>, <br/>Building Future<h2/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <ul>
            <li>&#10004: Practical Experience</li>
            <li>&#10004: Professional Development</li>
            <li>&#10004: Career Growth</li>
        </ul>
        <a href="creation.html" className="btn">Learn More</a>
        </div>

   <div className="about-image">
        <img src="../../Downloads/reading1.jpg" alt="About Image"/>
</div>
        </section>
    {/* <!--CALL TO ACTION--> */}
    <section className="call-to-action">
        <div className="call-to-action-content">
        <h2>Ready to Start Your Journey?</h2>
        <p>Join us today and take the first step towards a brighter future.</p>
        <a href="creation.html" className="btn">Get Started</a>
        </div>
    </section>

    {/* <!--FOOTER--> */}
    <footer className="footer">
        <div className="footer-container">
            {/* <!-- ABOUT --> */}
            <div className="footer-box">
                <h2>Our Digital Skill Academy</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            {/* <!-- QUICK LINKS --> */}
            <div className="footer-box">
                <h3>Quick Links</h3>
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Courses</a>
                <a href="">Contact</a>
            </div>
            {/* <!-- CONTACT --> */}
            <div className="footer-box">
                <h3>Contact Us</h3>
                <p>Email: info@digitalskillacademy.com</p>
                <p>Phone: +1 (123) 456-7890</p>
                <p>Address: 123 Main Street, City, State 12345</p>
            </div>
        </div>
        {/* <!-- COPYRIGHT --> */}
        <div className="copyright">
            <p>&copy; 2024 Practical Experience. All rights reserved.</p>
        </div>
        </footer>
    </section>
    </div>
  );
};

export default App
