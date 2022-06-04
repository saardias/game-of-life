import ServerRoutes from './routes';
import axiosInstance from '../config/axios';
import { handleAxiosError } from './utils/common';

const getGameMetadata = async () => {
    try {
        const { status, data } = await axiosInstance.get(ServerRoutes.game.init);
        return { status, data };
    }
    catch (error: any) {
        const err = handleAxiosError(error);
        let message = 'Some error happen, please try again. If the error returns please contact support';
        switch (err.status) {
            case 500:
                message = 'Server error. Please contact support';
                break;
            default:
                break;
        }
        return {
            error: {
                message: message,
                status: err.status
            }
        };
    }
}

const gameApi = {
    getGameMetadata
}

export default gameApi;