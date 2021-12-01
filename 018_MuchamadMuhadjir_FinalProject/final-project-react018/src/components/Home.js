import { useEffect, useState } from "react"
import { getAll, postData, deleteData, updateData, getWan } from "../store/action"
import { useSelector, useDispatch } from 'react-redux'
import CardList from "./CardList"
import { Button} from "semantic-ui-react"
import ModalPost from "./ModalPost"
import ModDetail from "./ModDetail"


function Home() {
    const [key, setKeys] = useState('')
    const [first, setFirst] = useState('')
    const [last, setLast] = useState('')
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    useEffect(() => dispatch(getAll()), [])
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

    return (
        <>
            {/* <table>
            <thead>
                <tr>
                    <th>Keys</th>
                    <th>FullName</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                Object.keys(state.user).map(index => (
                    <tr>
                        <td>{state.user[index].key}</td>
                        <td>{state.user[index].firstName} {state.user[index].lastName}</td>
                        <td>
                            {/* <button onClick={(() => dispatch(getTok(state.user[index].key)))}>
                                Detail
                            </button> */}
            {/* <button onClick={(() => {del(state.user[index].key)})}>
                                Delete
                            </button>
                        </td>
                    </tr>
                )) 
                }    
            </tbody>
        </table> */}
            <form>
                <div>
                    <label>Keys </label>
                    <input
                        type="text"
                        value={key}
                        name="key"
                        onChange={(evt) => setKeys(evt.target.value)}
                        className="form-control"
                        placeholder="Keys"
                    />
                </div>
                <br />
                <div>
                    <label>First Name </label>
                    <input
                        type="text"
                        value={first}
                        name="first"
                        onChange={(evt) => setFirst(evt.target.value)}
                        className="form-control"
                        placeholder="First Name"
                    />
                    <br />
                </div>
                <div>
                    <label>Last Name </label>
                    <input
                        type="text"
                        value={last}
                        name="last"
                        validators={['required']}
                        errorMessages={['this field is required']}
                        onChange={(evt) => setLast(evt.target.value)}
                        className="form-control"
                        placeholder="Last Name"
                    />
                </div>
                <br></br>
                {/* <button
                    disabled={key === '' && first === '' && last === ''}
                    onClick={post}
                >
                    Post
                </button> */}
                <button
                    disabled={key === '' && first === '' && last === ''}
                    onClick={update}
                >
                    Update
                </button>
            </form>
            <br />
            {/* <Button basic color='green' onClick={post}>
                Create New
            </Button> */}
            <ModalPost />
            <ModDetail modalState={Object.keys(state.userOne).length}/>
            <CardList />
        </>
    )
}

export default Home