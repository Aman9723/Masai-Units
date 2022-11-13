import React, { memo, useMemo } from 'react';

const Child = (props) => {
    console.log('child is rendered');

    const { count, updateCount } = props;

    console.time('t1');
    let number = useMemo(() => {
        let answer;
        for (let a = 1; a < 50000000 * 5; a++) {
            answer = a;
        }
        return answer;
    }, []);
    console.timeEnd('t1');

    return (
        <div>
            Child - {count}
            <button onClick={updateCount}>+</button>
        </div>
    );
};

export default memo(Child, (prevProps, nextProps) => {
    if (prevProps.count === nextProps.count) return true;
    return false;
});
