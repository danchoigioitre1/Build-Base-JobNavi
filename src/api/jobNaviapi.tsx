import axiosClient from "./apiClient";

const CallApi = {
    getSomething: (params: any): any => {
        const url = '';
        return axiosClient.get(url, params);
    },


    
}

export default CallApi;