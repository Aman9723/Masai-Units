import React, { ChangeEvent } from 'react';

type GENDER = 'MALE' | 'FEMALE' | 'OTHERS';
type User = {
    name: string;
    age: number;
    gender: GENDER;
};

const Form = () => {
    const [form, setForm] = React.useState<User>({
        name: '',
        age: 0,
        gender: 'MALE',
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    };
    return (
        <form>
            <input type="text" onChange={handleChange} />
        </form>
    );
};

export default Form;
