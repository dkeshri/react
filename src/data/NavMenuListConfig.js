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
                path: '/Test',
                children: []
            }]
        },
        {
            name: 'CSS',
            children: [{
                name: 'Gradient',
                path: '/Test',
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
            name: 'AboutUS',
            children: [{
                name: 'About',
                path: '/Test',
                children: []
            }]
        }
    ]
}
export { config }