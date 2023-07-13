const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white">
        <div className="container mx-auto py-8 px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 lg:w-1/4">
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="list-none">
                <li className="mb-2"><a href="#" className="text-gray-300 hover:text-white">Home</a></li>
                <li className="mb-2"><a href="#" className="text-gray-300 hover:text-white">About Us</a></li>
                <li className="mb-2"><a href="#" className="text-gray-300 hover:text-white">Services</a></li>
                <li className="mb-2"><a href="#" className="text-gray-300 hover:text-white">Notes</a></li>
                <li className="mb-2"><a href="#" className="text-gray-300 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div className="w-full md:w-1/3 lg:w-1/4">
              <h3 className="text-xl font-bold mb-4">About Our Company</h3>
              <p className="text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lacinia enim a ullamcorper tristique.</p>
            </div>
            <div className="w-full md:w-1/3 lg:w-1/4">
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <p className="text-gray-300">123 Main Street, City, Country</p>
              <p className="text-gray-300">Email: info@example.com</p>
              <p className="text-gray-300">Phone: +1 123-456-7890</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-700 py-4 text-center">
          <p className="text-gray-300">&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  