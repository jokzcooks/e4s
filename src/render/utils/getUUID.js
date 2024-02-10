import { v4 as uuidv4 } from "uuid";

export const getUUID = () => {
    return uuidv4()
} 

export const getUUIDFile = (ext) => {
    return `${uuidv4()}.ext`
}