import Navbar from './components/navbar/Navbar';
import Quiz from './components/quiz/Quiz';

function App() {
  return (
    <>
      <main>
        <div className="container">
          <div className="content">
            <Navbar />
            <Quiz />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
