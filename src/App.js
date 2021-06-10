import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {

  const [savedFile, setFile] = useState({uploadedFile: ""})
  const [isFileUploaded, setIsFileUploaded] = useState(false)
  const fileSelectedHandler = event => {
    var uploadedFile = event.target.files[0];
    var reader = new FileReader();
    reader.onload = function(event) {
      setFile(prevState => ({...prevState, uploadedFile: event.target.result}))
    };
    reader.readAsDataURL(uploadedFile);
     
    
 
    
    
  }

  const fileDisplayHandler = event => {
    console.log(savedFile)
  }

  return (
    <div className="App">
      <input type="file" onChange={fileSelectedHandler}/>
      <button onClick={fileDisplayHandler}>Display</button>
      <img src={savedFile.uploadedFile}/>
    </div>
  );
}



export default App;
