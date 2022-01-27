import React ,{useState} from 'react';

function AlertCustom({alertMessage }) {
    let alertMessageFunction = ()=>{ $('#customAlert').toggle(); };
    let alertNotAvailableClose = ()=>{ $('#customAlert').hide(); };
  return (

<div className="ms_clear_modal">
  <div id="customAlert" className="modal  centered-modal" role="dialog">
    <div className="modal-dialog">
      {/* Modal content*/}
      <div className="modal-content">
        <button type="button" className="close" onClick={alertNotAvailableClose}>
          <i className="fa_icon form_close" />
        </button>
        <div className="modal-body">
          <h1>{alertMessage}</h1>
          <div className="clr_modal_btn">
             <a href="#" onClick={alertNotAvailableClose} >close</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  );
}

export default AlertCustom;
