function List ({ items = [], variant = "default"}) {
    return (
        <ul className={`list list--${variant}`}>
            {items.map((item) => (
                <li key={item} className={`list__item list__item--${variant}`}>
                    {item}
                </li>
            )
        )}
        </ul>
    );
}

export default List