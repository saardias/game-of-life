import { AxiosError } from "axios";

export const handleAxiosError = (error: AxiosError) => {
    const { response } = error;
    return {
        status: response?.status,
        data: response?.data
    }
}
