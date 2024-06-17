import React from 'react';
import './Home.scss';
import '../../style/dark.scss'
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Widget from '../../components/widget/Widget';
import Featured from '../../components/featured/Featured';
import Chart from '../../components/chart/Chart';
import Table from '../../components/table/Table';

const Home = () => {

  const rows = [
    {
      name: "January",
      Total: 1100
    },
    {
      name: "February",
      Total: 1400
    },
    {
      name: "March",
      Total: 700
    },
    {
      name: "April",
      Total: 900
    },
    {
      name: "May",
      Total: 400
    },
    {
      name: "June",
      Total: 1200
    },
  ]

  return (
    <>
      <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <Navbar />
          <div className='widgets'>
            <Widget type='user' />
            <Widget type='order' />
            <Widget type='earning' />
            <Widget type='balance' />
          </div>
          <div className="charts">
            <Featured />
            <Chart data={rows} aspect={2 / 1} title='Last 6 Months (Revenue)' />
          </div>
          <div className="listContainer">
            <div className="listTitle">
              Latest Transactions
            </div>
            <Table />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home