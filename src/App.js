import { Route , Switch } from 'react-router-dom';
import HomeScreen from './Components/HomeScreen/HomeScreen';
import NavBar from './Components/NavBar/navbar';
import NavList from './Components/Navlist/navlist';
import Footer from './Components/Footer/footer';
import LoginScreen from './Components/LoginScreen/loginscreen';
import RegistrationForm from './Components/registrationscreen/registration';
import NewsLetter from './Components/NewsLetter/newsletter';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <NavList/>
      <Switch>
      <Route path="/" exact component={HomeScreen} />
      <Route path="/login" component={LoginScreen} />
      <Route path="/register" component={RegistrationForm} />
      </Switch>
      <NewsLetter/>
      <Footer/>
    </div>
  );
}

export default App;
