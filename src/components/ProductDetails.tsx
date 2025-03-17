import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Heart, ChevronLeft, ChevronRight } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category?: string;
  rating?: number;
  reviews?: number;
  description?: string;
  sku?: string;
  tags?: string[];
}

interface ProductDetailsProps {
  products: Product[];
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ products }) => {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState('XXL');
  const [quantity, setQuantity] = useState(4);
  const [selectedColor, setSelectedColor] = useState('brown');

  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  const sizes = ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'];
  const colors = [
    { name: 'brown', class: 'bg-brown-500' },
    { name: 'green', class: 'bg-green-500' },
    { name: 'red', class: 'bg-red-500' },
    { name: 'blue', class: 'bg-blue-500' },
  ];

  const relatedProducts = [
    {
      id: 'r1',
      name: 'Brown Winter Coat',
      price: 60.00,
      originalPrice: 100.00,
      rating: 4.8,
      discount: '40% off',
      image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&q=80&w=500',
      category: 'Coats'
    },
    {
      id: 'r2',
      name: 'Classy Light Coat',
      price: 165.00,
      originalPrice: 220.00,
      rating: 4.9,
      discount: '25% off',
      image: 'https://images.unsplash.com/photo-1525450824786-227cbef70703?auto=format&fit=crop&q=80&w=500',
      category: 'Coats'
    },
    {
      id: 'r3',
      name: 'Modern White Suit',
      price: 90.00,
      originalPrice: 100.00,
      rating: 4.9,
      discount: '10% off',
      image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&q=80&w=500',
      category: 'Suit'
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center space-x-2 text-sm">
          <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
          <span>/</span>
          <Link to="/shop" className="text-gray-600 hover:text-gray-900">Shop</Link>
          <span>/</span>
          <Link to="/shop/coats" className="text-gray-600 hover:text-gray-900">Coats</Link>
          <span>/</span>
          <span className="text-gray-900">Product Details</span>
        </div>
      </div>

      {/* Product Details */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full rounded-lg"
              />
              <button className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  src={product.image}
                  alt={`${product.name} view ${i}`}
                  className="w-full rounded-lg cursor-pointer hover:opacity-75"
                />
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <p className="text-gray-500">{product.category}</p>
              <h1 className="text-3xl font-bold">{product.name}</h1>
              <div className="flex items-center space-x-2 mt-2">
                <div className="flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star}>★</span>
                  ))}
                </div>
                <span className="text-gray-600">
                  {product.rating} ({product.reviews} Review)
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-2xl font-bold">${product.price}</span>
              {product.originalPrice && (
                <span className="text-gray-500 line-through">${product.originalPrice}</span>
              )}
            </div>

            <p className="text-gray-600">{product.description}</p>

            <div>
              <p className="font-medium mb-2">Color: <span className="text-gray-600">{selectedColor}</span></p>
              <div className="flex space-x-2">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    className={`w-8 h-8 rounded-full ${color.class} ${
                      selectedColor === color.name ? 'ring-2 ring-offset-2 ring-gray-800' : ''
                    }`}
                    onClick={() => setSelectedColor(color.name)}
                  />
                ))}
              </div>
            </div>

            <div>
              <p className="font-medium mb-2">Size: <span className="text-gray-600">{selectedSize}</span></p>
              <div className="flex flex-wrap gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    className={`px-4 py-2 border rounded-md ${
                      selectedSize === size
                        ? 'bg-gray-800 text-white'
                        : 'border-gray-300 text-gray-700 hover:border-gray-800'
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-800 mt-2 inline-block">
                View Size Guide
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center border rounded-md">
                <button
                  className="px-4 py-2 text-gray-600 hover:text-gray-800"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  −
                </button>
                <span className="px-4 py-2 border-x">{quantity}</span>
                <button
                  className="px-4 py-2 text-gray-600 hover:text-gray-800"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
              <button className="flex-1 bg-gray-800 text-white py-2 px-6 rounded-md hover:bg-gray-700">
                Add To Cart
              </button>
              <button className="bg-yellow-500 text-white py-2 px-6 rounded-md hover:bg-yellow-600">
                Buy Now
              </button>
              <button className="p-2 border rounded-full hover:bg-gray-100">
                <Heart className="w-6 h-6" />
              </button>
            </div>

            <div className="border-t pt-6">
              <p className="text-sm text-gray-600">
                SKU: <span className="text-gray-800">{product.sku}</span>
              </p>
              <p className="text-sm text-gray-600">
                Tags: {product.tags?.join(', ')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Product Description Tabs */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="border-b">
          <div className="flex space-x-8">
            <button className="border-b-2 border-gray-800 text-gray-800 pb-4 font-medium">
              Description
            </button>
            <button className="text-gray-600 pb-4 font-medium">
              Additional Information
            </button>
            <button className="text-gray-600 pb-4 font-medium">
              Review
            </button>
          </div>
        </div>
        <div className="py-8">
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="text-gray-600 mb-4">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          </p>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-center space-x-2">
              <span>•</span>
              <span>100% Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
            </li>
            <li className="flex items-center space-x-2">
              <span>•</span>
              <span>Ut at nunc vel nisi gravida dictum.</span>
            </li>
            <li className="flex items-center space-x-2">
              <span>•</span>
              <span>Cras laoreet lacus in dui posuere fringilla.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Related Products */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-center mb-8">Explore Related Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {relatedProducts.map((product) => (
            <div key={product.id} className="group relative">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full rounded-lg"
                />
                {product.discount && (
                  <span className="absolute top-4 left-4 bg-green-500 text-white px-2 py-1 text-sm rounded">
                    {product.discount}
                  </span>
                )}
              </div>
              <div className="mt-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">{product.category}</span>
                  <span className="text-yellow-400">★ {product.rating}</span>
                </div>
                <h3 className="text-gray-800 font-medium">{product.name}</h3>
                <div className="flex items-center space-x-2">
                  <span className="font-bold">${product.price}</span>
                  <span className="text-gray-500 line-through">${product.originalPrice}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
