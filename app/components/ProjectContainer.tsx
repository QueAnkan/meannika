
import { ProjectItem } from "../components/ProjectItem";

interface Project {
	 title: string;
    description: string;
    link: string;
}

interface ProjectContainerProps {
    title: string;
	data: Project[];
}

const ProjectContainer = ({title, data} : ProjectContainerProps) => {
    return (
          <div className='relative pb-32 pt-20 mx-2 min-h-svh'>
					<h1 className='w-full text-center pb-16 text-green'>{title}</h1>
					<div className=" mx-auto">
						<ul className=" flex flex-col gap-16 justify-center items-center 2xl:flex-row 2xl:items-start  xl:pt-12">
							{data.map((item) => (
								<ProjectItem key={item.title} {...item} />
							))}
						</ul>
					</div>
				</div>
    );
};

export default ProjectContainer;
