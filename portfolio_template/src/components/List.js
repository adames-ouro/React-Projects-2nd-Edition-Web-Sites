import './List.css';

function List({items}) {
    return (
        <div className='entry'>
            <ul>
                {items.map((item) => (
                    <li key={item.field}>
                        <span>{item.field}: </span>
                        {item.value}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default List;