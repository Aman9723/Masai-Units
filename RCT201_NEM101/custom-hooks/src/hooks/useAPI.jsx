import React, { useEffect, useState } from 'react';

const useAPI = (apiFn, initialData) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState(initialData);

    const execute = async () => {
        setLoading(true);
        try {
            let data = await apiFn();
            setData(data);
        } catch (e) {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    const refetch = () => execute();

    useEffect(() => {
        execute();
    }, []);

    return { loading, error, data, refetch };
};

export default useAPI;
