import { useState, useEffect } from 'react';

import { Table, TableHead, TableCell, TableRow, TableBody, Button, } from '@mui/material'
import { getUsers, deleteUser } from '../Service/Api';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledTable = styled(Table)`
    width: 100%;
    margin: 50px 0 0 0;
    overflow-x: auto;  /* Enable horizontal scrolling on small screens */
`;

const THead = styled(TableRow)`
    & > th {
        font-size: 20px;
        background: purple;  /* Dark gray background */
        color: #FFFFFF;
        /* margin: 10px; */
    }
`;

const TRow = styled(TableRow)`
    & > td {
        font-size: 18px;
    }
`;

const ActionButtons = styled.div`
    display: flex;
    justify-content: space-around;

    @media (max-width: 600px) {
        flex-direction: column;
        align-items: center;
        margin-top: 10px;
    }
`;

const EditButton = styled(Button)`
    background-color: #2196f3;  /* Material blue */
    color: #ffffff;
    margin-right: 10px;

    &:hover {
        background-color: #1565c0;  /* Darker blue on hover */
    }

    @media (max-width: 600px) {
        margin-right: 0;
        margin-bottom: 10px;
    }
`;

const DeleteButton = styled(Button)`
    background-color: #f44336;  /* Material red */
    color: #ffffff;

    &:hover {
        background-color: #d32f2f;  /* Darker red on hover */
    }
`;

const AllUsers = () => {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        getAllUsers();
    }, []);

    const deleteUserData = async (id) => {
        await deleteUser(id);
        getAllUsers();
    }

    const getAllUsers = async () => {
        let response = await getUsers();
        setUsers(response?.data);
    }

    return (
        <div style={{padding:"20px"}}>
        <StyledTable >
            <TableHead>
                <THead>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell>Action</TableCell>
                </THead>
            </TableHead>
            <TableBody>
                {users?.map((user) => (
                    <TRow key={user.id}>
                        <TableCell>{user.id}</TableCell>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.username}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.phone}</TableCell>
                        <TableCell>
                            <ActionButtons>
                                <EditButton component={Link} to={`/edit/${user.id}`}>Edit</EditButton>
                                <DeleteButton onClick={() => deleteUserData(user.id)}>Delete</DeleteButton>
                            </ActionButtons>
                        </TableCell>
                    </TRow>
                ))}
            </TableBody>
        </StyledTable>
        </div>
    );
};

export default AllUsers;
