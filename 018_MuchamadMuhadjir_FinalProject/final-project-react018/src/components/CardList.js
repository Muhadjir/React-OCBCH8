import { useEffect, useState } from "react"
import { getAll, postData, deleteData, updateData, getWan } from "../store/action"
import { useSelector, useDispatch } from 'react-redux'
// import 'semantic-ui-react/dist/css/semantic.min.css'
// import "bootstrap/dist/css/bootstrap.min.css";
import 'semantic-ui-css/semantic.min.css'
import { Button, Card, Icon, Modal, Header, Image } from "semantic-ui-react";
import ModDetail from "./ModDetail"

function CardList() {
  const [key, setKeys] = useState('')
  const [first, setFirst] = useState('')
  const [last, setLast] = useState('')
  const [open, setOpen] = useState(false)
  const state = useSelector(state => state)
  const dispatch = useDispatch()
  useEffect(() => dispatch(getAll()), [])
  useEffect(() => {
    console.log(state.userOne)
    if (Object.keys(state.userOne).length > 0) {
      setKeys(state.userOne.keys)
      setFirst(state.userOne.fisrt)
      setLast(state.userOne.last)
    }
  }, [state.userOne])
  function getTok(keys) {
    dispatch(getWan(keys));
  }
  function post() {
    dispatch(postData(key, first, last))
    setKeys('')
    setFirst('')
    setLast('')
  }
  function update() {
    dispatch(updateData(key, first, last))
    setKeys('')
    setFirst('')
    setLast('')
  }
  function del(keysd) {
    dispatch(deleteData(keysd))
  }

  return (
    <Card.Group >
      {Object.keys(state.user).map(index => (
        <Card key={index}>
          <Card.Content>

            {/* <Button animated='vertical'>
              <Button.Content hidden>Detail</Button.Content>
              <Button.Content visible>
                <Icon name='clone' />
              </Button.Content>
            </Button> */}
            {/* <ModDetail /> */}

            <Button animated='vertical' onClick={() => getTok(state.user[index].key)}>
              <Button.Content hidden>Detail</Button.Content>
              <Button.Content visible>
                <Icon name='clone' />
              </Button.Content>
            </Button>
            {/* <Modal
              onClose={() => setOpen(false)}
              onOpen={() => setOpen(true)}
              open={open}
              trigger={
                <Button animated='vertical' onClick={() => getTok(state.user[index].key)}>
                  <Button.Content hidden>Detail</Button.Content>
                  <Button.Content visible>
                    <Icon name='clone' />
                  </Button.Content>
                </Button>
              }
            >
              <Modal.Header>{state.user[index].lastName}</Modal.Header>
              <Modal.Content>
                <Modal.Description>
                  <Header>Default Profile Image</Header>
                  <p>
                    We've found the following gravatar image associated with your e-mail
                    address.
                  </p>
                  <p>Is it okay to use this photo?</p>
                </Modal.Description>
              </Modal.Content>
              <Modal.Actions>
                <Button color='black' onClick={() => setOpen(false)}>
                  Nope
                </Button>
                <Button
                  content="Yep, that's me"
                  labelPosition='right'
                  icon='checkmark'
                  onClick={() => setOpen(false)}
                  positive
                />
              </Modal.Actions>
            </Modal> */}
            {/* <Icon floated='right' bordered inverted color='teal' name='clone' /> */}
            <Card.Header>{state.user[index].lastName}</Card.Header>
            {/* <Card.Meta>Key: {state.user[index].key}</Card.Meta> */}
            <Card.Description>
              <p>
              <strong> Full Name: </strong>{state.user[index].firstName} {state.user[index].lastName} 
              </p>  {/* <strong> with key {state.user[index].key}</strong> */}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>
              <Button basic color='blue' >
                Update
              </Button>
              <Button basic color='red' onClick={(() => { del(state.user[index].key) })}>
                Delete
              </Button>
            </div>
          </Card.Content>
        </Card>
      ))
      }
    </Card.Group>
  )
}
export default CardList