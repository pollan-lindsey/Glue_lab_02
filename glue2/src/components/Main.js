import React, { Component } from 'react'
import data from './data.json'
import Person from './Person'

export default class Main extends Component {
    render(){
        return (
            <>
            <h1>Your friend list:</h1>
            {data.people.map(person => {
                return (
                 <Person firstName={person.first_name} lastName={person.last_name} email={person.email} city={person.City} iPAddress={person.ip_address} key={person.id}/>
                )
            })
            }
            </>
        )
    }
}