import React from "react";

export default function Auth() {
    return (
        <form className="Auth">
               <label>
                Email:
                <input type="email" name="email" />
            </label>
            <label>
                Password:
                <input type="password" name="password" />
            </label>

            <button>Sign in</button>
            <button>Sign up</button>
        </form>
    )
}