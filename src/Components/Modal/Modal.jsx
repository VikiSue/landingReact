import React from 'react';
import { closeModal } from '../../redux/action/closeModal';
import { connect } from 'react-redux';

const Modal = ({ closeModal }) => {
    return (
        <div className="modal  modalShown fixed-top" tabIndex="2" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content w-100">
                    <div className="modal-header">
                        <h3 className="modal-title title2">Congratulations </h3>
                        <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                            onClick={closeModal}
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p className="text-left">You have successfully passed the registration.</p>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className=" button button--small"
                            data-dismiss="modal"
                            onClick={closeModal}
                        >
                            Great
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ModalContainer = connect(
    undefined,
    { closeModal }
)(Modal);

export default ModalContainer;
