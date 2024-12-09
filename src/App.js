import './App.css';
import Header from './components/Header/Header';
import About from './components/Ui/About';
import Blog from './components/Ui/Blog';
import Counter from './components/Ui/Counter';
import Footer from './components/Ui/Footer';
import Hero from './components/Ui/Hero';
import Newsletter from './components/Ui/Newsletter';
import Services from './components/Ui/Services';
import Testimonial from './components/Ui/Testimonial';

function App() {

  // const [theme,setTheme] = useState('')

  // const toggleTheme = () =>{
  //      theme === "" ? setTheme('light-theme') : setTheme('')
  // }
  // useEffect(()=>{
  //    document.body.className = theme
  // },[theme])
  return (
    <div className="App">
      <Header />
      <Hero />
      <Counter/>
      <Services/>
      <About/>
      <Blog/>
      <Testimonial/>
      <Newsletter/>
      <Footer/>
    </div>
  );
}

export default App;
