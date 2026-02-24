function StarRating ({ rating= 0 }){

    const range = [1, 2, 3, 4, 5];

    return (
        <p className="star">
            {range.map((rangeElem) =>
            rating >= rangeElem ? (
                <i  
                key={rangeElem} className="fa-solid fa-star star__item star__item--full" aria-label="star full"
                ></i>
            ) : (
                <i
                key={rangeElem} className="fa-solid fa-star star__item star__item--empty" aria-label="star empty"
                ></i>
            )
        )}
        </p>
    )
}

export default StarRating
