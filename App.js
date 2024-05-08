import './App.css';
import './mode';
import { GoogleLogin } from '@react-oauth/google';
function App() {
  return (
    <div className="App">
      <div className='google_logo'>
      <img className='CLGL' src='download.png' alt='logo' />
      </div>
      <h1 className = 'GL'>Gooogle Login</h1>
      <p>Just for Testing</p>
      <GoogleLogin
  onSuccess={credentialResponse => {
    console.log(credentialResponse);
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>;
    </div>
    
  );
  
}

export default App;
