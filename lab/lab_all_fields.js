const allFields = {
    _id: "#",
    // (_id_friendly)
    template_id: "#",
    prime_id: "#",
    parent_id: "#",
    creation_date: new Date(),
    update_date: new Date(),
    node_type: "node type",
    node_kind: "node kind",
    title: "my generic node 1",
    bind_master_old_dgn1: {
        root_id: "#",
        child_id: "#"
    },
    binds_old_dgn1: [
        {
            root_id: "#",
            child_id: "#"
        },
    ],
    section_list: [
        {
            title: "section 1",
            list_position: 1,
            is_active: true,
        }
    ],
    child_list: [
        {
            _id: "#",
            creation_date: "YYYY-mm-ddTHH:MM:ss",
            update_date: "YYYY-mm-ddTHH:MM:ss",
            node_type: "generic",
            prime_id: "#",
            binding: "master/bind",
            title: "child 1",
            tree_position: "1.1", // first digit is the section
            node_layout: "children",
            node_layout_option_list: {},
            children_layout: "tree",
            children_layout_option_list: {}
        }
    ],
    user_property_list: [
        {
            user_property_id: "#",
            list_position: 1,
            value_list: [
                "primitive 1",
                {"prime_id": "#"}
            ]
        }
    ],
    option_type: "string",
    option_manual_selection: [
        {"prime_id": "#"}
    ],
    option_specific: [
        {"prime_id": "#"}
    ],
    option_is_multi_selection: false,
    view_list: [
        {
            title: "view 1",
            list_position: 1,
            is_active: true,
            selected_layout_id: 0,
            selected_query_id: 0,
        }
    ],
    layout_list: [
        {
            _id: "#",
            node_layout: "children",
            node_layout_option_list: {},
            children_layout: "tree",
            children_layout_option_list: {}
        }
    ],
    query_list: [
        {
            _id: "#",
            mongo_db_query: ""
        }
    ]
}