const config = {
    menuItems: [
        {
            name: 'Home',
            path: '/Home'
        },
        {
            name: 'Test',
            path: '/Test'
        },
        {
            name: 'Components',
            children: [{
                name: 'Froms',
                children: [
                    {
                        name: 'Formic',
                        path: '/Components/Forms/Formic'
                    }
                ]
            }]
        },
        {
            name: 'Javascript Concepts',
            children: [{
                name: 'Array Destructuring',
                path: '/Test1',
                children: []
            }]
        },
        {
            name: 'CSS',
            children: [{
                name: 'Gradient',
                path: '/Test2',
                children: []
            }]
        },
        {
            name: 'HooksConcepts',
            children: [{
                name: 'CustomHooksDemo',
                path: '/CustomHooksDemo',
                children: []
            }]

        },
        {
            name: 'DatabaseConcept',
            children: [{
                name: 'Dexie Database',
                path: '/Database/Dexie',
                children: []
            }]

        },
        {
            name: 'Pages',
            children: [{
                name: 'Login',
                path: '/Login',
                children: []
            }]
        },
        {
            name: 'Api',
            children: [{
                name: 'JsonPlaceHolder',
                children: [{
                    name:'JsonPlaceHolder User',
                    path:'/Api/JsonPlaceHolder/Users'
                }]
            }]
        },
        {
            name: 'AboutUS',
            path:'/About',
            children: []
        }
    ]
}
export { config }