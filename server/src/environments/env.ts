
const serverName = "game-of-life-server";
const serverVersion = "0.1";

const configurationObject = {
    dev: {
        serverName,
        serverVersion,
        env: 'dev',
        port: 8080,

        numOfColumns: 50,
        numOfRows: 50,
    }
}

const environment = () => {
    const envKey = process.env.NODE_ENV ? process.env.NODE_ENV.trim() || 'dev' : 'dev';
    return configurationObject[envKey];
}

export default environment;