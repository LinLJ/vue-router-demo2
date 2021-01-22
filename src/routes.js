import RouterDemo from './components/RouterDemo'
import RouterChildrenDemo from './components/RouterChildrenDemo'
const routes = [
    { path:'/',component:RouterDemo,name:'0'},
    { path:'/foo',component:RouterDemo,name:'1'},
    { path:'/user/:id',component:RouterDemo,name:'2',props:true,children:[{
        path:'profile',
        component:RouterChildrenDemo,
        name:'2-1'
    },{
        path:'posts',
        component:RouterChildrenDemo,
        name:'2-2'
    }]},
    { path:'/a',redirect:'/foo' },
    { path:'*',component:RouterDemo,name:'404'}

]

export default routes