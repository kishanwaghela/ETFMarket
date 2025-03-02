import { ShoppingCart, Heart, List, Grid } from 'lucide-react';

export function NavigationBar({ handleCartDrawer, handleWishlistDrawer }) {
  return (
    <>
      <div className='bottom-navigation-bar'>
        <div className='bottom-navigation-bar-item'>
          <button>
            <List className='w-4 h-4' stroke='white' />
          </button>
          <button>
            <Grid className='w-4 h-4' stroke='white' />
          </button>
          <button onClick={handleCartDrawer}>
            <ShoppingCart className='w-4 h-4' stroke='white' />
          </button>
          <button onClick={handleWishlistDrawer}>
            <Heart className='w-4 h-4' stroke='white' />
          </button>
        </div>
      </div>
    </>
  );
}
