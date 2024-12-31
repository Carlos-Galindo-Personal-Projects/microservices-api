const services = [
    {
        route: '/users',
        target: process.env.API_USERS_ROUTE,
    },
    {
        route: '/products',
        target: process.env.API_PRODUCTS_ROUTE,
    },
    {
        route: '/categories',
        target: process.env.API_CATEGORIES_ROUTE,
    }
]

export default services;
