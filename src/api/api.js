import service from '../utils/service.js'
import qs from 'qs'
//登录接口
export function login(data) {
    return service({
        method: 'post',
        url: '/login',
        data
    })
}
//学生列表的查询接口
export function students(params) {
    return service({
        method: 'get',
        url: '/students',
        params
    })
}
//学生列表删除接口
export function studentDel(id) {
    return service({
        method: 'delete',
        url: `/students/${id}`,
        id
    })
}


//查询重置接口(直接用已有的接口，重置直接将查询里传的数据清空然后在赋予)



//信息列表新增接口
// export function info(data) {
//     data = qs.stringify(data)
//     return service({
//         method: 'post',
//         url: '/info',
//         data
//     })
// }






//信息列表新增和修改接口，进行封装
export function info(type, data) {
    data = qs.stringify(data)
    let obj = { method: type, url: '/info', data }
    return service(obj)
}




//信息列表查询接口
//查询所有数据不需要传参
//请求接口内不需要data
export function getInfo() {
    return service({
        method: 'get',
        url: '/info',
    })
}



// //修改表单接口
// export function updateInfo(data) {
//     data = qs.stringify(data)
//     return service({
//         method: 'put',
//         url: '/info',
//         data
//     })
// }



//信息列表的删除接口
export function infoDel(id) {
    return service({
        method: 'delete',
        url: `/info/${id}`,
    })
}

//数据概览的接口
export function dataview() {
    return service({
        method: 'get',
        url: '/dataview'
    })
}
//旅游地图接口
export function travel() {
    return service({
        method: 'get',
        url: '/travel'
    })
}