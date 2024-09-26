import React, { useState, useEffect } from 'react';
import Editor from './Editor';
import './Hero.css';

function Hero() {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState(null);
    const [showResults, setShowResults] = useState(false);

    // Function to fetch search results from DuckDuckGo API
    const fetchSearchResults = (query) => {
        const url = `https://api.duckduckgo.com/?q=${encodeURIComponent(query)}&format=json&pretty=1&no_html=1&skip_disambig=1`;

        fetch(url)
            .then(response => response.json())
            .then(data => displayResults(data))
            .catch(error => console.error('Error fetching search results:', error));
    };

    // Function to display the fetched search results
    const displayResults = (data) => {
        if (!data.AbstractText) {
            setSearchResults(<p>No results found.</p>);
            setShowResults(true);
            return;
        }

        const resultItem = (
            <div className="result-item mb-3 p-3 border rounded">
                <h5>{data.Heading}</h5>
                <p>{data.AbstractText}</p>

                {data.RelatedTopics && data.RelatedTopics.length > 0 && (
                    <>
                        <h5>Related Topics:</h5>
                        <ul>
                            {data.RelatedTopics.map((topic, index) =>
                                topic.Text ? <li key={index}>{topic.Text}</li> : null
                            )}
                        </ul>
                    </>
                )}
            </div>
        );

        setSearchResults(resultItem);
        setShowResults(true); // Trigger the animation when results are set
    };

    // Handle search form submit
    const handleSearch = (event) => {
        event.preventDefault();
        if (searchQuery.trim() !== '') {
            fetchSearchResults(searchQuery);
        }
    };

    // Hide the results if searchQuery is empty or upon new search
    useEffect(() => {
        if (searchQuery.trim() === '') {
            setShowResults(false);
            setSearchResults(null); // Clear previous results
        }
    }, [searchQuery]);

    return (
        <>
            <h1 className='mt-5 text-center'>Wikipedia</h1>
            <h3 className='mt-2 text-center'>The Free Encyclopedia</h3>
              <div className="hero-container">
            <img 
                src="/project.jfif" 
                alt="wikipedia globe image" 
                id="mainimg" 
                className='mb-5 mt-5' 
                style={{marginLeft:"500px",height:"200px",width:"200px"}}
            />
            <Editor />
        </div>
            
            <div className="search">
    <nav className="navbar navbar-expand-lg">
        <form className="d-flex" role="search" onSubmit={handleSearch}>
            <div className="input-button-container">
                <input
                    className="form-control me-2"
                    id="searchInput"
                    type="search"
                    placeholder="Search on Wiki"
                    aria-label="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div id="google_translate_element"></div>
                <button type="submit" className="btn btn-primary searchBtn">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </div>
        </form>
    </nav>
    <div id="searchResults" className={`mt-4 mb-5 ${showResults ? 'show' : ''}`}>
        {searchResults}
    </div>
</div>

        </>
    );
}

export default Hero;
