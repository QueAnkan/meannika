interface PresentationListItemProps {
    title: string;
    description: string;
}

export const PresentationListItem = ({
    title,
    description,
}: PresentationListItemProps) => (
    <li className='flex flex-col lg:gap-3 lg:flex-row'>
        <h4 className='text-green'>{title}: </h4>
        <p>{description}</p>
    </li>
);