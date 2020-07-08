import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';

const headCells = [
    { id: 'name', numeric: false, disablePadding: true, label: 'Name' },
    { id: 'username', numeric: true, disablePadding: false, label: 'UserName' },
    { id: 'email', numeric: true, disablePadding: false, label: 'Email' },
    { id: 'address', numeric: true, disablePadding: false, label: 'Address' },
    { id: 'phone', numeric: true, disablePadding: false, label: 'Phone' },
    { id: 'website', numeric: true, disablePadding: false, label: 'Website' },
    { id: 'company', numeric: true, disablePadding: false, label: 'Company' },
    { id: 'actions', numeric: true, disablePadding: false, label: 'Actions' }
]; 

export default function Header(props) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };
  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox"></TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}>
              {headCell.label}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
} 