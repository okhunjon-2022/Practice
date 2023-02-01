import Home from "../router/home/Home"
import Vizi from "../router/vizi/Vizi"
import Atzivi from "../router/atzivi/Atzivi"
import Contact from "../router/contact/Contact"
import Stati from "../router/stati/Stati"
import Vacancy from "../router/vacancy/Vacancy"



export const ROUTERS=[
    {
        id:1,
        title:"Главная",
        link:"/",
        element:<Home/>
    },
    {
        id:2,
        title:"Визы",
        link:"/vizi",
        element:<Vizi/>
    },
    {
        id:3,
        title:"Вакансии",
        link:"/vacancy",
        element:<Vacancy/>
    },
    {
        id:4,
        title:"Отзывы",
        link:"/atzivi",
        element:<Atzivi/>
    },
    {
        id:5,
        title:"Статьи",
        link:"/stati",
        element:<Stati/>
    },
    {
        id:6,
        title:"Контакты",
        link:"/contact",
        element:<Contact/>
    },
]