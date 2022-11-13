import React, { ReactNode } from 'react';

type TodoItemProps = {
    id: number;
    content: string;
    isCompleted: boolean;
    toggleStatus: Function;
    // deleteTodo: (id: number) => void;
    completedIcon: any;
    inCompleteIcon: JSX.Element;
    deleteIcon: ReactNode;
};

const Todo = ({
    id,
    content,
    isCompleted,
    toggleStatus,
    completedIcon,
    inCompleteIcon,
    deleteIcon,
}: TodoItemProps) => {
    return (
        <div
            style={{
                display: 'flex',
                gap: '10px',
                margin: 'auto',
                justifyContent: 'center',
            }}
        >
            <div>
                <div onClick={() => toggleStatus(id)}>
                    <span>{content}</span>
                    ----
                    <span>{isCompleted ? completedIcon : inCompleteIcon}</span>
                </div>
                {deleteIcon}
            </div>
        </div>
    );
};

export default Todo;
