import React from "react";
import styled from 'styled-components'

const Container = styled.div
  `
padding : 4rem;
`


const ButtonText = styled.text
  `
  font-size : 2rem ; 
`

type ButtonProperties = {
  wide?: boolean
  submit: boolean
}

const Button = styled.button
  `
flex: 1;
align-items: center;
justify-content: center;
border-top-color: #dddedf;
border-top-width: 1px;
border-left-color: #dddedf;
border-left-width: ${(props: ButtonProperties) => (!props.wide && props.submit ? '1px' : '0')};
border-bottom-left-radius: ${(props: ButtonProperties) => (props.wide || !props.submit ? '10px' : '0')};
border-bottom-right-radius: ${(props: ButtonProperties) => (props.wide || !props.submit ? '0' : '10px')};
`


const MessageContainer = styled.div`
  flex: 2;
  align-items: center;
  justify-content: center;
  height: 60px;
  padding: 20px;
`


const MessageText = styled.text
  `
  

`




type ModalProperties = {
  message: string
  show: boolean
  cancellable?: boolean
  labelCancel?: string
  onCancel?: () => void
  labelOk?: string
  onOk?: () => void
}



export function Modal(props: ModalProperties) {
  const {
    show,
    labelCancel: labelCancelProperty,
    labelOk: labelOkProperty,
    onCancel: onCancelProperty,
    onOk: onOkProperty,
    cancellable,
    message,
  } = props

  if (!show) {
    return <></>
  }

  const labelCancel = labelCancelProperty || 'Cancel'
  const labelOk = labelOkProperty || 'Ok'
  const onCancel = onCancelProperty || (() => { })
  const onOk = onOkProperty || (() => { })
  const buttons = []
  if (cancellable) {
    buttons.push(
      <Button key="cancel" onClick={onCancel} submit={false} wide={false}>
        <ButtonText>{labelCancel}</ButtonText>
      </Button>,
    )
  }
  buttons.push(
    <Button key="ok" onClick={onOk} submit wide={!cancellable}>
      <ButtonText>{labelOk}</ButtonText>
    </Button>,
  )

  return (

    <Container>
      <MessageContainer>
        <MessageText>{message}</MessageText>
      </MessageContainer>

    </Container>

  )
}

Modal.defaultProps = {
  cancellable: false,
  labelCancel: 'Cancel',
  onCancel: () => { },
  labelOk: 'Ok',
  onOk: () => { },
}