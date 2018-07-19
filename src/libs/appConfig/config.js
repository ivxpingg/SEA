import Env from './env';

let config = {
    env: Env,
    development: {
        // domain: 'http://localhost',
        // port: '8090',
        baseUrl: '/oceanobservation',
        staticUrl: '/',
        path: '/'    // 用于设置cookie
    },
    production: {
        // domain: 'http://localhost',
        // port: '8090',
        baseUrl: '/oceanobservation',
        staticUrl: '/',
        path: '/'    // 用于设置cookie
    }
};
export default config;