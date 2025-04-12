import { Heart, ShoppingCart } from 'lucide-react';

import './GridView.scss';
export function GridView() {
  return (
    <div className='card'>
      <div className='card-icons'>
        <Heart className='icon heart' />
      </div>
      <img src='https://via.placeholder.com/300x200' alt='Product' />
      <div className='card-content'>
        <div className='card-title'>Amazing Product</div>
        <div className='card-description'>
          This is a beautiful product with great features.
        </div>
        <div className='card-price'>$49.99</div>
        <div className='card-button'>
          <ShoppingCart className='icon cart' />
        </div>
      </div>
    </div>
  );
}
