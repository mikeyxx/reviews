import Reviews from './reviews'

function App() {
  return (
    <main>
      <section className='container'>
        <div className='title'>
          <h1>our reviews</h1>
          <div className="underline"></div>
        </div>
        <Reviews />
      </section>
    </main>
  );
}

export default App;