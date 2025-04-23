
const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Who We Are</h2>
            <p className="text-gray-300">
              Fafafest is an independent music festival celebrating artistic expression, 
              creativity, and community. Founded in 2023, we bring together diverse artists 
              and passionate music lovers in a unique immersive experience.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-6">Contact</h2>
            <ul className="space-y-2 text-gray-300">
              <li>Email: info@fafafest.com</li>
              <li>Phone: +1 (123) 456-7890</li>
              <li>Address: Fafafest Grounds, Music Avenue, Melodicity</li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-6">Connect</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Instagram</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Twitter</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Facebook</a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Fafafest. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
