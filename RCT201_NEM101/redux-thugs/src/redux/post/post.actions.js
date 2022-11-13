import { GET_POSTS } from './post.types';

import axios from 'axios';

export const getPosts = () => async (dispatch) => {
    let response = await axios.get('http://localhost:8080/posts');
    return dispatch({ type: GET_POSTS, payload: response.data });
};
