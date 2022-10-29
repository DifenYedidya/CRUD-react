import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

export default function Read() {
    const [APIData, setAPIData] = useState([]);

    useEffect(() => {
        axios.get(`https://635d13c0fc2595be26525b39.mockapi.io/fakeData`)
        .then((response) => {
            setAPIData(response.data);
        })
    }, [])
    //set the data to localstorage
    const setData = (data) => {
        let { id, firstName, lastName, checkbox } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('First Name', firstName);
        localStorage.setItem('Last Name', lastName);
        localStorage.setItem('Checkbox Value', checkbox)
    }
    //load the table data after it has been deleted.
    const getData = () => {
        axios.get(`https://635d13c0fc2595be26525b39.mockapi.io/fakeData`)
        .then((getData) => {
            setAPIData(getData.data);
        })
    }
    //delete data
    const onDelete = (id) => {
        axios.delete(`https://635d13c0fc2595be26525b39.mockapi.io/fakeData/${id}`)
        .then(() => {
            getData();
        })
    }
    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Checked</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {APIData.map((data) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{data.firstName}</Table.Cell>
                                <Table.Cell>{data.lastName}</Table.Cell>
                                <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>
                                <Link to='/update'>
                                    <Table.Cell> 
                                        <Button onClick={() => setData(data)}>Update</Button>
                                    </Table.Cell>
                                </Link>
                                <Table.Cell>
                                    <Button onClick={() => onDelete(data.id)}>Delete</Button>
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
        </div>
    )
}