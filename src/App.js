import logo from './logo.svg';
import './App.css';

function Header(props){
  return <header>
    <h1>
      <a>{props.title}</a>
    </h1>
  </header>

}

function App() {
  const topics=[
    {},
    {},
    {}
  ]

  return (
    <div>
      <Header title="WEB">
      </Header>
      <nav>
        <ol>
          <li><a href="/read/1">html</a></li>
          <li><a href="/read/2">css</a></li>
          <li><a href="/read/3">js</a></li>
        </ol>
      </nav>
      <article>
        <h2>Welcome</h2>
        Hello, WEB
      </article>
    </div>
  );
}

export default App;
