import Login from 'components/Login/index'
import Mapa from 'components/Mapa/index'
import Register from 'components/Register/index'
import Nosotros from 'pages/Nosotros.js'
export const routes = [{
        path: "/",
        exact: true,
        component: Mapa
    },
    {
        path: "/nosotros",
        exact: true,
        component: Nosotros
    },
    {
        path: '/login',
        exact: true,
        component: Login
    },
    {
        path: '/register',
        exact: true,
        component: Register
    }
]