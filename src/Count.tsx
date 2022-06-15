import { useState } from "react";

function Count() {

    const [count, setCount] = useState<number>(0);
    const [name, setName] = useState<string>("Fulano");

    const handleIncrement = () => {
        setTimeout(() => {
            setCount(prevState => prevState + 1);
        }, 1000);
    }

    return (
        <div>
            {count}{" "}
            <button onClick={handleIncrement}>+</button>
        </div>
    );
}

export default Count;