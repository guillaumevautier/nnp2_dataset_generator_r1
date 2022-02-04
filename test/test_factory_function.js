function ref(obj) {
    return {
        // id: obj.id
        id: function() {return obj.id}()
    }
}

const node1 = ref({id: "4k26"});
console.log(node1.id);
console.log(node1.id2);

// function createObj() ({
//     name: 10
// })

let createObj = () => ({name: 10});

const myObj1 = createObj();
console.log(myObj1);