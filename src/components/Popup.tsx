import { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import popup1 from "../assets/popup1.jpg";
import popup2 from "../assets/popup2.jpg";
import { useLocation } from "react-router-dom";

const Popup = () => {
    const [show, setShow] = useState(false);
    const [Image, setImage] = useState('');
    const location = useLocation();

    useEffect(() => {
        const random = Math.floor(Math.random() * 2);
        setImage(random === 0 ? popup2 : popup1);
    }, [location]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(true);
            setTimeout(() => setShow(false), 7000);
        }, 2000);
        return () => clearTimeout(timer);
    }, [location]);

    const handleClose = () => setShow(false);

    return (
        <Modal show={show} centered onHide={handleClose}>
            <Modal.Body className="text-center position-relative">
                <button
                    onClick={handleClose}
                    className="position-absolute top-0 end-0 m-2 border-0 bg-transparent text-dark"
                    style={{ fontSize: "1.5rem", cursor: "pointer" }}
                >
                    ✖
                </button>
                <img src={Image} alt="Popup Image" className="img-fluid rounded" />
            </Modal.Body>
        </Modal>
    );
};

export default Popup;
