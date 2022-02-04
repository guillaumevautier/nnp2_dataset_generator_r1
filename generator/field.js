/*
Generate NoSQL pre-made field
common params:
object def : the node definition
object obj : the NoSQL document to add the field to
 */
import { v4 as uuidv4 } from 'uuid';
import common from "../common.js";


/* id field */
export function id(def, obj) {
    // if (def.hasOwnProperty("id") && def.id)
    if (def.id !== undefined && def.id) {
        if (def.id === "#") obj["_id"] = uuidv4();
        // if (def.id === "#") Object.assign(obj, {["_id"]: uuidv4()});
        else obj["_id"] = def.id;
        // else Object.assign(obj, {["_id"]: def.id});
    }
}

/* node_kind & node_kind_long field */
export function node_kind(def, obj) {
    let kind_prefix = "";
    let kind_prefix_long = "";
    let kind_suffix = "";
    let kind_suffix_long = "";

    // set prefix...
    if (obj.node_type === "prime") {
        kind_prefix = "p";
        kind_prefix_long = "prime"
    }
    else if (obj.node_type === "reference") {
        kind_prefix = "r";
        kind_prefix_long = "reference";
    }
    else if (obj.node_type === "native") {
        kind_prefix = "n";
        kind_prefix_long = "native";
    }
    else return "";

    // todo: code all remaining cases
    // set suffix...
    if (def.parent_id === common.prime_space_id) {
        kind_suffix = "BDox";
        kind_suffix_long = "base document";
    }
    else {
        kind_suffix = "Unk";
        kind_suffix_long = "Unknown (bug!)";
    }

    Object.assign(obj, {
        ["node_kind"]: kind_prefix + kind_suffix,
        ["node_kind_long"]: kind_prefix_long + " " + kind_suffix_long
    });
}

/* creation_date & update_date field */
export function date(def, obj) {
    // todo: find a random date generator library
    Object.assign(obj, {
        ["creation_date"]: "0000-00-00T00:00:00",
        ["update_date"]: "0000-00-00T00:00:00"
    });
}

/* title field */
export function title(def, obj) {
    if (def.title !== undefined && def.title) {
        obj["title"] = def.title;
    } else {
        obj["title"] = "no title";
    }
}
