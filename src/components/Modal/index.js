import React from 'react'
import {
  modal,
  modal__isActive,
  modal__background,
  modal__content,
  modal__close,
  modal__grid,
  modal__form,
} from './modal.module.css'

class Modal extends React.Component {
  render() {
    const shelterInfo = this.props.shelterInfo
    return (
      <div
        className={`${modal} ${
          this.props.isActive ? `${modal__isActive}` : ``
        }`}
      >
        <div className={modal__background}></div>
        <div className={modal__content}>
          {!(shelterInfo == null) ? (
            <div className={modal__grid}>
              <div>Shelter Id</div>
              <div>{shelterInfo[0].sid}</div>
              <div>Shelter Name</div>
              <div>{shelterInfo[0].name}</div>
            </div>
          ) : (
            ``
          )}
          <form className={modal__form} action="#">
            <textarea
              name="message"
              placeholder="Report an issue"
              id="message"
              rows="5"
            />
            <div className={modal__grid}>
              <input type="reset" value="Clear" />
              <button type="submit">Send</button>
            </div>
          </form>
        </div>
        <button
          className={`${modal__close}`}
          onClick={() => this.props.modalStomp()}
          aria-label="close"
        ></button>
      </div>
    )
  }
}

export default Modal
