import React from 'react';
import{ Table, TableRow, TableCell, TableContainer, Paper, TableHead, TableBody } from '@material-ui/core';

import data from '../../data/data';

const Cases = () => {
    return (
        <div>
            Hello world
            <BruneiCases />
        </div>
    )
}

export default Cases;

const BruneiCases = () => {
    return (
        <div>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                Case
                            </TableCell>
                            <TableCell>
                                Age
                            </TableCell>
                            <TableCell>
                                Gender
                            </TableCell>
                            <TableCell>
                                Description
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.cases.map(value => {
                            return (
                                <TableRow>
                                    <TableCell>
                                        {value.caseNumber}
                                    </TableCell>
                                    <TableCell>
                                        {value.age}
                                    </TableCell>
                                    <TableCell>
                                        {value.gender}
                                    </TableCell>
                                    <TableCell>
                                        {value.description}
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}