
import React from 'react';

class InviteUser extends React.Component {

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

        <div className='footer'>Your team has 5/6 active members.<span onClick={this.getNewUser}> <img src="https://resources-live.sketch.cloud/files/0b6212fa-1c1c-4d62-9725-167bd95d0110.png?Expires=1583715600&Signature=tCYF4cf-Jqg~4sc-jy~ywvfIp5AU1vCydLHW4z3OFVAGrTAQOZIqzYculX8rp7BQs-vC1hw8NSGXwE3BH4RML2V3yf9EfUtqxVVwAj-nc~ubuDOER9faN3AOuo3HXjaYbYYWeQqlVH2lBchxFXibA0grcPjcGyATsUK4~lriMxs_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA" alt="add user icon"/> INVITE</span>
        </div>


      );
    }
  }

  export default InviteUser;


