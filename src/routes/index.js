export default [
    {
        path: '/',
        async(routeTo, routeFrom, resolve, reject) {
            // dynamic import component; returns promise
            const vueComponent = () => import('../components/HelloWorld');
            // resolve promise
            vueComponent().then((vc) => {
                // resolve with component
                resolve({ component: vc.default })
            });
        },
    }
]