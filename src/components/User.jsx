import { useState } from "react";

const User = () => {

    const [count] = useState(0);

    return (
        <div className="user-card">
            <h4>Count: {count}</h4>
            <h4>Name: Avinash Kumar</h4>
            <h5>Location: Gaya</h5>
            <h5>Contact: @avinashkr.js</h5>
        </div>
    )
}

export default User;