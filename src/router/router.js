import {createRouter, createWebHashHistory} from 'vue-router'

/* Carga pesada eager*/
import Inicio from '../pages/Inicio.vue'
import BuscarPorCedula from '../pages/BuscarPorCedula.vue'
import ActualizarCliente from '../pages/ActualizarCliente.vue'
import InsertarCliente from '../pages/InsertarCliente.vue'
import EliminarCliente from '../pages/EliminarCliente.vue'
import NoFound from '../pages/NoFound.vue'

const routes = [
    {path:'/',
     name: 'inicio',
     component: Inicio
    },
    {path:'/:pathMatch(.*)*',
     name: 'noFound',
     component: NoFound
    },
    {path:'/buscar',
     name: 'buscar',
     component: BuscarPorCedula
    },
    {path:'/actualizar',
     name:'actualizar',
     component: ActualizarCliente
    },
    {path:'/insertar',
     name:'insertar',
     component: InsertarCliente
    },
    {path:'/eliminar',
     name:'eliminar',
     component: EliminarCliente}
]

/*Carga perezosa (Lazy)*/


const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router