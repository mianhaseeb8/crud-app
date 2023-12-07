import React, { Fragment } from 'react'
import { Button, Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Employees from './Employees';
import { Link, useNavigate } from 'react-router-dom';

function Home() {

    let history = useNavigate();

    const handleEdit = (id,name, age) => {
        localStorage.setItem('Id', id);
        localStorage.setItem('Name', name);
        localStorage.setItem('Age', age);
    }

    const handleDelete = (id) => {
        const newEmployees = Employees.map(function (e) {
            return e.id;
        }).indexOf(id);
        
        Employees.splice(newEmployees, 1);
        history('/');
    }

    return (
        <Fragment>
            <div style={{ margin: '10rem' }}>

                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Employees.map((employee) => (
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.Name}</td>
                                <td>{employee.Age}</td>
                                <td>
                                    <Link to={'/edit'}>
                                        <Button onClick={() => handleEdit(employee.id,employee.Name, employee.Age)} variant="primary">Edit</Button>{' '}
                                    </Link>
                                    <Button onClick={() => handleDelete(employee.id)} variant="danger">Delete</Button>{' '}

                                </td>
                            </tr>
                        ))}
                    </tbody>

                </Table>
                <Link className='d-grid gap-2' to='/add'>
                    <Button size='lg' variant="success">Add</Button>{' '}
                </Link>
            </div>
        </Fragment>
    )
}

export default Home;