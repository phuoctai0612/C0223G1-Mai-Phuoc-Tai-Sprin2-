import React, {useEffect, useState} from "react";
import {Modal, Button} from "react-bootstrap";
import {increaseViewMovie} from "../services/movieService";
import logoYH from "../img/YH.png"

export default function PR(props) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleClose = () => {
        setIsModalOpen(false);
    };
    useEffect(() => {
        setTimeout(() => {
            setIsModalOpen(true);
        }, 360000)
    }, [props.movie.id])
    return (
        <div >
            <Modal backdrop="static" style={{paddingTop:"150px"}}
                   show={isModalOpen}
                   onHide={handleClose}
                   className={"a"} onClick={() => {
                try {
                    increaseViewMovie(props.movie.id)
                } catch (a) {

                }
            }}>
                <Modal.Header  >
                    <Modal.Title>Bãi đỗ xe YANHUA</Modal.Title>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => {
                        handleClose()
                        try {
                            increaseViewMovie(props.movie.id)
                        } catch (a) {

                        }
                    }}>
                        <span style={{fontSize:"30px"}} aria-hidden="true">&times;</span>
                    </button>

                </Modal.Header>
                <Modal.Body>
                    <div className="product__item__pic set-bg img">
                        <img className={"maxImg"} src={logoYH}/>
                    </div>
                </Modal.Body>
                <Modal.Footer>

                </Modal.Footer>
            </Modal>
        </div>
    )
}