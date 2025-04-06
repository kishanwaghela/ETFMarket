export function Header() {
  return (
    <>
      <header className="header-container d-between">
        <div>
          <img src="" alt="brand-log" />
        </div>
        <nav>
          <ul className='header-nav'> 
            <li className='header-nav-item'>
              <a href='/'>Home</a>
            </li>
            <li className='header-nav-item'>
              <a href='/about'>About</a>
            </li>
            <li className='header-nav-item'>
              <a href='/contact'>Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
