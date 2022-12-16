import { useRouter } from 'next/router';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function laptop() {
    const { query } = useRouter();
    const [user, setUser] = useState({});
    // make request on page render or id change
    useEffect(() => {
        if (!query.id) {
            return;
        }
        axios
            .get(`https://jsonplaceholder.typicode.com/users/${query.id}`)
            .then((res) => {
                setUser(res);
            });
    }, [query.id]);
    return (
        <div>
            <h1>User info page</h1>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Username: {user.username}</p>
        </div>
    );
}

// called before rendering the html page
// export const getServerSideProps = async (context) => {
//     const { id } = context.query;
//     let res = await axios.get(
//         `https://jsonplaceholder.typicode.com/users/${id}`
//     );
//     return {
//         props: {
//             user: res.data,
//         },
//     };
// };
