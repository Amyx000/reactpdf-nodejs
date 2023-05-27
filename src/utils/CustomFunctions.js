import path from "path"
import fs from 'fs'

export const ImgToBase64 = (dirpath, imgfilename, foldername = "assets") => {
    const imgbase64 = fs.readFileSync(path.join(dirpath, `./${foldername}/${imgfilename}`), { encoding: 'base64' })

    return `data:image/png;base64,${imgbase64}`
}
