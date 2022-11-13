import React, { ChangeEvent, FormEvent } from 'react';

type TodoInputProps = {
    onAdd: Function;
};

const TodoInput = (props: TodoInputProps) => {
    const { onAdd } = props;
    const [value, setValue] = React.useState<string>('');

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const handleSubmitEvent = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (value.length > 0) {
            onAdd(value);
            setValue('');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmitEvent}>
                <input
                    type="text"
                    placeholder="Add todo"
                    value={value}
                    onChange={handleOnChange}
                />
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default TodoInput;
