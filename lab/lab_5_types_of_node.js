const node_types = [
    {
        // space
    },
    {
        // prime (NoSQL document)
        node_type: "prime",
        id: "001",
        node_kind: "BDoc",
        title: "All Pets",
        node_layout: "inline",
        node_children: "tree",
        children: []
    },
    {
        // child native (sub NoSQL document)
        node_type: "native",
        id: "101-2 ",
        node_kind: "Pph",
        title: "my child native 1...",
        node_layout: "inline",
    },
    {
        // child reference (sub NoSQL document)
        node_type: "reference",
        id: "401-I1",
        node_kind: "Ite",
        title: "my child native 1...",
        node_layout: "card",
    },
    {
        // property (NoSQL document)
        node_type: "property",
        id: "801",
        title: "age",
        options: []
    },
    {
        // property option (NoSQL document)
        node_type: "option",
        id: "901",
        node_kind_short: "Prp",
        title: "black"
    }
];