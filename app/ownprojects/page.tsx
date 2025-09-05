
import ProjectContainer from "../components/ProjectContainer";
import ownprojects from '../../content/data.json';

const OwnProjectsPage = () => {
    const { title, items } = ownprojects.ownprojects;

    return (
        <div> <div>
            <ProjectContainer title={title} data={items} />
        </div>
             
            <div className='absolute right-24 bottom-52'>
                <p>Fler projekt kommer....</p>
            </div>
       </div>
       
    );
};

export default OwnProjectsPage;

