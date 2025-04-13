import { useEffect, useState } from 'react';
import './style.scss'
import {
  DrawerModel,
  GridView,
  Header,
  ListView,
  NavigationBar,
} from './components';
import {
  // ShoppingCart,
  // Heart,
  // List,
  // Grid,
  Plus,
  Minus,
  Trash2,
} from 'lucide-react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  const [viewModel, setviewModel] = useState('Grid');
  /*  Drawer State Start */
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [drawerDirection, setDrawerDirection] = useState('right');
  const [drawerContent, setDrawerContent] = useState(null);
  /*  Drawer State Close */
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  // Load stored data from localStorage on component mount
  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
    setWishlistItems(storedWishlist);
  }, []);

  const handleCartDrawer = () => {
    setDrawerDirection('right');
    setDrawerContent(cartItems); // Show cart data
    setIsDrawerOpen(true);
  };

  const handleWishlistDrawer = () => {
    setDrawerDirection('left');
    setDrawerContent(wishlistItems); // Show wishlist data
    setIsDrawerOpen(true);
  };

  const handleAddToCart = (item) => {
    // Check if the item already exists in the cart
    const isAlreadyInCart = cartItems.some(
      (cartItem) => cartItem.symbol === item.symbol
    );
    if (!isAlreadyInCart) {
      const updatedCart = [...cartItems, item];
      setCartItems(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      toast.success(`${item.symbol} added to cart!`, {
        position: 'top-right',
      });
    } else {
      console.log('Item already in cart');
      toast.warning(`${item.symbol} is already in the cart!`, {
        position: 'top-right',
      });
    }
  };

  const handleAddToWishlist = (item) => {
    const isAlreadyInWishlist = wishlistItems.some(
      (wishlistItem) => wishlistItem.symbol === item.symbol
    );
    if (!isAlreadyInWishlist) {
      const updatedWishlist = [...wishlistItems, item];
      setWishlistItems(updatedWishlist);
      localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
      toast.success(`${item.symbol} added to wishlist!`, {
        position: 'top-right',
      });
    } else {
      toast.warning(`${item.symbol} is already in the wishlist!`, {
        position: 'top-right',
      });
    }
  };

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  const removeItem = (item) => {
    if (drawerDirection === 'right') {
      // Removing from cart
      const updatedCart = cartItems.filter(
        (cartItem) => cartItem.symbol !== item.symbol
      );
      setCartItems(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));

      toast.info(`${item.symbol} removed from cart`, {
        position: 'top-right',
      });
    } else {
      // Removing from wishlist
      const updatedWishlist = wishlistItems.filter(
        (wishlistItem) => wishlistItem.symbol !== item.symbol
      );
      setWishlistItems(updatedWishlist);
      localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));

      toast.info(`${item.symbol} removed from wishlist`, {
        position: 'top-right',
      });
    }

    // If drawer is empty after removal, close it
    if (drawerContent.length === 1) {
      setIsDrawerOpen(false);
    }
  };


  return (
    <>
      <ToastContainer />
      <Header />
      <div className='container'>
        {viewModel === 'Grid' ? (
          <GridView
            handleAddToWishlist={() => handleAddToWishlist(item)}
            handleAddToCart={() => handleAddToCart(item)}
          />
        ) : (
          <ListView
            handleAddToWishlist={() => handleAddToWishlist(item)}
            handleAddToCart={() => handleAddToCart(item)}
          />
        )}
      </div>
      <NavigationBar
        handleWishlistDrawer={handleWishlistDrawer}
        handleCartDrawer={handleCartDrawer}
        setviewModel={setviewModel}
      />

      {/* Drawer Component */}
      <DrawerModel
        isOpen={isDrawerOpen}
        toggleDrawer={toggleDrawer}
        direction={drawerDirection}
      >
        {drawerContent && drawerContent.length > 0 ? (
          drawerContent.map((item, index) => (
            <div key={index} className='drawer-item'>
              <p>{item.symbol}</p>
              <button>
                <Plus className='W-4 h-4' />
              </button>
              <span>0</span>
              <button>
                <Minus className='W-4 h-4' />
              </button>
              <button onClick={() => removeItem(item)}>
                <Trash2 className='W-4 h-4' />
              </button>
            </div>
          ))
        ) : (
          <p className='empty-text'>No items found</p>
        )}
      </DrawerModel>
    </>
  );
}

export default App;
