//Creating a dynamic Object that can store and modify properties.
function ObjectWithDynamicKey(key: string, value: string){
   let dynamicObject = {}
   dynamicObject[key] = value;
   return dynamicObject;
}

console.log(ObjectWithDynamicKey("Name", "Owais Abdullah"));