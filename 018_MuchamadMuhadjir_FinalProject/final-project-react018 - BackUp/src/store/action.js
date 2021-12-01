import swal from 'sweetalert'
const base_url = "http://localhost:5000";

export function getAll(){
    return (dispatch) =>{
        fetch(`${base_url}/debug`)
        .then((response) => response.json())
        .then((data) => dispatch({
            type:'GET_ALL',
            payload: data
        }))
    }
}
export function getWan(keys){
    const request = {
        method:'GET',
        headers: { 'Content-Type': 'application/json'},
    }
    return (dispatch) =>{
        fetch(`${base_url}/keys/`+keys, request)
        .then((response) => response.json())
        .then((data) => dispatch({
            type:'GET_WAN',
            payload: data
        }))
    }
}

export function postData(keys, first, last){
    const request = {
        method:'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
            key: keys,
            firstName: first,
            lastName: last
        })
    }
    // console.log(request)
    return (dispatch) =>{
        fetch(`${base_url}/keys`, request)
        .then((response) => {
            // console.log(response)
            if(response.status === 400){
                swal("ERROR", "Key is already exist", "error")
            }
        })
        .then(() => dispatch(getAll()))
    }
}

export function updateData(keys, first, last){
    const request = {
        method:'PUT',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
            key: keys,
            firstName: first,
            lastName: last
        })
    }
    // console.log(request)
    return (dispatch) =>{
        fetch(`${base_url}/keys/`+keys, request)
        .then((response) => {
            // console.log(response)
            if(response.status === 400){
                swal("ERROR", "Key doesn't exist", "error")
            }
        })
        .then(() => dispatch(getAll()))
    }
}

export function deleteData(keys){
    const request = {
        method:'DELETE',
        headers: { 'Content-Type': 'application/json'},
    }
    // console.log(request)
    // console.log('Cek ID'+keys)
    return (dispatch) =>{
        // console.log(dispatch)
        fetch(`${base_url}/keys/`+keys, request).then(() => dispatch(getAll()))
        // fetch(`${base_url}/keys/`+keys, request).then(res => console.log(res))
    }
}
