import * as api from '../api'

// api.fetchPosts
export const getPosts = () => async(dispatch) =>{
    try {
        const {data} = await api.fetchPosts();
        dispatch({type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log({message: error.message})
    }
   
    // const action = { type: 'FETCH_ALL', payload: [] }
    
    
    // return action;
}
export const createPost = (post) => async(dispatch)=>{
    try {
        const {data} = await api.createPost(post);
        dispatch({type: 'CREATE', payload: data });
    } catch (error) {
        console.log({message: error.message})
    }

}