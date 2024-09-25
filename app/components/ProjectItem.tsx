interface ProjectItemProps {
    title: string;
    description: string;
    link: string;
}

export const ProjectItem = ({ title, description, link }: ProjectItemProps) => (
    <li className='max-w-96 '>
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
            <a
                href={link}
                target='_blank'
                className='
			text-blue'
            >
                {link}
            </a>
        </article>
    </li>
);
