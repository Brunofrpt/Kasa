import { useState } from "react";

function Collapse ({title, children, variant = "default"}) {

    const [isOpen, setIsOpen] = useState(false);

    function toggle ()  {
        setIsOpen(!isOpen);
    }

    return (
        <div className={`colapse colapse--${variant} ${isOpen ? "colapse--open" : ""}`}>
            <button type="button" className={`colapse__button colapse__button--${variant}`} onClick={toggle}>
                <h2 className="colapse__title">{title}</h2>
                <span className={isOpen ? "colapse__icon colapse__icon--open" : "colapse__icon"}><i className="fa-solid fa-angle-up"></i></span>
            </button>
            <div className={`colapse__content colapse__content--${variant}`}>{children}</div>
        </div>
    );

}

export default Collapse