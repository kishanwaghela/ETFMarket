import './Header.scss';
export function Header() {
  return (
    <>
      <header className="header-container d-between">
        <div className="header-log">
          <img src="#" alt="brand-log" />
        </div>
        <nav className='header-nav'>
          <ul className='d-flex gap-8'>
            <li className='header-nav-item'>Home</li>
            <li className='header-nav-item'>About
            </li>
            <li className='header-nav-item'>Contact</li>
          </ul>
        </nav>
      </header>
    </>
  );
}
