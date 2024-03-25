//creating type alias for shapes with different details of shapes

type shape = {
    kind: "rectangle" | "circle";
    radius?: number;
    height?: number;
    width?: number;
}

let rectangle: shape = {
    kind: "rectangle",
    height: 10,
    width: 20
} 

let circle: shape = {
    kind: "circle",
    radius: 10
}

console.log(circle);
console.log(rectangle);

