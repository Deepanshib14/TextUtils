
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Aboutus from './components/Aboutus';
import React, {useState} from 'react'
import Alert from './components/Alert';
import{
  BrowserRouter as Router,
Routes,
Route,
}from 'react-router-dom';

function App() {
  const [mode,setMode]=useState('light');
  const [btn,setBtn]=useState('Enable Dark Mode');
const[alert,setAlert]=useState(null);

const showAlert=(message,type)=>{
setAlert({
  msg:message,
  type:type
})
setTimeout(()=>{
  setAlert(null)
},1500);
}



const toggleMode=()=>{
  if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor='#042743';
    setBtn('Enable light Mode');
    showAlert(":DarkMode has been enabled",'success')
  }
 
  else{
    setMode('light');
    document.body.style.backgroundColor='white';
    setBtn('Enable Dark Mode');
    showAlert(":LightMode has been enabled",'success')
  }
 
}

  return (
    <>
    <Router>
   <Navbar title='TextUtils' about='About' mode={mode} toggleMode={toggleMode} btn={btn}/>
   <Alert alert={alert}/>
   <div className="container my-3">
   <Routes>
   <Route exact path="/about" element={<Aboutus mode={mode}/>}/>
          <Route path='/' element={
           <TextForm showAlert={showAlert}heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode}/>}/>
  
   </Routes>
   </div>
  </Router>
    </>
  );
}

export default App;
