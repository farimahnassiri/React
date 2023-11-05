import { useState } from "react";

const Greeting = () => {
    const [changedText, setChangedText] = useState(false);

    const changedTextHandler = () => {
        setChangedText(true);
    };

    return (
        <div>
            <h2>Hello World!</h2>
            {!changedText && <p>It's good to see you!</p>}
            {changedText && <p>Changed!</p>}
            <button onClick={changedTextHandler}>Change Text!</button>
        </div>
    );
};

export default Greeting;