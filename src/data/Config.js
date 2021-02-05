const config = {
    admin:{

    },
    menuItems:[
        {
            name:'About1',
            children:[{
                name: 'Test',
                path:'/Test',
                children: []
            }]
        },
        {
            name:'About2',
            children:[{
                name: 'Test',
                path:'/Test',
                children: []
            }]
        },
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