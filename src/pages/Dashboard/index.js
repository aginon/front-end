import React from 'react';
import EmailChart from './EmailChart';
import SalesChart from './SalesChart';
import UserBehaviorChart from './UserBehaviorChart';
import Tasks from './Tasks';
import TableWithSwitch from '../Tables/ExtendedTables/TableWithSwitch';
import FormElements2 from '../Forms/RegularForms/FormElements2';

const Dashboard = () => (
  <div className="content">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-8">
          <TableWithSwitch />
        </div>
      </div>
      <div className="row">
        <div className="col-md-8">
          <FormElements2 />
        </div>
      </div>

    </div>
  </div>
);

export default Dashboard;