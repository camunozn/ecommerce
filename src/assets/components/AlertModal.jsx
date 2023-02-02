import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setShowAlert } from '../../store/slices/showAlert.slice';

const AlertModal = () => {
  const alertData = useSelector(state => state.alertData);
  const dispatch = useDispatch();

  const { alertType, alertMessage } = alertData;

  const alertTypeClass = alertType === 'success' ? 'alert--success' : 'alert--error';
  const alertIconClass = alertType === 'success' ? 'check' : 'xmark';
  const alertBorderColor =
    alertType === 'success' ? 'solid 12px lightgreen' : 'solid 12px lightcoral';

  return (
    <div className="alert-modal">
      <div className="overlay" onClick={() => dispatch(setShowAlert(false))}>
        <div className="modal fade show d-block">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content rounded-3" style={{ borderLeft: alertBorderColor }}>
              <div className="modal-body row w-100 mx-auto">
                <div
                  className={`col-1 p-0 m-auto ${alertTypeClass}`}
                  style={{ fontSize: '2.4rem' }}
                >
                  <i className={`fa-regular fa-circle-${alertIconClass}`}></i>
                </div>
                <div className="col-10 px-3">
                  <h1 className="modal-title fs-5 text-capitalize">{alertType}</h1>
                  <p className="text-muted m-0">{alertMessage}</p>
                </div>
                <div className="col-1 text-center p-0">
                  <button
                    type="button"
                    className="btn-close fs-6"
                    onClick={() => dispatch(setShowAlert(false))}
                  ></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div
    //   className={`alert-icon ${
    //     alertType === 'success' ? 'alert-icon--success' : 'alert-icon--error'
    //   }`}
    // >
    //   <i className={`fa-regular fa-circle-${alertType === 'success' ? 'check' : 'xmark'}`}></i>
    // </div>
    // <div className="modal-title">
    //   <h2>{alertType}</h2>
    // </div>
    // <div className="alert-message">
    //   <p>{alertMessage}</p>
    // </div>
  );
};

export default AlertModal;
