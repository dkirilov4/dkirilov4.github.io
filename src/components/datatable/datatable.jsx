import React, { Component } from 'react';
import "./datatable.css"

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableHead from '@material-ui/core/TableHead';


let id = 0;
function createData(course, description)
{
    id++;    
    return {id, course, description}
}

class DataTable extends Component {
    state = { 
        rows: [
            createData("Virtual and Augmented Reality", "C#, Unity"),
            createData("Visual Analytics", "R, JavaScript"),
            createData("Video Game Design", "Unity"),
            createData("New Media Arts", "TensorFlowJS, Node.js, Processing"),
            createData("Database Systems", "SQL, .NET"),
            createData("Software Engineering I", "Requirements Analysis, UML, Agile, Scrum"),
            createData("Computer Algorithms I", "Algorithm Analysis"),
            createData("Creative Coding", "Arduino, SocketIO"),
            createData("Program Design I", "Java"),
            createData("Program Design II", "C, C++"),
            createData("Mathematical Foundations of Computing", "Tarski's World"),
            createData("Programming Practicum", "C, Java"),
            createData("Data Structures", "C, C++"),
            createData("Machine Organization", "C, y86"),
            createData("Languages and Automata", "RegEx, FLAP"),
            createData("Programming Language Design and Implementation", "C++, F#, C#, SQL"),
            createData("Software Design", "Java, Raspberry Pi, Node.js, Design Patterns"),
            createData("Computer Systems", "C, Pipelining, Multi-Threading"),
            createData("Computer Design", "C, Arduino")
        ],
        page: 0,
        rowsPerPage: 5
    };
    render() { 
        const { rows, rowsPerPage, page } = this.state;
        const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
        return (
            <div className = "dt">
            <div className = "education-background-primary">Relevant Coursework</div>
            <Paper className={"dt__root"}>
                <div className={"dt__wrapper"}>
                <Table className={"dt__table"}>
                <TableHead className = "dt__table-head">
                    <TableRow>
                        <TableCell align="left">Course</TableCell>
                        <TableCell align="left">Languages/Technologies</TableCell>
                    </TableRow>
                </TableHead>
                    <TableBody>
                    {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
                        return (
                        <TableRow key={row.id}>
                            <TableCell align="left">{row.course}</TableCell>
                            <TableCell align="left">{row.description}</TableCell>
                        </TableRow>
                        );
                    })}
                    {emptyRows > 0 && (
                        <TableRow style={{ height: 37 * emptyRows }}>
                        <TableCell colSpan={6} />
                        </TableRow>
                    )}
                    </TableBody>
                    <TableFooter>
                    <TableRow>
                        <TablePagination
                        rowsPerPageOptions={[5]}
                        colSpan={3}
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        SelectProps={{
                            native: true,
                        }}
                        onChangePage={this.handleChangePage}
                        onChangeRowsPerPage={this.handleChangeRowsPerPage}
                        />
                    </TableRow>
                    </TableFooter>
                </Table>
                </div>
            </Paper>
            </div>
         );
    }

    handleChangePage = (event, page) => {
        this.setState({ page });
      };
    
      handleChangeRowsPerPage = event => {
        this.setState({ rowsPerPage: event.target.value });
      };
}

export default (DataTable);