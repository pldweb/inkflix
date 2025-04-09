import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Play, Plus, Info } from 'lucide-react';
import ReactPlayer from 'react-player';
import Footer from '../components/Footer';

const categories = [
  {
    title: "Trending Now",
    movies: [
      {
        id: 1,
        title: "Stranger Things",
        image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0",
        video: "https://www.youtube.com/watch?v=b9EkMc79ZSU",
        description: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments.",
        duration: "50m",
        match: "98% Match"
      },
      {
        id: 2,
        title: "The Crown",
        image: "https://images.unsplash.com/photo-1485846234645-a62644f84728",
        video: "https://www.youtube.com/watch?v=b9EkMc79ZSU",
        description: "The story of Queen Elizabeth II's reign of the United Kingdom.",
        duration: "58m",
        match: "95% Match"
      },
      {
        id: 3,
        title: "Bridgerton",
        image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1",
        video: "https://www.youtube.com/watch?v=b9EkMc79ZSU",
        description: "The eight close-knit siblings of the Bridgerton family seek love.",
        duration: "45m",
        match: "92% Match"
      }
    ]
  },
  {
    title: "Popular on Netflix",
    movies: [
      {
        id: 4,
        title: "Wednesday",
        image: "https://images.unsplash.com/photo-1509281373149-e957c6296406",
        video: "https://www.youtube.com/watch?v=b9EkMc79ZSU",
        description: "Wednesday Addams attends Nevermore Academy to master her psychic abilities.",
        duration: "45m",
        match: "96% Match"
      },
      {
        id: 5,
        title: "Dark",
        image: "https://images.unsplash.com/photo-1505775561242-727b7fba20f0",
        video: "https://www.youtube.com/watch?v=b9EkMc79ZSU",
        description: "A missing child sets four families on a frantic hunt for answers.",
        duration: "52m",
        match: "94% Match"
      },
      {
        id: 6,
        title: "Peaky Blinders",
        image: "https://images.unsplash.com/photo-1569003339405-ea396a5a8a90",
        video: "https://www.youtube.com/watch?v=b9EkMc79ZSU",
        description: "A gangster family epic set in Birmingham, England.",
        duration: "55m",
        match: "97% Match"
      }
    ]
  }
];

const menuItems = [
  { id: 'home', label: 'Home', video: 'https://www.youtube.com/watch?v=b9EkMc79ZSU' },
  { id: 'tvShows', label: 'TV Shows', video: 'https://www.youtube.com/watch?v=b9EkMc79ZSU' },
  { id: 'movies', label: 'Movies', video: 'https://www.youtube.com/watch?v=b9EkMc79ZSU' },
  { id: 'new', label: 'New & Popular', video: 'https://www.youtube.com/watch?v=b9EkMc79ZSU' },
  { id: 'myList', label: 'My List', video: 'https://www.youtube.com/watch?v=b9EkMc79ZSU' }
];

const Browse = () => {
  const [hoveredMovie, setHoveredMovie] = useState<number | null>(null);
  const [showPreview, setShowPreview] = useState(false);
  const [activeMenu, setActiveMenu] = useState('home');
  const [currentVideo, setCurrentVideo] = useState(menuItems[0].video);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (hoveredMovie !== null) {
      timer = setTimeout(() => {
        setShowPreview(true);
      }, 800);
    }
    return () => {
      clearTimeout(timer);
      setShowPreview(false);
    };
  }, [hoveredMovie]);

  const handleMenuClick = (menuId: string) => {
    setActiveMenu(menuId);
    const menuItem = menuItems.find(item => item.id === menuId);
    if (menuItem) {
      setCurrentVideo(menuItem.video);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-900">
      {/* Navigation Menu */}
      <div className="fixed top-[70px] left-0 w-full z-40 px-4 md:px-16 py-4">
        <div className="flex gap-7">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleMenuClick(item.id)}
              className={`text-sm md:text-base ${
                activeMenu === item.id ? 'text-white font-bold' : 'text-gray-300'
              } hover:text-white transition`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Hero Section with Video */}
      <div className="relative h-[85vh]">
        <div className="w-full h-full">
          <ReactPlayer
            url={currentVideo}
            width="100%"
            height="100%"
            playing
            loop
            muted
            config={{
              youtube: {
                playerVars: {
                  controls: 0,
                  modestbranding: 1,
                  showinfo: 0,
                  rel: 0
                }
              }
            }}
            style={{ position: 'absolute', top: 0, left: 0 }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-zinc-900" />
          <div className="absolute bottom-[20%] left-0 px-4 md:px-16">
            <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
              Stranger Things
            </h1>
            <div className="flex items-center gap-3">
              <Link to="/watch/1">
                <button className="bg-white text-black rounded px-6 py-2 font-semibold flex items-center gap-2 hover:bg-opacity-80 transition">
                  <Play className="w-5 h-5" />
                  Play
                </button>
              </Link>
              <button className="bg-gray-500 bg-opacity-50 text-white rounded px-6 py-2 font-semibold flex items-center gap-2 hover:bg-opacity-40 transition">
                <Info className="w-5 h-5" />
                More Info
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="space-y-12 pb-8 px-4 md:px-16">
        {categories.map((category, index) => (
          <div key={index} className="space-y-4">
            <h2 className="text-white text-xl md:text-2xl font-semibold">{category.title}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {category.movies.map((movie) => (
                <div
                  key={movie.id}
                  className="group relative aspect-video transition duration-200"
                  onMouseEnter={() => setHoveredMovie(movie.id)}
                  onMouseLeave={() => {
                    setHoveredMovie(null);
                    setShowPreview(false);
                  }}
                >
                  {hoveredMovie === movie.id && showPreview ? (
                    <div className="absolute z-50 scale-125 origin-center bg-zinc-800 rounded-md shadow-2xl">
                      <ReactPlayer
                        url={movie.video}
                        width="100%"
                        height="100%"
                        playing
                        muted
                        className="rounded-t-md"
                      />
                      <div className="p-4">
                        <div className="flex items-center gap-4 mb-2">
                          <Link to={`/watch/${movie.id}`}>
                            <button className="bg-white text-black rounded-full p-2 hover:bg-opacity-80 transition">
                              <Play className="w-4 h-4" />
                            </button>
                          </Link>
                          <button className="border-2 border-gray-400 text-gray-400 rounded-full p-2 hover:border-white hover:text-white transition">
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <span className="text-green-500">{movie.match}</span>
                          <span className="text-white">{movie.duration}</span>
                        </div>
                        <p className="text-white text-sm mt-2">{movie.description}</p>
                      </div>
                    </div>
                  ) : (
                    <img
                      src={movie.image}
                      alt={movie.title}
                      className="rounded-md w-full h-full object-cover cursor-pointer"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Browse;