import React, { useContext, useState } from 'react';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import { UserContext } from '../../App';
const CheckOut = () => {
    
    
    return (
        <div>
        <h1>Check Out</h1>
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>milk</td>
                    <td>1</td>
                    <td>$8</td>
                </tr>
                
            </tbody>
        </Table>
        <Button variant="warning">Check Out</Button>{' '}
    </div>
    );
};

export default CheckOut;