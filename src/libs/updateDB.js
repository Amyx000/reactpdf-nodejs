const model = require('../db/model')


const updateStatusandTime = async (id, url) => {
    try {
        const resdata = await model.findOne({ _id: id })
        const startTime = resdata.creationDate.getTime()
        const currentTime = new Date().getTime()
        await model.findByIdAndUpdate(id, { status: "completed", completionTime: (currentTime - startTime) / 1000, fileUrl: url }, { new: true })

    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    updateStatusandTime
}
