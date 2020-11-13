import React, { useState, useEffect } from 'react';
import './App.scss';
import Search from './components/Search/Search';
import ApiItem from './components/Apiıtem/index'

function App() {

  const [search, setSearch] = useState('');
  const [apis, setApis] = useState([]);

  const bookmarks = apis.filter(api => api.bookmark === true)

  useEffect(() => {
    fetch('https://5faeded363e40a0016d8a2cc.mockapi.io/v1/apis')
      .then(res => res.json())
      .then(data => {
        setApis(data)
      })
  }, [])

  const toggleBookmark = (id) => {

    setApis(
      apis.map(api => {
        if (api.id === id) {
          api.bookmark = !api.bookmark
        }
        return api;
      }))
  }


  return (
    <div className="App">
      <h3>A collective list of free APIs for use in <br />
          software and web development.</h3>

      <Search search={search} setSearch={setSearch} />
      <div className="container">
        <h4>Features APIs of this week</h4>
        <div className="api-list">
          {apis.filter(api => api.name.toLowerCase().includes(search.toLowerCase())).map((api) => (
            <ApiItem toggleBookmark={toggleBookmark} key={api.id} api={api} />
          ))}
        </div>
      </div>
      <div className="container">
        <h4>Your Bookmarks</h4>
        <div className="api-list">
          {bookmarks.map((api) => (
            <ApiItem toggleBookmark={toggleBookmark} key={api.id} api={api} />
          ))}
        </div>
      </div>
      {bookmarks.length === 0 && (
        <h4>There is no bookmark on your bookmarks </h4>
      )}
    </div>
  );
}

export default App;
