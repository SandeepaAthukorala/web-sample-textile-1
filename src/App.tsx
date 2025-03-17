import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { ShoppingCart, Search, User } from 'lucide-react';
import ProductDetails from './components/ProductDetails';

const featuredProducts = [
  {
    id: 1,
    name: 'Trendy Brown Coat',
    price: 75.0,
    originalPrice: 150.0,
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&q=80&w=500',
    category: 'Coats',
    rating: 4.8,
    reviews: 245,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    sku: 'GHFT0524SAAA',
    tags: ['Women', 'Coat', 'Fashion', 'Jacket']
  },
  {
    id: 2,
    name: 'Vintage Floral Dress',
    price: 85.5,
    originalPrice: 170.0,
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&q=80&w=500',
    category: 'Dresses'
  },
  {
    id: 3,
    name: 'Lace Detail Dress',
    price: 95.5,
    originalPrice: 190.0,
    image: 'https://images.unsplash.com/photo-1612336307429-8a898d10e223?auto=format&fit=crop&q=80&w=500',
    category: 'Dresses'
  },
  {
    id: 4,
    name: 'Evening Maxi Dress',
    price: 115.0,
    originalPrice: 230.0,
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=500',
    category: 'Dresses'
  }
];

const footGirls = [
  {
    id: 1,
    name: 'Lacing Cotton Shirt',
    price: 155.0,
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&q=80&w=500'
  },
  {
    id: 2,
    name: 'Pastel Sundress',
    price: 145.0,
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&q=80&w=500'
  },
  {
    id: 3,
    name: 'Simple Pullover',
    price: 135.0,
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&q=80&w=500'
  }
];

const heroImages = [
  'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&q=80&w=1950',
  'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&q=80&w=1950',
  'https://images.unsplash.com/photo-1612336307429-8a898d10e223?auto=format&fit=crop&q=80&w=1950'
];

function HomePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(intervalId); // Clear interval on unmount
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-gray-50">
        <img
          src={heroImages[currentImageIndex]}
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-48 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              Sow noll Lomn
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-200 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Distinctly style high-end goods, timeless femininity tailored silhouettes. Street style trend lookbook.
            </p>
            <div className="mt-5">
              <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-12">
          <div>
            <Link to="/spring" className="text-lg font-semibold hover:text-gray-900">Present Spring Goods</Link>
            <p className="text-gray-500">Trendy summer collection</p>
          </div>
          <div>
            <Link to="/crown" className="text-lg font-semibold hover:text-gray-900">Crown Basic Wearing Style</Link>
            <p className="text-gray-500">Unique street fashion</p>
          </div>
          <div>
            <Link to="/girlish" className="text-lg font-semibold hover:text-gray-900">Elegant Girllish Collection</Link>
            <p className="text-gray-500">Feminine and sophisticated</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id} className="group">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">{product.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">${product.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Your Foot Girls Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-center mb-12">Your Foot Girls</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {footGirls.map((product) => (
            <div key={product.id} className="group">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">{product.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">${product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function WomenPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-2xl font-bold text-center mb-8">Women's Collection</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {featuredProducts.filter(product => product.category === 'Dresses').map((product) => (
          <div key={product.id} className="group">
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover object-center group-hover:opacity-75"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-sm text-gray-500">${product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MenPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-2xl font-bold text-center mb-8">Men's Collection</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {featuredProducts.filter(product => product.category === 'Coats').map((product) => (
          <div key={product.id} className="group">
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover object-center group-hover:opacity-75"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-sm text-gray-500">${product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SpringPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-2xl font-bold text-center mb-8">Present Spring Goods</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {featuredProducts.map((product) => (
          <div key={product.id} className="group">
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover object-center group-hover:opacity-75"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-sm text-gray-500">${product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CrownPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-2xl font-bold text-center mb-8">Crown Basic Wearing Style</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {featuredProducts.map((product) => (
          <div key={product.id} className="group">
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover object-center group-hover:opacity-75"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-sm text-gray-500">${product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function GirlishPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-2xl font-bold text-center mb-8">Elegant Girllish Collection</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {featuredProducts.map((product) => (
          <div key={product.id} className="group">
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover object-center group-hover:opacity-75"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-sm text-gray-500">${product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [announcementVisible, setAnnouncementVisible] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(intervalId); // Clear interval on unmount
  }, []);

  const closeAnnouncement = () => {
    setAnnouncementVisible(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Announcement Bar */}
      {announcementVisible && (
        <div className="bg-brown-900 text-white text-sm py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <div>Support (406) 555-0120</div>
            <div>
              Sign up and GET 25% OFF for your first order.{' '}
              <a href="#" className="underline">Sign up now</a>
            </div>
            <div>
              <button onClick={closeAnnouncement}>×</button>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link to="/" className="text-2xl font-bold">Clothing.</Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
              <Link to="/women" className="text-gray-600 hover:text-gray-900">Women</Link>
              <Link to="/men" className="text-gray-600 hover:text-gray-900">Men</Link>
            </div>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/women" element={<WomenPage />} />
        <Route path="/men" element={<MenPage />} />
        <Route path="/product/:id" element={<ProductDetails products={featuredProducts} />} />
        <Route path="/spring" element={<SpringPage />} />
        <Route path="/crown" element={<CrownPage />} />
        <Route path="/girlish" element={<GirlishPage />} />
      </Routes>

      {/* Footer */}
      <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Shopping</h3>
              <p className="text-gray-400 text-sm">
                Easy lifestyle, phenomenal at best fit and flare dress.
                Street style trend lookbook.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">News Near</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>All Stories</li>
                <li>Latest Posts</li>
                <li>Style Stories</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Terms of Use</li>
                <li>Privacy Policy</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect Stay</h3>
              <div className="flex items-center space-x-4">
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100"
                  alt="Profile"
                />
                <button className="px-4 py-2 border border-white rounded-full text-sm">
                  Stay In Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
