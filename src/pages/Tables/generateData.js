// import faker from 'faker';
import * as firebase from 'firebase';

export default (limit = 3, arrayData = false) => {
  const rootRef = firebase.database().ref().child('SensorInfo');

  rootRef.once('value').then(function(snap){
    const data = [];
    var obj = snap.val(); 
    Object.keys(obj).map(function (key) { return obj[key] })
    Object.keys(obj["S1"]).map(function (key) { return obj["S1"][key] })
    // console.log(obj);
    data.push({ id: 1, name: "123", status: "3" });

    return data ;
  }); 
  // console.log("xxx"+obj);
  // data.push({ id: 1, name: obj["S1"]["name"], status: "3" });

  //name: obj["S1"]["name"],isActive: obj["S1"]["isActive"],detectStatus:obj["S2"]["detectStatus"]}
  let row = null;
  // for (let i = 1; i <= limit; i++) {
  //   let row = null;
  //   if (arrayData) {
  //     row = [
  //       i,
  //       faker.name.findName(),
  //       faker.finance.amount(),
  //       faker.address.country(),
  //       faker.image.avatar(),
  //       faker.address.city(),
  //       faker.name.jobTitle(),
  //       faker.lorem.sentence(),
  //       faker.random.boolean(),
  //       faker.date.past()
  //     ];
  //   } else {
  //     row = {
  //       id: i,
  //       name: faker.name.findName(),
  //       salary: faker.finance.amount(),
  //       country: faker.address.country(),
  //       avatar: faker.image.avatar(),
  //       city: faker.address.city(),
  //       status: faker.name.jobTitle(),
  //       description: faker.lorem.sentence(),
  //       active: faker.random.boolean(),
  //       birthday: faker.date.past()
  //     };
  //   }
  //   data.push(row);
  // }
  return null;
}