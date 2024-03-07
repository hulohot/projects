import { GetStaticPaths, GetStaticProps } from 'next';
import { getProjectData, getAllProjectIds } from '../../../lib/projects';

export interface Project {
  id: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
}


const ProjectPage: React.FC<{ project: Project }> = ({ project }) => {
    return (
        <div>
            <h1>{project.title}</h1>
            <p>Date: {project.date}</p>
            <p>{project.description}</p>
            <div>
                <h2>Tags:</h2>
                <ul>
                    {project.tags.map((tag, index) => (
                        <li key={index}>{tag}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllProjectIds();
    return {
        paths,
        fallback: false
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params) {
    throw new Error("Params is undefined");
  }
  const project = getProjectData(params.id as string);
  return {
    props: {
      project: project as Project
    }
  };
};

export default ProjectPage;
