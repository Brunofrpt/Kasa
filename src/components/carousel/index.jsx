import { useState } from "react";

function Carousel({ pictures = [], title = "" }) {
    const [index, setIndex] = useState(0);

    const total = pictures.length

    if (total === 0) return null

    //function précédent//
    const goPrev = () => {
        setIndex((prev) => (prev === 0 ? total - 1 : prev - 1))
    }

    //function suivant//
    const goNext = () => {
        setIndex((prev) => (prev === total - 1 ? 0 : prev + 1))
    };

    return (
        <section className=" container carousel">

            <img className="carousel__image"
                src={pictures[index]}
                alt={`${title} - photo ${index + 1}`}
            />

            {total > 1 && (
                <>
                    <button onClick={goPrev} className="carousel__button carousel__button--left"><i className="fa-solid fa-chevron-left carousel__icon-left"></i></button>
                    <button onClick={goNext} className="carousel__button carousel__button--right"><i className="fa-solid fa-chevron-right carousel__icon-right"></i></button>
                    <p className="carousel__index">{index + 1}/{total}</p>
                </>
            )}

        </section>

    );
}

export default Carousel