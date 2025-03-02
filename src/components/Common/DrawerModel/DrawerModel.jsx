import Drawer from 'react-modern-drawer';
// import PropTypes from 'react';
import 'react-modern-drawer/dist/index.css';

export const DrawerModel = ({ isOpen, toggleDrawer, direction }) => {
  return (
    <Drawer open={isOpen} onClose={toggleDrawer} direction={direction}>
      <div>
        <p>DrawerModelOppen</p>
        <button onClick={toggleDrawer}>Close</button>
      </div>
    </Drawer>
  );
};

/* DrawerModel.propTypes = {
  isOpen: PropTypes.string.isRequired,
  toggleDrawer: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired,
}; */
