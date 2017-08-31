import React from 'react';

class SearchBar extends React.Component {
    constructor(){
        super();
        this.state = { 
            term: ''
        }
    }
    
    onInputChange(term) {
        this.setState({
            term: ''
        });
        this.props.onTermChange(term)
    }

    // When input changes, fire onChange event and pass the 'search value to our onInputChange method'
    render() {
        return (
            <div className='search'>
                <label className='hidden' htmlFor='search'>SEARCH </label>
                <input type='text' onBlur={event => 
                    this.onInputChange(event.target.value)} />
            </div>
        );
    }
}

export default SearchBar;
