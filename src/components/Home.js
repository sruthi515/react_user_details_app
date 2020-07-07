import React, {Component} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import  {fetchUsersDetails,deleteUser,setOrder,setOrderBy,setSelected,setPage,setRowsPerPage} from '../actions';
import EnhancedTableHead from './Header';

const useStyles ={
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    // marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  openBtn:{
    
  }
}

class EnhancedTable extends Component {
  
  constructor(props){
    super(props);
    this.descendingComparator = this.descendingComparator.bind(this);
    this.getComparator = this.getComparator.bind(this);
    this.stableSort = this.stableSort.bind(this);
  }

  descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }
  
  getComparator(order, orderBy) {
    return order === 'desc'
      ? (a, b) => this.descendingComparator(a, b, orderBy)
      : (a, b) => this.descendingComparator(a, b, orderBy);
  }
  
  stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }

  componentDidMount() {
    const { fetchUsersDetails, deleteUser } = this.props
    fetchUsersDetails()
  }

  render() {
    const classes = useStyles;
    const { rows, order,orderBy,selected,page,rowsPerPage,fetchUsersDetails,deleteUser,setOrder,setOrderBy,setSelected,setPage,setRowsPerPage } = this.props
    console.log('rows:: ', rows)
    const handleRequestSort = (event, property) => {
      const isAsc = orderBy === property && order === 'asc';
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(property);
    };

    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };

    const isSelected = (name) => selected.indexOf(name) !== -1;

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

    return (  
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <TableContainer>
            <Table
              className={classes.table}
              aria-labelledby="tableTitle"
              aria-label="enhanced table"
            >
              <EnhancedTableHead
                classes={classes}
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onRequestSort={handleRequestSort}
                rowCount={rows.length}
              />
              <TableBody>
                {this.stableSort(rows, this.getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    const isItemSelected = isSelected(row.name);
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      <TableRow
                        hover
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.id}
                        selected={isItemSelected}
                      >
                        <TableCell padding="checkbox"></TableCell>
                        <TableCell component="th" id={labelId} scope="row" padding="none"> {row.name} </TableCell>
                        <TableCell align="right">{row.username}</TableCell>
                        <TableCell align="right">{row.email}</TableCell>
                        <TableCell align="right">{row.address.street}{row.address.city}</TableCell>
                        <TableCell align="right">{row.phone}</TableCell>
                        <TableCell align="right">{row.website}</TableCell>
                        <TableCell align="right">{row.company.name}</TableCell>
                        <TableCell align="right">
                            <Link to={`/user/`+row.id} >
                            <Button variant="contained" color="primary">Open</Button>
                            </Link>
                          <IconButton  onClick={ (e) => { console.log(e); console.log(row);deleteUser(row.id)} }> 
                            <DeleteIcon /> 
                          </IconButton>     
                        </TableCell>

                      </TableRow>
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Paper>
      </div>
    );
  }
}

const connectStateToProps = (state) => {
  return {
    userDetails: state.userDetails,
    rows: state.userDetails,
    order: state.filters.order,
    orderBy: state.filters.orderBy,
    selected: state.filters.selected,
    page: state.filters.page,
    rowsPerPage: state.filters.rowsPerPage
  }
}

const connectDispatchToProps = (dispatch) => {
  return {
     fetchUsersDetails: () => dispatch(fetchUsersDetails()),
     deleteUser: (userId) => dispatch(deleteUser(userId)),
     setOrder: (order) => dispatch(setOrder(order)),
     setOrderBy: (orderBy) => dispatch(setOrderBy(orderBy)),
     setSelected: (selected) => dispatch(setSelected(selected)),
     setPage: (page) => dispatch(setPage(page)),
     setRowsPerPage: (rowsPerPage) => dispatch(setRowsPerPage(rowsPerPage))
  }
}

export default connect(connectStateToProps, connectDispatchToProps)(EnhancedTable);