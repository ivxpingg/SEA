import Env from './env';

let config = {
    env: Env,
    development: {
        // domain: 'http://localhost',
        // port: '8090',
        baseUrl: '/oceanobservation',
        staticUrl: '/',
        path: '/',    // 用于设置cookie
        homeSeaBaseUrl_person: 'http://xmsoc.com:20507',
        homeSeaBaseUrl_manage: 'http://xmsoc.com:20506'
    },
    production: {
        // domain: 'http://localhost',
        // port: '8090',
        baseUrl: '/oceanobservation',
        staticUrl: '/',
        path: '/',    // 用于设置cookie
        homeSeaBaseUrl_person: 'http://xmsoc.com:20507',
        homeSeaBaseUrl_manage: 'http://xmsoc.com:20506'
    }
};
export default config;