interface ProjectItemProps {
    title: string;
    description: string;
    link: string;   
}

export const ProjectItem = ({ title, description, link }: ProjectItemProps) => (
    <li className='min-w-72 max-w-80 md:max-w-96 '>
        <article
            className='
		flex flex-col gap-2'
        >
            <h2
                className='
			text-purple'
            >
                {title}
            </h2>
            <p
                className='
			text-purple'
            >
                {description}
            </p>
            <p className="text-brown">Kolla in:
                <a
                    href={link}
                    target='_blank'
                    className='
			text-blue underline decoration-solid'
                > {title} </a>
            </p>
        </article>
    </li>
);
