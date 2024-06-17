import './table.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { DarkModeContext } from '../../context/darkModeContext';
import { useContext } from 'react';


const List = () => {

    const rows = [
        {
            id: 1143155,
            product: "Acer Nitro 5",
            img: 'https://images.unsplash.com/photo-1572509018340-1fc13b5df491?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QWNlcnxlbnwwfHwwfHx8MA%3D%3D',
            customer: 'Jhon Smith',
            date: '1 March',
            amount: 785,
            method: 'Cash on Delivery',
            status: 'Approved'
        },
        {
            id: 1143156,
            product: "Acer Nitro 5",
            img: 'https://images.unsplash.com/photo-1572509018340-1fc13b5df491?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QWNlcnxlbnwwfHwwfHx8MA%3D%3D',
            customer: 'Michal Doe',
            date: '1 March',
            amount: 785,
            method: 'Online Payment',
            status: 'Pending'
        },
        {
            id: 1143157,
            product: "Acer Nitro 5",
            img: 'https://images.unsplash.com/photo-1572509018340-1fc13b5df491?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QWNlcnxlbnwwfHwwfHx8MA%3D%3D',
            customer: 'Nicholas',
            date: '1 March',
            amount: 785,
            method: 'Cash on Delivery',
            status: 'Pending'
        },
        {
            id: 1143158,
            product: "Acer Nitro 5",
            img: 'https://images.unsplash.com/photo-1572509018340-1fc13b5df491?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QWNlcnxlbnwwfHwwfHx8MA%3D%3D',
            customer: 'Divya',
            date: '1 March',
            amount: 785,
            method: 'Cash on Delivery',
            status: 'Approved'
        },
        {
            id: 1143159,
            product: "Acer Nitro 5",
            img: 'https://images.unsplash.com/photo-1572509018340-1fc13b5df491?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QWNlcnxlbnwwfHwwfHx8MA%3D%3D',
            customer: 'Lokesh',
            date: '1 March',
            amount: 785,
            method: 'Online Payment',
            status: 'Pending'
        },
        {
            id: 1143160,
            product: "Acer Nitro 5",
            img: 'https://images.unsplash.com/photo-1572509018340-1fc13b5df491?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QWNlcnxlbnwwfHwwfHx8MA%3D%3D',
            customer: 'Gorge',
            date: '1 March',
            amount: 785,
            method: 'Cash on Delivery',
            status: 'Approved'
        },
        {
            id: 1143161,
            product: "Acer Nitro 5",
            img: 'https://images.unsplash.com/photo-1572509018340-1fc13b5df491?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QWNlcnxlbnwwfHwwfHx8MA%3D%3D',
            customer: 'Jhon Smith',
            date: '1 March',
            amount: 785,
            method: 'Online Payment',
            status: 'Pending'
        },
    ]
    const {darkMode} = useContext(DarkModeContext)
  return (
      <TableContainer  className={darkMode ? "table-black" : "table"} component={Paper} >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                  <TableRow>
                    <TableCell className='tableCell'>Tracking ID</TableCell>
                    <TableCell className='tableCell'>Product</TableCell>
                    <TableCell className='tableCell'>Customer</TableCell>
                    <TableCell className='tableCell'>Date</TableCell>
                    <TableCell className='tableCell'>Amount</TableCell>
                    <TableCell className='tableCell'>Payment Method</TableCell>
                    <TableCell className='tableCell'>Status</TableCell>
                  </TableRow>
              </TableHead>
              <TableBody>
                  {rows.map((row) => (
                      <TableRow
                          key={row.id}
                      >
                          <TableCell >
                              {row.id}
                          </TableCell>
                          <TableCell className='tableCell'>
                            <div className="cellWrapper">
                                <img src={row.img} alt="img" className="image" />
                                {row.product}
                            </div>
                          </TableCell>
                          <TableCell className='tableCell'>{row.customer}</TableCell>
                          <TableCell className='tableCell'>{row.date}</TableCell>
                          <TableCell className='tableCell'>{row.amount}</TableCell>
                          <TableCell className='tableCell'>{row.method}</TableCell>
                          <TableCell className='tableCell'><span className={`status ${row.status}`}>{row.status}</span></TableCell>
                      </TableRow>
                  ))}
              </TableBody>
          </Table>
      </TableContainer>
  )
}

export default List