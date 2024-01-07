export const saveToken = (token) => {
    return {
        type: 'saveToken',
        payload: token
    }
}
export const remover = () => {
    return {
        type: 'remove',

    }
}