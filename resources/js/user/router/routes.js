import Home from "../views/Home";
import Search from "../views/Search";
import Full from "../views/Search/results/full_description";
import Chat from "../views/Chat";
export default [
{
    path: '/',
    component: Home,
    name: 'home',
    meta:{
        footer:true
    }
},
{
    path:'/search',
    component:Search,
    name:'search'
},
{
    path:'/full',
    component:Full
},
{
    path:'/chat',
    component:Chat
},
{
    path:'*',
    redirect:{name:'home'}
},
];
