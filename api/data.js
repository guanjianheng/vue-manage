import axios from "./axios"

export const getMenu = (params) => {
    return axios.request({
        url: '/permission/getMenu',
        methods: 'post',            //原来是post
        data: params
    })
}

export const getData = () => {
    return axios.request({
        url: '/home/getData',
        method: 'get'
    })
}

export const getUser = (params) => {
    return axios.request({
        url: '/user/getUser',
        method: 'get',
        params
    })
}

// export const getMenu = (params) => {
//     return axios.request({
//         url: '/permission/getMenu',
//         methods: 'post',
//         data: param
//     })
// }