import Login from 'components/Login/index'
import Mapa from 'components/Mapa/index'
import Register from 'components/Register/index'
export const routes = [{
        path: '/',
        component: Mapa
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/register',
        component: Register
    }
]