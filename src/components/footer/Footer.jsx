const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Services</li>
                        <li>Notes</li>
                        <li>Contact</li>F
                    </ul>
                </div>
                <div className="section">
                    <h3>About Our Company</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lacinia enim a ullamcorper tristique.</p>
                </div>
                <div className="section">
                    <h3>Contact Information</h3>
                    <p>123 Main Street, City, Country</p>
                    <p>Email: info@example.com</p>
                    <p>Phone: +1 123-456-7890</p>
                </div>
            </div>
            <div className="bottom-bar">
                <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;