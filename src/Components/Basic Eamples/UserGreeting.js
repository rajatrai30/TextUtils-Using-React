import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
    this.state = {
        isLoggedIn: true
      }
    }
    render() {
        // 1 IF - ELSE RENDERING
        // if (this.state.isLoggedIn){
        //     return(
        //         <div>welcome rajat</div>
        //     )
        // }
        // else{
        //     return(
        //         <div>welcome guest user</div>
        //     )
        // }

        // 2 ELEMENT VARIABLES
        // let msg
        // if(this.state.isLoggedIn)
        //     msg = <div>welcome rajat</div>
        // else
        //     msg = <div>welcome guest user</div>

        // return <div>{msg}</div>

        // 3 CONDITIONAL RENDERING (TERENERY)
        return this.state.isLoggedIn ? (<div>welcome rajat</div>) : (<div>welcome guest user</div>)
    }
}
export default UserGreeting