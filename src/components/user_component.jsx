import React from 'react';

class User extends React.Component {
  
  render() { 
    const {name, email, pic, permission, id, onDelete} = this.props;
    return (
     
  <tbody>
    <tr>
      <td className='user'><img src={pic} alt="user"/>{name}</td>
      <td>{email}</td>
      <td>{permission}</td>
      <td> <img className='deleteButton' onClick={() => onDelete(id)} src="https://resources-live.sketch.cloud/files/4eecee26-a507-4f96-910c-69bd3d38fd8a.png?Expires=1583715600&Signature=O2bcjmuLIHBr3BYbmNn0ujWeGyKZj18rPLiHiUkH8aiMb8LvtHYGLBoyZjkDYyysaY~OVccoU6ZdFRbSj58S72bEbh5y1cJkfmieSzYeHDsSuncaNnzSzrSHuXxW7FWNMkPUicTZuYH61GHPNjoze5e62BxUzmc7G~AcUFh7zU0_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA" alt="bin"/></td>
    </tr>
  </tbody>


      );
    }
  }
  
  export default User;

