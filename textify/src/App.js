import './App.css';
import { ImageUpload } from './components/ImageUpload';
import { IntroText } from './components/IntroText';
import { Footer } from './layout/Footer';
import { Header } from './layout/Header';

function App() {
  return <>
    <Header/>
    <IntroText/>
    <ImageUpload/>
    <Footer/>
  </>
}

export default App;
