import React from 'react';
import ReactDOM from 'react-dom';
import GifList from './components/GifList';
import SearchBar from './components/SearchBar';


class App extends React.Component {
    constructor() {
        super ();
        this.state = {
            gifs: []
        };
       this.handleTermChange = this.handleTermChange.bind(this);
    }
    
    handleTermChange(term){
        // replace spaces btw search terms to +
        const url = `http://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g,'+')}
        &api_key=cf7d6d3571ff4382a43a182f0d243e24&limit=9`
        //  request to giphy API
        fetch(url)
        .then(function(response) {
            return response.json();
        })
        .catch((error) => {
           console.error(error);
         })
        .then((res) =>{
          // console.log(res);
            this.setState({ 
              gifs: res.data
            })
        });
    }

  
    render() {
        return (
            <div>
                <header>
                  <h1>Surprise Giphy *_*</h1>
                </header>
                <SearchBar onTermChange={term => this.handleTermChange(term)} />
                <div className="buttonContainer">
                    <button onClick={(e) => this.handleSubmit(e)} type="submit"><span>GIF ME</span></button>
                </div>
                <GifList gifs={this.state.gifs} />

            </div>
        )
    }
};


ReactDOM.render(<App />, document.getElementById('app'));