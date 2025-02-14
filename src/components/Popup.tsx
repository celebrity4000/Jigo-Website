import { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import popup1 from "../assets/popup1.jpg"
import popup2 from "../assets/popup2.jpg"

const Popup = () => {
    const [show, setShow] = useState(false);
    const [Image, setImage] = useState('');

    useEffect(() => {
        const random = Math.floor(Math.random() * 2);
        if (random === 0) {
            setImage(popup2);
        } else {
            setImage(popup1);
        }
        popup2
    }, []);

    useEffect(() => {
        setShow(true); // Show popup on load
    }, []);

    const handleClose = () => setShow(false);

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Body className="text-center" onClick={handleClose}>
                <img
                    src={Image}
                    alt="Popup Image"
                    className="img-fluid rounded"
                />
            </Modal.Body>
        </Modal>
    );
};

export default Popup;
