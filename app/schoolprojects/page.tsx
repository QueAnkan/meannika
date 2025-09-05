
import schoolprojects from '../../content/data.json';
import ProjectContainer from "../components/ProjectContainer";

const SchoolProjectsPage = () => {
    const { title, items } = schoolprojects.schoolprojects;

    return (
        <div>
            <ProjectContainer title={title} data={items} />
        </div>
    );
};

export default SchoolProjectsPage;

