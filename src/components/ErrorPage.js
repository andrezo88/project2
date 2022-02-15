import React from 'react'
import { Link } from 'react-router-dom'

export const ErrorPage = () => {
    return (<>
        <div>Page not found</div>
        <Link to={"/"}><button>Home</button></Link>
    </>
    )
}
