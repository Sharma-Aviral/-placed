import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ComputerIcon from '@mui/icons-material/Computer';
import BiotechIcon from '@mui/icons-material/Biotech';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';

const List = () => {
  const rows = [
    {
      id: 1143155,
      product: "B.Tech CSE",
      img: <ComputerIcon/>,
      customer: "John Smith",
      date: "2023",
      amount: 7.5,
      method: "Cash Pay",
      status: "Placed",
    },
    {
      id: 2235235,
      product: "B.Tech ECE",
      img: <ElectricBoltIcon/>,
      customer: "Michael Doe",
      date: "2023",
      amount: 9.0,
      method: "Online Pay",
      status: "Pending",
    },
    {
      id: 2342353,
      product: "B.Tech CSE",
      img: <ComputerIcon/>,
      customer: "John Smith",
      date: "2022",
      amount: 6.3,
      method: "Amazon",
      status: "Pending",
    },
    {
      id: 2357741,
      product: "B.Tech Biotech",
      img: <BiotechIcon/>,
      customer: "Jane Smith",
      date: "2024",
      amount: 9.2,
      method: "Pfizer",
      status: "Placed",
    },
    {
      id: 2342355,
      product: "MCA",
      img: <ComputerIcon/>,
      customer: "Harold Carol",
      date: "2022",
      amount: 7.40,
      method: "TCS",
      status: "Pending",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Enrollment No.</TableCell>
            <TableCell className="tableCell">Course</TableCell>
            <TableCell className="tableCell">Student</TableCell>
            <TableCell className="tableCell">Batch</TableCell>
            <TableCell className="tableCell">GPA</TableCell>
            <TableCell className="tableCell">Company</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  {row.img}
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;