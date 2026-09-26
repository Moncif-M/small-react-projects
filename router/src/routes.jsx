import App from './App.jsx'
import Profile from './Profile.jsx'
import ErrorPage from './ErrorPage.jsx'

import Spinach from './Spinach.jsx'
import Popeye from './Popeye.jsx'

export const routes = [
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage/>
    },
    {
        path: "profile/:name",
        element: <Profile/>,
    },
    {
        path: "profile",
        element: <Profile/>,
        children: [
            { path: "spinach", element: <Spinach /> },
            { path: "popeye", element: <Popeye /> },
        ]
    },
]
