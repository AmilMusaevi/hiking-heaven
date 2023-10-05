export function isObject (obj: any){
    if(obj === null || obj === undefined) return false;
    if(typeof obj !== "object" || Array.isArray(obj)) return false;
    
    return true;
}


export function hasObjectProperty(obj: any, property: string) {
    if(!isObject(obj)) return;

    // * Object keys return us to array that object current properties
    return Object.keys(obj).includes(property);
}