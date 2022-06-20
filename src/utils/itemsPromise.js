const itemsPromise = (itemsArray) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(itemsArray);
        }, 2000)
    })
}

export default itemsPromise;