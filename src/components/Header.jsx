import { useState, useEffect } from "react";


const Header = () => {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSearch = () => {
    setIsSearchExpanded(!isSearchExpanded);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsSearchExpanded(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(`Searching for: ${searchQuery}`);
    // Add search functionality here
  };

 

  if (!mounted) return null;

  return (
    <header className="header fixed top-2 w-full z-50 transition-all bg-white dark:bg-zinc-800 rounded-2xl shadow-sm">
      
      
      <div className="flex items-center justify-between w-full px-4 py-3 h-16">
        {/* Logoo */}
        <div className="flex-shrink-0 h-full flex items-center bg-emerald-700/90 dark:bg-transparent rounded-xl p-2 px-0">
          <img 
            src="../../images/Logo.png" 
            className="h-full w-auto max-h-12 object-contain" 
            alt="Company Logo"
            style={{
              maxWidth: '150px',
              minWidth: '100px'
            }}
          />
        </div>

        {/* Search Bar - only appears when expanded */}
        {isSearchExpanded && (
          <div className="flex-1 mx-4">
            <form onSubmit={handleSearch} className="w-full relative">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full p-2 pl-10 pr-4 rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-900 dark:text-gray-100 focus:outline-none"
                autoFocus
              />
              <button 
                type="submit"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </button>
            </form>
          </div>
        )}

        {/* Right Side Icons */}
        <div className="flex items-center space-x-4">
          {/* Home Icon - visible large screens */}
          <a 
            href="#" 
            className="hidden md:block p-2 text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary-light transition-colors"
            aria-label="Home"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
          </a>

          {/* Search Toggle Button */}
          <button 
            onClick={toggleSearch}
            className="p-2 focus:outline-none cursor-pointer"
            aria-label={isSearchExpanded ? "Close search" : "Search"}
          >
            {isSearchExpanded ? (
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="text-gray-800 dark:text-gray-200"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="text-gray-800 dark:text-gray-200"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            )}
          </button>

          

          {/* Hamburger Menu */}
          <div className="relative pb-1">
            <button 
              onClick={toggleMenu}
              className="p-2 focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              <div className="w-5 h-5 flex flex-col justify-center items-center gap-1">
                <span className={`h-0.5 w-full bg-gray-800 dark:bg-gray-200 transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`h-0.5 w-full bg-gray-800 dark:bg-gray-200 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`h-0.5 w-full bg-gray-800 dark:bg-gray-200 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
              </div>
            </button>

            {/* Dropdown Menu - appears under hamburger button */}
            {isMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-zinc-800 rounded-md shadow-lg py-1 z-50">
                <a 
                  href="#" 
                  className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-zinc-700 transition-colors"
                >
                  Home
                </a>
                <a 
                  href="#" 
                  className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-zinc-700 transition-colors"
                >
                  About
                </a>
                <a 
                  href="#" 
                  className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-zinc-700 transition-colors"
                >
                  Contact
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;