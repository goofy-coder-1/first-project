let cartItems = [
    {
        name: "Ramesh",
        product: [
            {title : "laptop", price: 10000},
            {title : "mobile", price: 7000},
            {title : "watch", price: 100},
        ],
    },
    {
        name: "Dinesh",
        product: [
            {title : "laptop", price: 10000},
            {title : "Mouse", price: 70},
            {title : "watch", price: 100},
        ],
    },
    {
        name: "Saurabh",
        product: [
            {title : "TV", price: 10000},
            {title : "mobile", price: 7000},
            {title : "watch", price: 100},
        ],
    },
    {
        name: "Bishnu",
        product: [
            {title : "Phone", price: 10000},
            {title : "mobile", price: 7000},
            {title : "watch", price: 100},
        ],
    },
];

cartItems.map((item) => {
    const total = item.product.reduce((acc, i) => acc + i.price, 0);
  console.log(item.name, total);
});

const cartItems1 = [
    {
        name: "Jeans",
        price: 1000,
    },
    {
        name: "Jeans",
        price: 1000,
    },
    {
        name: "Jacket",
        price: 1000,
    },
    {
        name: "Belts",
        price: 1000,
    },

];
cartItems1.map((items) => {
    const total = items.price.reduce((acc, i) => acc + i.price, 0);
    console.log(item.price, total);
});