const isEmpty = (obj) => {
    for (let i in obj) return true;
    return false
}
export default isEmpty