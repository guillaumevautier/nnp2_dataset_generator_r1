// console.dir() with full depth object display in the console
const bag = {
    pocket1 : {
        toilet_bag : [
            {
                main_pocket : [
                    {
                        sub_mini_pocket : [
                            "soap", "tooth brush"
                        ],
                    }
                ]
            },
            {
                right_pocket : [
                    "stuff..."
                ]
            }
        ]
    },
    pocket2 : [
        "clothes",
        "laptop"
    ]
};
console.dir(bag, {depth: null});