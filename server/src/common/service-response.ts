
interface IResponse {
    status?: number;
    data?: any;
}

export const responseWrapper = (status: number, data: unknown): IResponse => {
    const responseObject = {};
    responseObject['status'] = status;
    responseObject['data'] = data;
    return responseObject;
};

export const responseSuccess = (data: any) => {
    return responseWrapper(200, data);
};

export const responseError = (status: number, error: unknown, details = undefined) => {
    if (details) {
        return responseWrapper(status, { error, details });
    }
    return responseWrapper(status, { error });
};

export const SERVER_ERROR = 'Server error';