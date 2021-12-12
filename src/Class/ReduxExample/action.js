const createAction = (type, data) => {
    return {
        type: type,
        data: data
    }
}

const createAysncAction = (type, data, time) => {
    // 返回函数时dispatch会自动被赋值为store，使用此种方式实现异步需安装redux-thunk
    return (dispatch) => {
        setTimeout(() => {
            dispatch(createAction(type, data))
        }, time)
    }
}

export { createAysncAction, createAction };