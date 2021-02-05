const config = {
    admin:{

    },
    menuItems:[
        {
            id:'1',
            name:'Home',
            children:[{
                id: 'sunfolder',
                name: 'TestUrl',
                path:'/Test',
                children: []
            }]
        },
        {
            id:'2',
            name:'About',
            children:[{
                id: 'sunfolder2',
                name: 'Home',
                path:'/Home',
                children: []
            }]
        }
    ]
}
export {config}