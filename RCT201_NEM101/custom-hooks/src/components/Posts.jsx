import React, { useEffect, useState } from 'react';
import useAPI from '../hooks/useAPI';
import axios from 'axios';
import useDelayedAPI from '../hooks/useDelayedAPI';

const getPosts = async () => {
    let response = await axios.get('http://localhost:8000/posts');
    let data = response.data;
    return data;
};

const deletePost = async (id) => {
    let response = await axios.get(`http://localhost:8000/posts/${id}`);
    let data = response.data;
    return data;
};
const Posts = () => {
    const { loading, error, data, refetch } = useAPI(getPosts, []);
    const { loading: deleteLoading, execute } = useDelayedAPI(deletePost, []);

    if (loading || deleteLoading) return <div>Loading...</div>;
    else if (error) return <div>Error</div>;
    return (
        <div>
            <h1>Posts</h1>
            <button onClick={refetch}>Refresh</button>
            <div>
                {data.map((post) => (
                    <div key={post.id}>
                        <div>
                            <span>{post.message}</span>
                            <button
                                onClick={() => {
                                    execute(post.id).then(() => {
                                        refetch();
                                    });
                                }}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Posts;
