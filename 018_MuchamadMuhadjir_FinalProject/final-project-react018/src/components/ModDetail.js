import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Header, Image, Modal, Icon } from 'semantic-ui-react'

export default function ModDetail(props) {
    const [open, setOpen] = useState(false)
    const { userOne } = useSelector(state => state)
    const dispatch = useDispatch()
    const { modalState } = props
    return (
        <Modal
            onClose={() => dispatch({
                type: 'EMPTY_ONE'
            })}
            // onOpen={() => setOpen(true)}
            open={modalState}
        >
            <Modal.Header>
                Detail
            </Modal.Header>
            <Modal.Content>
                <Modal.Description>
                    <Header>{userOne.firstName} {userOne.lastName}</Header>
                    <p>Key: {userOne.key}</p>
                    <p> First Name: {userOne.firstName}</p>
                    <p> Last Name:  {userOne.lastName}</p>
                </Modal.Description>
            </Modal.Content>
        </Modal>
    )
}