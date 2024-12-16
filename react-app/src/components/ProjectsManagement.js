import React, { useEffect, useState } from 'react';
import { fetchProjects } from '../services/api';

const ProjectManagement = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const loadProjects = async () => {
            const projectData = await fetchProjects();
            setProjects(projectData);
        };
        loadProjects();
    }, []);

    return (
        <div>
            <h2>Project Management</h2>
            <ul>
                {projects.map((project) => (
                    <li key={project.id}>{project.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default ProjectManagement;
