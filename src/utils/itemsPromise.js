const getItems = (itemsArray) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (itemsArray.length > 0) {
                resolve(itemsArray);
            } else {
                reject("Error al obtener los datos")
            }
        }, 2000)
    })
}

export default getItems;