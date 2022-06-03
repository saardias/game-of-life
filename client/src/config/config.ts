
const dev = {
    apiGateway: {
        API_SERVER_URL: "ttp://localhost:8080"
    }
};

let config = dev;

let exportConfig = {
    APP_VERSION: 0.1,
    ...config
};

export default exportConfig;