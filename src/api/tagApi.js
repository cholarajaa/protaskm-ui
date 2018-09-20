import {HttpClient} from './httpClient' 

// This is the API. The backend root URL can be set from here.

const API = 'http://localhost:8000/api'

//Setting the tags URI

const TAG_API = `${API}/tags/`

// The CRUD Operations of the Todo Resource.


//Create
const createTag = tag => {
    return HttpClient.post(TAG_API, tag)
}

//Read
const getTag = () => {
    return HttpClient.get(TAG_API)
}

// //Update
// const updateTag = tag => {
//     return HttpClient.put(`${TAG_API}${tag.id}/`, tag)
// }

// //Delete
// const removeTag = tag => {
//     return HttpClient.delete(`${TAG_API}${tag.id}/`)
// }


//Encapsulating in a JSON object

const TagApi = {createTag, getTag}
export {TagApi}