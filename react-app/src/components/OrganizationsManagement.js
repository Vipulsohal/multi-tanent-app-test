import React, { useEffect, useState } from 'react';
import { fetchOrganizations } from '../services/api';

const OrganizationManagement = () => {
    const [organizations, setOrganizations] = useState([]);

    useEffect(() => {
        const loadOrganizations = async () => {
            const orgData = await fetchOrganizations();
            setOrganizations(orgData);
        };
        loadOrganizations();
    }, []);

    return (
        <div>
            <h2>Organization Management</h2>
            <ul>
                {organizations.map((org) => (
                    <li key={org.id}>{org.description}</li>
                ))}
            </ul>
        </div>
    );
};

export default OrganizationManagement;
