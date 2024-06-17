import React, { useEffect, useState } from 'react';
import newTable from './table.json';
import '../tableData/table.scss';
import {Link} from 'react-router-dom';

const Table = () => {

    const [search, setSearch] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [itemPerPage, setItemPerPage] = useState(10)
    
    const ekfunction = () =>{
        
        // const row = localStorage.getItem('table');
        // const TableData = JSON.parse(row)
    return newTable;
    }
    
    const [tableData, setTableData] = useState(ekfunction)
    
    useEffect(() => {
        const strData = JSON.stringify(tableData);
       localStorage.setItem('table', strData);
    }, [tableData])
    
    const handleDelete = (index) => {
        const data = tableData.filter((item) => item.id !== index)
     
        setTableData(data)
    }



    let filterData = tableData.filter((item) => {
        return (
            search.toLocaleLowerCase() === '' ? item : item.id.toLocaleLowerCase().includes(search) ||
                search.toLocaleLowerCase() === '' ? item : item.name.toLocaleLowerCase().includes(search) ||
                    search.toLocaleLowerCase() === '' ? item : item.position.toLocaleLowerCase().includes(search) ||
                        search.toLocaleLowerCase() === '' ? item : item.office.toLocaleLowerCase().includes(search) ||
                            search.toLocaleLowerCase() === '' ? item : item.age.toLocaleLowerCase().includes(search) ||
                                search.toLocaleLowerCase() === '' ? item : item.date.toLocaleLowerCase().includes(search) ||
                                    search.toLocaleLowerCase() === '' ? item : item.salary.toLocaleLowerCase().includes(search)
        )
    })

    console.log((currentPage - 1) * itemPerPage,currentPage * itemPerPage);

    const newData =  (filterData || tableData).slice((currentPage - 1) * itemPerPage, currentPage * itemPerPage)


    console.log(newData);

    const handelCounts = (e) => {
        setItemPerPage(e.target.value)
        setCurrentPage(1)
    }

    const decrease = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }
    const increase = () => {
        if (currentPage < tableData.length / itemPerPage) {
            setCurrentPage(currentPage + 1)
        }
    }


    

    return (
        <>
            <div className="header">
                <label>Rows per page:
                    <select value={itemPerPage} onChange={handelCounts} >
                        <option value={tableData.length} >All</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                        <option value="50">50</option>
                    </select>
                </label>
                <input type="text" onChange={(e) => setSearch(e.target.value)} placeholder="Search Something" />
            </div>
            <div className="myTable">
                <table sx={{minWidth: 650}}>
                    <thead>
                        <tr>
                            <th align='left' className='tableCell'>ID </th>
                            <th align='left' className='tableCell'>Name </th>
                            <th align='left' className='tableCell'>Position </th>
                            <th align='left' className='tableCell'>Office </th>
                            <th align='left' className='tableCell'>Age </th>
                            <th align='left' className='tableCell'>Date </th>
                            <th align='left' className='tableCell'>Salary </th>
                            <th align='left' className='tableCell'>Action </th>
                        </tr>
                    </thead>
                    <tbody>{
                        newData.map((item, index) => (
                            <tr key={index}>
                                <td align='left'>{item.id}</td>
                <td align='left'><img src={item.img} alt='img' style={{borderRadius: '50%', border: '2px solid #00000050', marginRight: '10px', objectFit: 'cover'}} height={30} width={30}/>{item.name}</td>
                <td align='left'>{item.position}</td>
                <td align='left'>{item.office}</td>
                <td align='left'>{item.age}</td>
                <td align='left'>{item.date}</td>
                <td align='left'>{item.salary}</td>
                <td align='left' style={{display: 'flex', alignItems: 'center', gap: '15px', verticalAlign: 'middle'}}
                >
                <Link to={`${item.id}`} ><p type='button' style={{color: 'goldenrod', borderRadius: '5px', padding: '2px 5px ', textDecoration: 'none', border: '1px solid goldenrod', cursor: 'pointer', fontSize: '18px'}}>view</p></Link>
                
                <p  type='button' onClick={() => handleDelete(item.id)} style={{color: 'crimson', borderRadius: '5px', padding: '2px 5px ', border: '1px solid rgba(220, 20, 60, 0.6)', cursor: 'pointer', fontSize: '18px'}}>delete</p></td>
                            </tr>
                        ))
}</tbody>
                </table>
            </div>
            <div className='footer'>
                <button onClick={decrease} className='previous'>Previous</button>
                <p value={currentPage}>Page: {currentPage}</p>
                <button onClick={increase} className='next'>Next</button>
            </div>
        </>
    )
}

export default Table