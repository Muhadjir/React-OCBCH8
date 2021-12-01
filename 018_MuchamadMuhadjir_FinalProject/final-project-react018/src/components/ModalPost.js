import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button, Header, Image, Modal, Icon, Form, Input } from 'semantic-ui-react'
import { postData } from '../store/action'

export default function ModalPost() {
    const [open, setOpen] = useState(false)
    const [key, setKeys] = useState('')
    const [first, setFirst] = useState('')
    const [last, setLast] = useState('')
    const dispatch = useDispatch()

    const post = () => {
        dispatch(postData(key, first, last))
        setOpen(false)
        setKeys('')
        setFirst('')
        setLast('')
    }
    return (
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<Button className="ui teal button">Create Modal</Button>}
        >
            <Modal.Header>Form Create</Modal.Header>
            <Modal.Content>
                <Modal.Description>
                    <Header>Default Profile Image</Header>
                    <Form className="ui form">
                        <Form.Field className="required field">
                            <label>Key</label>
                            <Input 
                                className="ui input"
                                placeholder="Key" 
                                value={key}
                                name="key"
                                onChange={(evt) => setKeys(evt.target.value)}
                                type='text'
                                minLength={1}
                                maxLength={3}
                            />
                        </Form.Field>
                        <Form.Field className="required field">
                            <label>First Name</label>
                            <Input 
                                className="ui input"
                                placeholder="First Name" 
                                value={first}
                                name="first"
                                onChange={(evt) => setFirst(evt.target.value)}
                                type='text'
                                minLength={3}
                                maxLength={10}
                            />
                        </Form.Field>
                        <Form.Field className="required field">
                            <label>Last Name</label>
                            <Input 
                                className="ui input"
                                placeholder="Last Name" 
                                value={last}
                                name="last"
                                onChange={(evt) => setLast(evt.target.value)}
                                type='text'
                                minLength={3}
                                maxLength={10}
                            />
                        </Form.Field>
                    </Form>
                </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
                <Button color='red' onClick={() => setOpen(false)}>
                    <Icon name='remove' /> Cancel
                </Button>
                <Button color='green'
                    disabled={key === '' && first === '' && last === ''}
                    onClick={post}>
                    <Icon name='checkmark' /> Save
                </Button>
            </Modal.Actions>
        </Modal>
    )
}