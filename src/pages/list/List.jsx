import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import TableData from '../../components/tableData/Table';
import './List.scss';
// import NewTab from '../../components/table/NewTab'

const List = () => {
  return (

    <div className='list'>
      <Sidebar />
      <div className="listContainer">
        <Navbar />
      {/*<NewTab />*/}

      <TableData />
      </div>
    </div>
  )
}

export default List