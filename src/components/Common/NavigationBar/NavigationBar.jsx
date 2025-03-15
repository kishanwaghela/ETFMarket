import { ShoppingCart, Heart, List, Grid } from 'lucide-react';

export function NavigationBar({ handleCartDrawer, handleWishlistDrawer,setviewModel }) {
  return (
    <>
      <div className='bottom-navigation-bar'>
        <div className='bottom-navigation-bar-item'>
          <button onClick={() => setviewModel('Grid')}>
            <Grid className='w-4 h-4' stroke='white' />
          </button>
          <button onClick={() => setviewModel('List')}>
            <List className='w-4 h-4' stroke='white' />
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
