import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const fetchQuote = async () => {
    const res = await fetch("https://api.api-ninjas.com/v1/quotes?category=learning", {
      headers: {
        'X-Api-Key': process.env.REACT_APP_API_KEY
      }
    });

    const data = await res.json();
    setQuote(data[0].quote);
    setAuthor(data[0].author);
  }

  useEffect(() => {
    fetchQuote();
  }, []);

  const tweetUrl = `https://twitter.com/intent/tweet?text="${quote}" - ${author}`;

  return (
    <div className="card" id="quote-box">
      <div className='card-body'>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <h5 className='card-title'>Random Quote Machine</h5>
          </li>
          <li class="list-group-item">
            <h6 className='card-text' id="text">"{quote}"</h6>
            <p id="author">By: {author}</p>
          </li>
          <li class="list-group-item">
            <button className='btn btn-primary btn-sm' onClick={fetchQuote} id="new-quote">New Quote</button>
            <a className='btn btn-info btn-sm' id="tweet-quote" href={tweetUrl} target="_blank">Tweet</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;