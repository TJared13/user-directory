import React, {Component} from 'react';
import Nav from '../Components/Nav';
import UserCards from './UserCards';
import data from '../data';

export default class UserDirectory extends Component {
    constructor(){
        super();
        this.state = {
            data,
            index: 0,
        }

        this.forward = this.forward.bind(this)
        this.back = this.back.bind(this)
        // this.deletePerson = this.deletePerson.bind(this)
    };

    forward(){
        if (this.state.index < this.state.data.length -1) {
            this.setState({index: this.state.index + 1})
        }
    };
    
    back(){
        if (this.state.index > 0){
            this.setState({index: this.state.index -1})
        }
    };

    // deletePerson = () => {
    //     const deleted = [...this.state.data]
    //     data.splice(this.state.index, 1);
    //     this.setState({index: deleted})
    //     console.log(data)
    //   }

    render(){
        return (
            <section className='main'>
                <div className='mainContainer'>
                    <UserCards index={this.state.index} data={this.state.data} />
                </div>
                <Nav forward={this.forward} back={this.back} deletePerson={this.deletePerson}/>
            </section>

        )
    }
};
