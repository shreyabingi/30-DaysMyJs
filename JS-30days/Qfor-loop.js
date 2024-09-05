const object = {
    a:1,
    b:2,
    c:3,
}

for (const properties in object ){
    console.log( `${properties}:${object[properties]}`);;
}


const object2 = {
    e:1,
    f:2,
    g:3,
}

for (let keys in object2 ){
    console.log( `${keys}:${object2[keys]}`);;
}