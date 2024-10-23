import './App.css';
import { ImageUpload } from './components/ImageUpload';
import { IntroCard } from './components/IntroCard';
import { IntroText } from './components/IntroText';
import { Footer } from './layout/Footer';
import { Header } from './layout/Header';

function App() {
  return <>
    <Header/>
    <IntroText/>
    <IntroCard/>
    
    <h1>app.js임!</h1>
    <ImageUpload/>

    <Footer/>

  </>
}

export default App;
