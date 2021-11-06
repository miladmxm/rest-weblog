export const findPost = (id ,posts) => {
    const post = posts.filter((item) => {
        return item._id === id
    })
    return post
}

export const findeByCategory = (category ,posts) => {
    const post = posts.filter((item) => {
        return item.category === category
    })
    return post
}