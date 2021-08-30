import './App.css';

function App() {
  return (
    <div className="App">
      <header class="main-header">
        <div class="header-container">
          <h1 class="mh-logo">
            <img src="http://flexbox.ninja/assets/images/logo.svg" width="170" height="95" alt="Flexbox.ninja"></img>
          </h1>
          <nav class="main-nav">
            <ul class="main-nav-list">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Our Work</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="section">About Us</div>
      <div className="section">Our Work</div>
      <div className="section">Contact Us</div>
    </div>
  );
}

export default App;

