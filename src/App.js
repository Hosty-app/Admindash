import './App.css';
import React, { useState } from 'react';
import {
  LineChart,
  BarChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

function App() {
  const [chartType, setChartType] = useState('sales'); // Default to sales chart

  const data = [
    {
      name: 'Jan',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Feb',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'March',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'April',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'May',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'June',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'July',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <div className="App">
      <nav>
        <h1>ADMIN DASHBOARD</h1>
      </nav>
      <div className='middle'>
        <p onClick={() => setChartType('users')}>TOTAL USERS</p>
        <p onClick={() => setChartType('active')}>ACTIVE USERS</p>
        <p onClick={() => setChartType('sales')}>TOTAL SALES</p>
        <p onClick={() => setChartType('trends')}>TREND</p>
        <p onClick={() => setChartType('trends')}>DISTRIBUTION OF SALES</p>
      </div>
      <div className='content'>
        {chartType === 'trends' && (
          <LineChart
            className="linechart"
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#040458" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="uv" stroke="#faa51a" />
          </LineChart>
        )}
        {chartType === 'sales' && (
          <BarChart
            className="linechart"
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#040458" background={{ fill: '#eee' }} />
            <Bar dataKey="uv" fill="#faa51a" />
          </BarChart>
        )}
        {chartType === 'users' && (
          <div className="linechart">
            <h1>TOTAL USERS</h1>
            <div>
            <table>
  <thead>
    <tr>
    <th>ID</th>
    <th>Name</th>
    <th>Email</th>
    <th>Year</th>
    <th>Semester</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Ssentamu Eric</td>
      <td>sentamu@gmail.com</td>
      <td>2</td>
      <td>1</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Ssentamu Eric</td>
      <td>sentamu@gmail.com</td>
      <td>2</td>
      <td>1</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Ssentamu Eric</td>
      <td>sentamu@gmail.com</td>
      <td>2</td>
      <td>1</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Ssentamu Eric</td>
      <td>sentamu@gmail.com</td>
      <td>2</td>
      <td>1</td>
    </tr>
  </tbody>
</table>
          </div>
          </div>
        )}
        {chartType === 'active' && (
          <div className="linechart">
            <h1>ACTIVE USERS</h1>
            <div>
            <table>
  <thead>
    <tr>
    <th>ID</th>
    <th>Name</th>
    <th>Email</th>
    <th>Year</th>
    <th>Semester</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Ssentamu Eric</td>
      <td>sentamu@gmail.com</td>
      <td>2</td>
      <td>1</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Ssentamu Eric</td>
      <td>sentamu@gmail.com</td>
      <td>2</td>
      <td>1</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Ssentamu Eric</td>
      <td>sentamu@gmail.com</td>
      <td>2</td>
      <td>1</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Ssentamu Eric</td>
      <td>sentamu@gmail.com</td>
      <td>2</td>
      <td>1</td>
    </tr>
  </tbody>
</table>
          </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
