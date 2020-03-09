
import React from 'react';

class NewUser extends React.Component {

    getNewUser = e => {
      fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
        let firstName = data.results[0].name.first[0].toUpperCase() + data.results[0].name.first.slice(1);
        let lastName = data.results[0].name.last[0].toUpperCase() + data.results[0].name.last.slice(1);
        let name = firstName + ' ' + lastName;
        let email = data.results[0].email;
        let pic = data.results[0].picture.large;
        let id = data.results[0].id.value;
        let permission = 'Standard';
        
        this.props.gettingUser({name, email, pic, permission, id});
        
      }); 
    }
    
    render() {
      return (

        <div className='NewUserButton' onClick={this.getNewUser}>
          <p>Members</p>
          <img src="https://cdn4.iconfinder.com/data/icons/online-menu/64/plus_add_additional_circle-512.png" style={{width: '40px', height: '40px', cursor:'pointer' }} alt="add icon"/>
        </div>


      );
    }
  }

  export default NewUser;


