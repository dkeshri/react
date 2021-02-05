const config = {
    admin:{

    },
    menuItems:[
        {
            name:'Home',
            path:'/Home'  
        },
        {
            name:'About',
            children:[{
                name: 'Test',
                path:'/Test',
                children: []
            }]
        }
    ]
}
export {config}