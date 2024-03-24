import ButtonGradient from './assets/svg/ButtonGradient';
import Header from './components/Header';
import Hero from './components/Hero';
// import Roadmap from './components/Roadmap';
import Footer from './components/Footer';
import Benefits from './components/Benefits';

const App = () => {
  return (
    <>
      <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
        <Header />
        <Hero />
        <Benefits />
        {/* <Roadmap /> */}
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
}

export default App
