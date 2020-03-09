import React from 'react';
import User from './components/user_component';
import NewUser from './components/user_generator_component';
import InviteUser from './components/invite_user_component.jsx';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          id:1,
          name: 'Erica Badu',
          email: 'e.badu@example.com',
          pic: 'https://resources-live.sketch.cloud/files/b3c4ce17-1f56-4d99-8309-bcb35becd425.png?Expires=1583715600&Signature=YAJ9yzzti5gFRLCTyBRN3Z5m~QXsU5BvxCi7LVYUqBYFxkbCRsstzIHLpQ-TUwH3qxfoHpT8a7I~qkuJLvQ9g5GtwjrkfJhZBbMArFzHV6mXuAjo7ihO~tJwmHGSVtQVMFnsXQKh-QPPe1ef172~aDE9mnHRhCc2oW1~2lNEIQU_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA',
          permission: 'Owner'
        },
        {
          id:2,
          name: 'Pat Nelson',
          email: 'p.nelson@example.com',
          pic: 'https://resources-live.sketch.cloud/files/8a54dba0-ea2f-4785-9f66-b02387e52756.png?Expires=1583715600&Signature=PpokO2T7Wwf5-MMjQ5DGthikMVSL2PmHEYL6PCHlkRNAR7EpkGkrzKam-GiF45OLgGzpXr5yQDUaQ2H~VAPgcY7Zqu7UfTAmt4evY~7peP0K3vmIJq9xiLuwTaAhDNxhMznE-hgEu~Aab6rahIavpvtLgEaCAjVonIvkEeIUbR4_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA',
          permission: 'Admin'
        },        
        {
          id:3,
          name: 'Pending acceptance',
          email: 'j.dog@example.com',
          pic: 'https://resources-live.sketch.cloud/files/2924ab65-57eb-4f08-96d2-d076b2e66325.png?Expires=1583715600&Signature=UoCCt2t6GXPedHMqedNm6jWQax2Gc2BO2CruqF6JCefzlgILwyDzw2Jq015blCO0QzNG1F8MtS2M3zLNMGbzSoID4D7Pd0hjLq77GDpCuD2FmBv2q35vaGL236hHOdY7WDXi~p9Z7rwPR9WhwMkgWRxStaJOxs9QEZQdZct-nIo_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA',
          permission: 'Standard'
        },
        { id:4,
          name: 'Amy Namy',
          email: 'a.namy@example.com',
          pic: 'https://resources-live.sketch.cloud/files/d192a5b0-67fe-4d59-bdcb-0d0edae927e5.png?Expires=1583715600&Signature=oLq38451GhWK9E-40HcR3YBZK~-U4D4RddxSrme7aWGUK6g3lT675PKRgkihK6lsQVbNw8SEXd-KpWjy8q2sk5oKnhursFC2DX7~JkxF4DUBZniT3FXadxjyH44k-86zD-5bft-HCSF5JiGT1vDS7yUeIcbKykCrTXTZT7sMt6I_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA',
          permission: 'Standard'
        },    
        { id:5,
          name: 'Victor D',
          email: 'o.hunter@example.com',
          pic: 'https://resources-live.sketch.cloud/files/38a487a0-135d-4c6b-b0df-c2a77a3ecbd5.png?Expires=1583715600&Signature=AunSS7M8fHFoi95XvNzNCEIzEGzky5aN4BAaoiornjIGjyoLPCp2Ev5iefR4S3HVCcWOkiJNJKzPc6gDGuuClElPguCKcjeQ-MQCgtF6F-brVeqxzoAIf0fe2rmT2mvBSOKoor-kMVtnFFsz5rSQ6OdVYYLzaenQi-e8bL~~O8U_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA',
          permission: 'Standard'
        },
        { id:6,
          name: 'Olly',
          email: 'v.d@example.com',
          pic: 'https://resources-live.sketch.cloud/files/745ee5b3-0a15-4585-a9a0-fb04f743ebdb.png?Expires=1583715600&Signature=rH5ibnUq28gh2VBLLjtNOhZyEFcF-koVj23NYOU5enmi0uSZsmpFd0gJ8CeS~iPkw~vgT4UL1CeCBg28iFfGHaGvZ8qu2J38XVnTzoHoOJ9WaVkepYPvW-sovELP1pugPu~j5VFstGCZP91wPc4cfyEex3DGtsPKfNwPXZo6dT4_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA',
          permission: 'Standard'
        }
      ]
    }
  }
  
  displayHeaders() {
    let headers = this.state.heders;
    this.setState({headers});
  }
  
  gettingUser  = res => {
    let users = [...this.state.users, res];
    this.setState({users});
  }
  
  deletingUser = id => {
    let users = this.state.users.filter(r => r.id !== id);
    this.setState({users});
  }
  
  render() {
    let users = this.state.users.map((value) => (
      <User key={value.id} onDelete={this.deletingUser} {...value} />
      ));
      return (
        <div className='App container-fluid'>
          <div className='container'><NewUser gettingUser={this.gettingUser} /></div>
          <div className='table-wrapper container'>
            <Table responsive className='table-borderless'>
              <thead>
                <tr>
                  <th>Team member</th>
                  <th>Email</th>
                  <th>Permission status</th>
                </tr>
              </thead>
              {users}
            </Table>
            <InviteUser gettingUser={this.gettingUser} />
            
            </div>
        </div>
        );
      }
    }
    
    export default App;

    