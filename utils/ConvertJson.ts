function ConvertJson(json: { [key: string]: any }) {
    let result: { [key: string]: any } = {}
    for (const key in json) {
        if (key === "Top10 species(Bacteria)") {
            const k = Object.keys(json[key])
            k.forEach((innerKey, i) => {
                result[`b${i + 1}`] = innerKey
                result[`bv${i + 1}`] = json[key][innerKey]
            })
        }
    }
    return result
}

export default ConvertJson
