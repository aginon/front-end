import React, { Component } from 'react';
// import { Field, reduxForm } from 'redux-form';
// import renderField from 'components/FormInputs/renderField';
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
    items: [{ id: 1, name: "Loading", status: "Loading", active: false }, { id: 2, name: "Loading", status: "Loading", active: false }],
    selectedRadio: 'null'

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
        selectedRadio: snap.val()
      })
    });

    }

  handleRadioChange = (event) => {
    const rootRef = firebase.database().ref().child('SensorInfo');
    const S1Ref = rootRef.child('Sound');
    S1Ref.update({ isActive: event.currentTarget.value });

    this.setState({
      selectedRadio: event.currentTarget.value
    })
  };

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
                    {item.active}
                    {/* <Switch value={item.active} onChange={() => this.toggleActive(item.id)} /> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* <button className="btn btn-wd">Default</button>
          <button className="btn btn-wd">Default</button>
          <button className="btn btn-fill btn-wd">Fill</button>               */}
          {/* <ul className="pagination pagination-no-border"> */}
            {/* <li><a href="#">ON</a></li>
            <li><a href="#">OFF</a></li>
            <li className="active"><a href="#">AUTO</a></li> */}
          <div className="form-group">
            <legend>Sound</legend>


            <div className="col checkbox-group">
            
            <div className="input-row">
              {/* <h5>Sound&nbsp;&nbsp;&nbsp;&nbsp;</h5> */}

              <input
                type="radio"
                name="auto"
                value="auto"
                checked={this.state.selectedRadio === 'auto'}
                onChange={this.handleRadioChange}
              />
                <label >AUTO&nbsp;&nbsp;&nbsp;&nbsp;</label>
              <input
                type="radio"
                name="ON"
                value="on"
                checked={this.state.selectedRadio === 'on'}
                onChange={this.handleRadioChange}
              />
                <label >ON&nbsp;&nbsp;&nbsp;&nbsp;</label>
              <input
                type="radio"
                name="off"
                value="off"
                checked={this.state.selectedRadio === 'off'}
                onChange={this.handleRadioChange}
              />
                <label >OFF&nbsp;&nbsp;&nbsp;&nbsp;</label>
            </div>
          </div>
          </div>
          {/* </ul> */}
        </div>
      </div>
      
    )
  }
}

export default TableWithSwitch;
