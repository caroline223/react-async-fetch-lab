// create your App component here

import React from 'react';

class App extends React.Component {

    constructor(){
        super()
        this.state ={
            peopleInSpace : []
        }
    }

    render(){
        return(
            <div>{this.state.peopleInSpace.map((person, id) => <h2 key={id}>{person.name}</h2>)}</div>
        )
    }


    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
        .then(response => response.json())
        .then(data => {
            this.setState({
                peopleInSpace: data.people
            })
        })
    }

}

export default App;