import { useState } from "react";

function Navigation({ user }) {
  const [checked, setChecked] = useState(false);

  const handleChecked = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <header className="site-header">
      <input type="checkbox" id="nav-toggle" onChange={handleChecked} />
      <label htmlFor="nav-toggle">
        {checked ? (
          <svg xmlns="http://www.w3.org/2000/svg" height="1.4em" viewBox="0 0 384 512">
            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" height="1.4em" viewBox="0 0 448 512">
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>
        )}
      </label>

      <div className="navigation">
        <div className="branding">
          <a href="/">
            <div className="media">
              <img src="/images/logo.png" alt="Flower logo"></img>
            </div>
            <div className="title">
              <p>Flower Paradise</p>
              <p className="sub-title">Discover the Blossoming World of Gift-Giving!</p>
            </div>
          </a>
        </div>

        <nav className="main-nav">
          <ul role="navigation">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Payment</a>
            </li>
          </ul>
        </nav>

        <ul className="more-links">
          {!user ? (
            <>
              <li>
                <a href="/auth/login">
                  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                    <path d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
                  </svg>
                  Login
                </a>
              </li>
              <li>
                <a href="/auth/register">
                  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512">
                    <path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
                  </svg>
                  Register
                </a>
              </li>
            </>
          ) : (
            <li>Signed in as: {user.username}</li>
          )}

          <li>
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
              </svg>
              Shopping Cart
            </a>
          </li>
        </ul>
      </div>

      <ul className="catalog-links">
        <li>
          <a href="#">Popular</a>

          <ul>
            <li>
              <a href="#">Link</a>
            </li>
            <li>
              <a href="#">Link2</a>
            </li>
            <li>
              <a href="#">Link3</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">Occassion</a>

          <ul>
            <li>
              <a href="#">Link</a>
            </li>
            <li>
              <a href="#">Link2</a>
            </li>
            <li>
              <a href="#">Link3</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">Type</a>

          <ul>
            <li>
              <a href="#">Link</a>
            </li>
            <li>
              <a href="#">Link2</a>
            </li>
            <li>
              <a href="#">Link3</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">Price</a>

          <ul>
            <li>
              <a href="#">Link</a>
            </li>
            <li>
              <a href="#">Link2</a>
            </li>
            <li>
              <a href="#">Link3</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">Gifts</a>

          <ul>
            <li>
              <a href="#">Link</a>
            </li>
            <li>
              <a href="#">Link2</a>
            </li>
            <li>
              <a href="#">Link3</a>
            </li>
          </ul>
        </li>
      </ul>
    </header>
  );
}

export default Navigation;
