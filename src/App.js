import Navbar from 'components/navbar/Navbar';
import Quiz from 'components/quiz/Quiz';

function App() {
  return (
    <div className="container is-fluid">
      <div className="content">
        <Navbar />
        <main>
          <Quiz />
        </main>
      </div>
    </div>
  );
}

export default App;
