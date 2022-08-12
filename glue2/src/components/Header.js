import React, { Component } from 'react' 

export default class Header extends Component {
    render(){
        return (
            <>
            <h2>Friends and Friends' Friends:</h2>
            <nav>
            <a href='http://thispointssomewhere.com'>Home</a>
            <a href='http://thispointssomewhere.com'>Trending</a>
            <a href='http://thispointssomewhere.com'>Messages</a>
            </nav>
            </>
            //put a cute little logo next to those fake links later
        )
    }
}