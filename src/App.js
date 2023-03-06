import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AddQuote from './components/AddQuote';
import DisplayQuotes from './components/DisplayQuotes';
import { useEffect, useState } from 'react';
import { Routes, Route} from "react-router-dom"
import Comments from './components/Comments';
import AddComment from './components/AddComment';

function App() {

  const [quotes, setQuote] = useState([])
  const [comments, setComment] = useState([])

  useEffect(()=>{
    fetch("http://127.0.0.1:9292/quotes")
    .then(res=>res.json())
    .then(data=>setQuote(data))
  },[])

  useEffect(()=>{
    fetch("http://127.0.0.1:9292/comments")
    .then(res=>res.json())
    .then(data=>setComment(data))
  },[])

  return (
    <div className="App">
        <Navbar/>
        <Routes>
          <Route path='/displayQuotes' element={<DisplayQuotes quotes = {quotes} comments = {comments}/>}/>
          <Route path='/addQuotes' element= {<AddQuote/>}/>
          <Route path= '/home' exact element = {<Home/>}/>
          <Route path= '/displayQuotes/comments' element= {<Comments comments={comments}/>}/>
          <Route path= '/displayComments/comments/addComments' element= {<AddComment/>}/>
        </Routes>
        
    </div>
  );
}

export default App;
