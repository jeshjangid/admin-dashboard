
import Chart from '../chart/Chart';
import { useParams} from "react-router-dom";
import './single.scss';
import data from '../tableData/table.json';
import Navbar from '../navbar/Navbar.jsx'

const Single = ({match}) => {

  const {id}= useParams();
  const user = data.find((u) => u.id === id);

  const handleEdit = (user) => {

  }
 

  return (
    <>
    <Navbar />
    <div className='single'>
        <div className="singleContainer">
              <div className="top">
                  <div className="left">
                    <div className="editButton" onClick={(user) => handleEdit(user)}>Edit</div>
                      <h1 className='title'>Information</h1>
                      
                        <div className="item">
                          <img src={user.img} alt="" className="itemImg" />

                          <div className="details">
                            <input type='text' className='itemValue name' value={user.name} />
                            <div className="detailItem">
                              <span className="itemKey">Position:</span>
                              <input type='text' className='itemValue' value={user.position} />
                            </div>
                            <div className="detailItem">
                              <span className="itemKey">Office:</span>
                              <input type='text' className='itemValue' value={user.office} />
                            </div>
                            <div className="detailItem">
                              <span className="itemKey">Age:</span>
                              <input className='itemValue' value={user.age} />
                            </div>
                            <div className="detailItem">
                              <span className="itemKey">Date:</span>
                              <input className='itemValue' value={user.date} />
                            </div>
                            <div className="detailItem">
                              <span className="itemKey">Salary:</span>
                              <input type='text' className='itemValue' value={user.salary} />
                            </div>
                          </div>
                        </div>
                  </div>
                  <div className="right">
                    <Chart data={user.chartData} aspect={3 / 1} title='User Spending ( Last 6 Months )' />
                  </div>
              </div>
        </div>
    </div>
    </>
  )
}

export default Single