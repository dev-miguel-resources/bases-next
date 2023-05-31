export const delay = (time: number) => {
    return new Promise((resolve, _reject) => {
        setTimeout(() => resolve(1), time)
    })
}