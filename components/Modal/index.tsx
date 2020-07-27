import React, { FC, useEffect } from "react";

import "./modal.scss";

type ModalProps = {
  visible: boolean;
  title?: string;
  renderCloseBtn?: boolean;
  closeBtn?: JSX.Element;
  renderFooter?: boolean | JSX.Element;
  okText?: string;
  cancelText?: string;
  onOk?: () => void;
  onCancel: () => void;
};

const Modal: FC<ModalProps> = ({
  children,
  visible,
  title = "This is modal",
  renderCloseBtn = true,
  closeBtn,
  renderFooter,
  okText = "Ok",
  cancelText = "Cancel",
  onOk,
  onCancel,
}): JSX.Element => {
  useEffect(() => {
    function escapeHandler(e) {
      if (e.which === 27) {
        onCancel();
      }
    }

    if (visible) {
      document.querySelector("body").classList.add("dtt-modal__open");
      document.addEventListener("keyup", escapeHandler);
    } else {
      document.querySelector("body").classList.remove("dtt-modal__open");
      document.removeEventListener("keyup", escapeHandler);
    }

    return () => document.removeEventListener("keyup", escapeHandler);
  }, [visible]);

  const _onOk = (): void => {
    onOk ? onOk() : onCancel();
  };

  return (
    <>
      <div className={`dtt-modal__wrapper ${visible ? "show" : ""}`}>
        <div className="dtt-mask" onClick={onCancel}></div>
        <div className="dtt-dialog">
          <div className="dtt-modal__content">
            <div className="dtt-modal__header">
              {title}
              {renderCloseBtn && (
                <div className="dtt-modal__wrapper-close">
                  {closeBtn || (
                    <button className="dtt-modal__close" onClick={onCancel}>
                      X
                    </button>
                  )}
                </div>
              )}
            </div>
            <div className="dtt-modal__body">{children}</div>

            {renderFooter ?? (
              <>
                <div className="dtt-modal__footer">
                  <button className="dtt-modal__cancel" onClick={_onOk}>
                    {cancelText}
                  </button>
                  <button className="dtt-modal__ok" onClick={onCancel}>
                    {okText}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
