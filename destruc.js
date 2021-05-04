var voxel = {x:3.6 ,y:4.5, z:1.2};

var x = voxel.x;
var y = voxel.y;
var z = voxel.z;

const {x,y,z} = voxel;
console.log(z);
const {x: a,y: b,z: c} = voxel;
console.log(a);


const nest = {
    start : {x:1,y:5},
    end : {x:2,y:0}
};
const {start : {x:startX , y:startY}} = nest;
const { end : {x : endX , y: endY}} = nest;
console.log(startX);
console.log(endX);


const [,,,q,r,...rest] = [9,8,7,6,5,4,3,2,1,1,2,3].reverse();
console.log(q,r);
console.log(rest);