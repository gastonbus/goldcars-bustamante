const productsPromise = (task) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(task);
        }, 2000)
    })
}

export default productsPromise;