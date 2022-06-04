import { AxiosError } from "axios";

export const handleAxiosError = (error: AxiosError) => {
    const { response } = error;
    return {
        status: response?.status,
        data: response?.data
    }
}

// export const getParamsUrl = (baseUrl: string, params: { [key: string]: any }) => {
//     let url = baseUrl;
//     type keyType = keyof typeof params;

//     let keys = Object.keys(params) as keyType[];
//     let index = 0;
//     for (let key of keys) {
//         if (index) {
//             url += `&${key}=${params[key]}`
//         } else {
//             url += `?${key}=${params[key]}`
//         }
//         index++
//     }
//     return url;
// }