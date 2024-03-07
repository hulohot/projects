import fs from 'fs';
import path from 'path';

import { Project } from '../src/pages/projects/[id]';

// Function to get the file path of the JSON data
const projectsFilePath = path.join(process.cwd(), 'data', 'projects.json');

// Function to read the JSON file and parse it
const getProjectsData = () => {
    const jsonData = fs.readFileSync(projectsFilePath).toString(); // Convert buffer to string
    return JSON.parse(jsonData);
};

// Function to get all project IDs
export function getAllProjectIds() {
    const projects = getProjectsData();
    return projects.map((project: Project) => { // Add type annotation to the parameter
        return {
            params: {
                id: project.id
            }
        };
    });
}

// Function to get project data by ID
export function getProjectData(id: string): Project {
    const projects = getProjectsData();
    const project = projects.find((project: Project) => project.id === id);
    return project as Project; // Assert that project conforms to the Project interface
}
