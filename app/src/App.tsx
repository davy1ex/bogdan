import { useState } from "react";
import bogdan from "./assets/bogdan.png";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div>
                <img src={bogdan} alt="" />
            </div>
        </>
    );
}

export default App;
