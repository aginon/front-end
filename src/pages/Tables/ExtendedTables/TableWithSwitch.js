import React, { Component } from 'react';
// import generateData from '../generateData';
import Switch from 'components/Switch';
import * as firebase from 'firebase';

// function generateData(){
//   const rootRef = firebase.database().ref().child('SensorInfo');
//   const data = [];

//   rootRef.once('value').then(function (snap) {
//     var obj = snap.val();
//     Object.keys(obj).map(function (key) { return obj[key] })
//     Object.keys(obj["S1"]).map(function (key) { return obj["S1"][key] })
//     // console.log(obj);
//     data.push({ id: 1, name: "123", status: "3" });
//     data.push({ id: 1, name: "123", status: "3" });
//     data.push({ id: 1, name: "123", status: "3" });
//   }); 
//   return data;

// }


class TableWithSwitch extends Component {
  state = {
    items: [{ id: 1, name: "Loading", status: "Loading", active: false }, { id: 2, name: "Loading", status: "Loading", active: false }, { id: 3, name: "Loading", status: "Loading", active: false }, { id: 4, name: "Loading", status:"Loading",active:false}]
  };
  
  componentDidMount(){
    const rootRef = firebase.database().ref().child('SensorInfo');
    const S1Ref = rootRef.child('S1');
    const S2Ref = rootRef.child('S2');      
    const S3Ref = rootRef.child('S3');
    const S4Ref = rootRef.child('Sound');

    S1Ref.child('isActive').on('value', snap => {
      this.setState({
        items: this.state.items.map(item => {
          if (item.id === 1) {
            item.active = snap.val();
          }
          return item;
        })
      });
    });
    S1Ref.child('name').on('value', snap => {
      this.setState({
        items: this.state.items.map(item => {
          if (item.id === 1) {
            item.name = snap.val();
          }
          return item;
        })
      });
    });
    S1Ref.child('detectStatus').on('value', snap => {
      this.setState({
        items: this.state.items.map(item => {
          if (item.id === 1) {
            item.status = snap.val();
          }
          return item;
        })
      });
    });

    //s2
    S2Ref.child('isActive').on('value', snap => {
      this.setState({
        items: this.state.items.map(item => {
          if (item.id === 2) {
            item.active = snap.val();
          }
          return item;
        })
      });
    });
    S2Ref.child('name').on('value', snap => {
      this.setState({
        items: this.state.items.map(item => {
          if (item.id === 2) {
            item.name = snap.val();
          }
          return item;
        })
      });
    });
    S2Ref.child('detectStatus').on('value', snap => {
      this.setState({
        items: this.state.items.map(item => {
          if (item.id === 2) {
            item.status = snap.val();
          }
          return item;
        })
      });
    });
    //s3
    S3Ref.child('isActive').on('value', snap => {
      this.setState({
        items: this.state.items.map(item => {
          if (item.id === 3) {
            item.active = snap.val();
          }
          return item;
        })
      });
    });
    S3Ref.child('name').on('value', snap => {
      this.setState({
        items: this.state.items.map(item => {
          if (item.id === 3) {
            item.name = snap.val();
          }
          return item;
        })
      });
    });
    S3Ref.child('detectStatus').on('value', snap => {
      this.setState({
        items: this.state.items.map(item => {
          if (item.id === 3) {
            item.status = snap.val();
          }
          return item;
        })
      });
    });

    //s4
    S4Ref.child('isActive').on('value', snap => {
      this.setState({
        items: this.state.items.map(item => {
          if (item.id === 4) {
            item.active = snap.val();
          }
          return item;
        })
      });
    });
    S4Ref.child('name').on('value', snap => {
      this.setState({
        items: this.state.items.map(item => {
          if (item.id === 4) {
            item.name = snap.val();
          }
          return item;
        })
      });
    });
    S4Ref.child('detectStatus').on('value', snap => {
      this.setState({
        items: this.state.items.map(item => {
          if (item.id === 4) {
            item.status = snap.val();
          }
          return item;
        })
      });
    });

    }

  toggleActive = itemId => {
    this.setState({
      items: this.state.items.map(item => {
        if (item.id === itemId) {
          if( item.id == 1 ) {
            const rootRef = firebase.database().ref().child('SensorInfo');
            const S1Ref = rootRef.child('S1');
            S1Ref.update({isActive:!item.active});
            console.log(itemId);
          } else if (item.id == 2) {
            const rootRef = firebase.database().ref().child('SensorInfo');
            const S1Ref = rootRef.child('S2');
            S1Ref.update({ isActive: !item.active });
            console.log(itemId);
          } else if (item.id == 3 ){
            const rootRef = firebase.database().ref().child('SensorInfo');
            const S1Ref = rootRef.child('S3');
            S1Ref.update({ isActive: !item.active });
            console.log(itemId);
          } else {
            const rootRef = firebase.database().ref().child('SensorInfo');
            const S1Ref = rootRef.child('Sound');
            S1Ref.update({ isActive: !item.active });
            console.log(itemId);
          }
        } 
        return item;
      })
    });
  }

  render() {
    let { items } = this.state;
    return (
      <div className="card">
        <div className="header">
          <h4 className="title">Aginon IoT</h4>
          <p className="category">Control IoT by your finger.</p>
        </div>
        <div className="content table-responsive table-full-width">
          <table className="table table-hover table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Status</th>
                {/* <th className="text-right">Salary</th> */}
                <th>Active</th>
              </tr>
            </thead>
            <tbody>
              {items.map(item => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.status}</td>
                  {/* <td className="text-right">$ {item.salary}</td> */}
                  <td>
                    <Switch value={item.active} onChange={() => this.toggleActive(item.id)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
      </div>
    )
  }
}

export default TableWithSwitch;