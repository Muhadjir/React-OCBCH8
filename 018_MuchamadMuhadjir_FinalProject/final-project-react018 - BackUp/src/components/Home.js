import { useEffect, useState } from "react"
import { getAll, postData, deleteData, updateData, getWan } from "../store/action"
import { useSelector, useDispatch } from 'react-redux'


function Home() {
    const [key, setKeys] = useState('')
    const [first, setFirst] = useState('')
    const [last, setLast] = useState('')
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    useEffect(() => dispatch(getAll()), [])
    // useEffect(() => {
    //     if(Object.keys(state.userOne.keys).length > 0){
    //         setKeys(state.userOne.keys)
    //         setFirst(state.userOne.fisrt)
    //         setLast(state.userOne.last)
    //     }
    // }, [state.userOne])
    const getTok = (keys) => {
        dispatch(getWan(keys));
    }
    function post(){
        dispatch(postData(key, first, last))
        setKeys('')
        setFirst('')
        setLast('')
    }
    function update(){
        dispatch(updateData(key, first, last))
        setKeys('')
        setFirst('')
        setLast('')
    }
    function del(keysd){
        dispatch(deleteData(keysd))
    }

    return(
        <>
        <table>
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
                            {/* <button onClick={getTok(state.user[index].key)}>
                                Detail
                            </button> */}
                            <button onClick={(() => {del(state.user[index].key)})}>
                                Delete
                            </button>
                        </td>
                    </tr>
                )) 
                }    
            </tbody>
        </table>
        <form>
            <label>Keys </label>
            <input
                type="text"
                value={key}
                name="key"
                onChange={(evt) => setKeys(evt.target.value)}
                className="form-control"
                placeholder="Keys"
            />
            <label>First Name </label>
            <input
                type="text"
                value={first}
                name="first"
                onChange={(evt) => setFirst(evt.target.value)}
                className="form-control"
                placeholder="First Name"
            />
            <label>Last Name </label>
            <input
                type="text"
                value={last}
                name="last"
                onChange={(evt) => setLast(evt.target.value)}
                className="form-control"
                placeholder="Last Name"
            />
            <br></br>
            <button 
                disabled={key === '' && first === '' && last === ''}
                onClick={post}
            >
                Post
            </button>
            <button 
                disabled={key === '' && first === '' && last === ''}
                onClick={update}
            >
                Update
            </button>
        </form>
        </>
    )
}

export default Home