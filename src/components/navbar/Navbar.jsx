import logo from './logo.svg';
import octocat from './octocat.png';

const Navbar = () => (
  <nav className="navbar" role="navigation">
    <div className="navbar-brand">
      <a
        className="navbar-item"
        href="https://coders.cat"
        title="Coders.cat"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img src={logo} alt="Logo coders.cat" width="163" height="69" />
      </a>
      <div className="navbar-end navbar-end-all-media">
        <a
          className="navbar-item"
          href="https://github.com/coders-cat/criticquiz"
          title="Fork me on GitHub"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={octocat} alt="Octocat GitHub logo" />
        </a>
      </div>
    </div>
  </nav>
);

export default Navbar;
