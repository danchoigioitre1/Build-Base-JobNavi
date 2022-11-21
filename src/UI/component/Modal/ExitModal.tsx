import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'
import { Modal } from './Modal'

export function ExitModal(props: { show: boolean; setShow: (show: boolean) => void; message: string }) {

    const navigate = useNavigate()
    const { t } = useTranslation()
    const { show, setShow, message } = props
    const okButtonLabel = t('system-message.exit-modal.ok-button-label')
    const cancelButtonLabel = t('system-message.exit-modal.cancel-button-label')
    const handleOkButtonPressed = useCallback(() => { navigate('/') }, [])
    const handleCancelButtonPressed = useCallback(() => setShow(false), [setShow])

    return (
        <Modal
            show={show}
            message={message}
            cancellable
            onOk={handleOkButtonPressed}
            labelOk={okButtonLabel}
            onCancel={handleCancelButtonPressed}
            labelCancel={cancelButtonLabel}
        />
    )
}