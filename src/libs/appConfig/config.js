import Env from './env';

let config = {
    env: Env,
    development: {
        // domain: 'http://localhost',
        // port: '8090',
        baseUrl: '/metrosupervision',
        staticUrl: '/'
    },
    production: {
        // domain: 'http://localhost',
        // port: '8090',
        baseUrl: '/metrosupervision',
        staticUrl: '/'
    }
};
export default config;