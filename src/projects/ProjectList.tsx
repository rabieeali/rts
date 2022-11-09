
import { Project } from './Project';
import ProjectCard from './ProjectCard';
import ProjectForm from './ProjectForm';

interface ProjectListProps {
    projects: Project[]
}
const handleEdit = (project: Project) => {
    console.log(project);
};

function ProjectList({ projects }: ProjectListProps) {
    const items = projects.map((p) => (
        <div key={p.id} className="cols-sm">
            <ProjectCard onEdit={handleEdit} project={p} />
            <ProjectForm />
        </div>
    ));
    return <div className="row">{items}</div>;
}

export default ProjectList;