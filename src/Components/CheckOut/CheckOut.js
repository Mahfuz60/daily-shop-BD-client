import React from 'react';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

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
                    <td></td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
            </tbody>
        </Table>
        <Button variant="warning">Check Out</Button>{' '}
    </div>
    );
};

export default CheckOut;