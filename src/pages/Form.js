import React, { Component } from 'react';

class Form extends Component {
  render() {
      return (
            <React.Fragment>
              <div class="container" >
        <div class="row">
        <div class="col-md-3">
                      
        </div>
                  
        <div class="col-md-6 main">
                      
            <form action="sign_up" method="post">
                      
            <h1> Signup form </h1>
                              
            <input class="box" type="text" name="name" id="name" 
                      placeholder="Name"  required /><br/>
                                        
                      <input class="box" type="email" name="email" id="email" 
                      placeholder="E-Mail " required /><br/>
                                        
                      <input class="box" type="password" name="password" 
                      id="password" placeholder="Password " required/><br/>
                                        
                      <input class="box" type="text" name="phone" id="phone"  
                      placeholder="Phone Number " required/><br/>
                                  <br/>
                      <input type="submit" id="submitDetails"  
                      name="submitDetails" value="Submit" /><br/>
                      
            </form>
                      
        </div>
                  
                  
        <div class="col-md-3">
        </div>
                  
    </div>
    </div>
            </React.Fragment>
      );
  }
}

export default Form;