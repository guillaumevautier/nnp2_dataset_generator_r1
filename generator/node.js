/*
Generates all the possible type of nodes
for the nnp2 database.

common params:
- object def : the node definition
- returns : a NoSQL document (as a js object)
 */
import * as field from "./field.js";

/*
Child NATIVE Node Function Factory
 */
export function native(def) {
    let obj = {
        "node_type": "native"
    };

    field.id(def, obj);
    field.node_kind(def, obj);
    field.date(def, obj);
    field.title(def, obj);


    return obj;
}

/*
PRIME Node Function Factory
 */
export function prime(def) {
    let obj = {
        "node_type": "prime"
    };

    field.id(def, obj);
    field.node_kind(def, obj);
    field.date(def, obj);
    field.title(def, obj);

    return obj;
}