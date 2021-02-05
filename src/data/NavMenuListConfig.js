const config = {
    menuItems: [
        {
            name: 'Components',
            children: [{
                name: 'From1',
                path: '/Test',
                children: []
            }]
        },
        {
            name: 'Javascript Concepts',
            children: [{
                name: 'Test',
                path: '/Test',
                children: []
            }]
        },
        {
            name: 'CSS',
            children: [{
                name: 'Test',
                path: '/Test',
                children: []
            }]
        },
        {
            name: 'About1',
            children: [{
                name: 'Test',
                children: [{
                    name: 'About2',
                    children: [{
                        name: 'Test',
                        children: [

                            {
                                name: 'Test',
                                children: [{
                                    name: 'About2',
                                    children: [{
                                        name: 'Test',
                                        children: [




                                        ]
                                    }]
                                }, {
                                    name: 'Link1',
                                    path: '/Test'
                                }]
                            }


                        ]
                    }]
                }, {
                    name: 'Link1',
                    path: '/Test'
                }]
            }]
        },
        {
            name: 'About2',
            children: [{
                name: 'Test',
                path: '/Test',
                children: []
            }]
        },
        {
            name: 'Home',
            path: '/Home'
        },
        {
            name: 'About',
            children: [{
                name: 'Test',
                path: '/Test',
                children: []
            }]
        }
    ]
}
export { config }