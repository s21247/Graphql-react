const products = [
    {
        id: "53a0724c-a416-4cac-ae45-bfaedce1f1k9",
        name: "Modern Shell Chair",
        description: "Designed for simplicity and made from high quality materials. Its sleek geometry and material combinations creates a modern personalized look.",
        price: 208.00,
        image: "https://savoy.nordicmade.com/wp-content/uploads/2015/08/product-classic-chair-680x844.jpg",
        categoryId: "34115aac-0ff5-4859-8f43-10e8db23602b"
    },
    {
        id: "c2af9adc-d0b8-4d44-871f-cef66f86f7z3",
        name: "Pendant Lamp",
        description: "Designed for simplicity and made from high quality materials. Its sleek geometry and material combinations creates a modern personalized look.",
        price: 89.00,
        image: "https://savoy.nordicmade.com/wp-content/uploads/2015/08/product-pendant-lamp-680x844.jpg",
        categoryId: "34115aac-0ff5-4859-8f43-10e8db23602b"
    },
    {
        id: "c2af9adc-d0b8-4d44-871f-cef66f86f7ll",
        name: "Canvas Basket",
        description: "Designed for simplicity and made from high quality materials. Its sleek geometry and material combinations creates a modern personalized look.",
        price: 39.00,
        image: "https://savoy.nordicmade.com/wp-content/uploads/2015/08/product-canvas-basket-680x844.jpg",
        categoryId: "34115aac-0ff5-4859-8f43-10e8db23602b"
    },
    {
        id: "c2af9adc-d0b8-4d44-871f-cef66f86f7n1",
        name: "Round Tray Table",
        description: "Designed for simplicity and made from high quality materials. Its sleek geometry and material combinations creates a modern personalized look.",
        price:79.00,
        image: "https://savoy.nordicmade.com/wp-content/uploads/2015/08/product-round-tray-table-680x844.jpg",
        categoryId: "34115aac-0ff5-4859-8f43-10e8db23602b"
    },
    {
        id: "c2af9adc-d0b8-4d44-871f-cef66f86f7n2",
        name: "Lighthouse Lantern",
        description: "Designed for simplicity and made from high quality materials. Its sleek geometry and material combinations creates a modern personalized look.",
        price:69.00,
        image: "https://savoy.nordicmade.com/wp-content/uploads/2015/08/product-round-tray-table-680x844.jpg",
        categoryId: "34115aac-0ff5-4859-8f43-10e8db23602b"
    },
    {
        id: "c2af9adc-d0b8-4d44-871f-cef66f86f7h5",
        name: "Wall Clock",
        description: "Designed for simplicity and made from high quality materials. Its sleek geometry and material combinations creates a modern personalized look.",
        price:79.00,
        image: "https://savoy.nordicmade.com/wp-content/uploads/2015/08/product-wall-clock-2-680x844.jpg",
        categoryId: "34115aac-0ff5-4859-8f43-10e8db23602b"
    },
    {
        id: "c2af9adc-d0b8-4d44-871f-cef66f86f7h6",
        name: "Hans Backpack",
        description: "Designed for simplicity and made from high quality materials. Its sleek geometry and material combinations creates a modern personalized look.",
        price:79.00,
        image: "https://savoy.nordicmade.com/wp-content/uploads/2015/08/product-hans-backpack-680x844.jpg",
        categoryId: "c01b1ff4-f894-4ef2-b27a-22aacc2fca70"

    },
    {
        id: "c2af9adc-d0b8-4d44-871f-cef66f86f7o4",
        name: "Specs Sunglasses",
        description: "Designed for simplicity and made from high quality materials. Its sleek geometry and material combinations creates a modern personalized look.",
        price:109.00,
        image: "https://savoy.nordicmade.com/wp-content/uploads/2015/08/product-specs-sunglasses-680x844.jpg",
        categoryId: "d914aec0-25b2-4103-9ed8-225d39018d1z"
    },
    {
        id: "c2af9adc-d0b8-4d44-871f-cef66f86f7o2",
        name: "Press Coffee Maker",
        description: "Designed for simplicity and made from high quality materials. Its sleek geometry and material combinations creates a modern personalized look.",
        price:39.00,
        image: "https://savoy.nordicmade.com/wp-content/uploads/2015/08/product-press-coffee-maker-680x844.jpg",
        categoryId: "d914aec0-25b2-4103-9ed8-225d39018d1z"
    },
    {
        id: "c2af9adc-d0b8-4d44-871f-cef66f86f7y1",
        name: "Door Bumper",
        description: "Designed for simplicity and made from high quality materials. Its sleek geometry and material combinations creates a modern personalized look.",
        price:29.00,
        image: "https://savoy.nordicmade.com/wp-content/uploads/2015/08/product-door-bumper-680x844.jpg",
        categoryId: "34115aac-0ff5-4859-8f43-10e8db23602b"
    },
    {
        id: "c2af9adc-d0b8-4d44-871f-cef66f86f7z1",
        name: "Laptop Bag",
        description: "Designed for simplicity and made from high quality materials. Its sleek geometry and material combinations creates a modern personalized look.",
        price:19.00,
        image: "https://savoy-webstack.netdna-ssl.com/wp-content/uploads/2015/08/product-laptop-bag-680x844.jpg",
        categoryId: "c01b1ff4-f894-4ef2-b27a-22aacc2fca70"

    },
    {
        id: "c2af9adc-d0b8-4d44-871f-cef66f86f7z2",
        name: "Plain Glass Bottle",
        description: "Designed for simplicity and made from high quality materials. Its sleek geometry and material combinations creates a modern personalized look.",
        price:12.00,
        image: "https://savoy.nordicmade.com/wp-content/uploads/2015/08/product-plain-glassbottle-680x844.jpg",
        categoryId: "d914aec0-25b2-4103-9ed8-225d39018d1z"
    },
    {
        id: "c2af9adc-d0b8-4d44-871f-cef66f86f7g2",
        name: "Ceramic Tealight Holder",
        description: "Designed for simplicity and made from high quality materials. Its sleek geometry and material combinations creates a modern personalized look.",
        price:28.00,
        image: "https://savoy.nordicmade.com/wp-content/uploads/2015/08/product-ceramic-tealight-holder-680x844.jpg",
        categoryId: "34115aac-0ff5-4859-8f43-10e8db23602b"
    },
    {
        id: "c2af9adc-d0b8-4d44-871f-cef66f86f7g1",
        name: "Havana Sunglasses",
        description: "Designed for simplicity and made from high quality materials. Its sleek geometry and material combinations creates a modern personalized look.",
        price:89.00,
        image: "https://savoy.nordicmade.com/wp-content/uploads/2015/08/product-havana-sunglasses-680x844.jpg",
        categoryId: "d914aec0-25b2-4103-9ed8-225d39018d1z"
    },
    {
        id: "c2af9adc-d0b8-4d44-871f-cef66f86f7f7",
        name: "Striped Canvas Bag",
        description: "Designed for simplicity and made from high quality materials. Its sleek geometry and material combinations creates a modern personalized look.",
        price:29.00,
        image: "https://savoy.nordicmade.com/wp-content/uploads/2015/08/product-striped-canvas-bag-680x844.jpg",
        categoryId: "c01b1ff4-f894-4ef2-b27a-22aacc2fca70"
    },
];

const categories = [
    {
        id: "c01b1ff4-f894-4ef2-b27a-22aacc2fca70",
        name: "Bags & Backpacks",
    },
    {
        id: "34115aac-0ff5-4859-8f43-10e8db23602b",
        name: "Decoration",
    },
    {
        id: "d914aec0-25b2-4103-9ed8-225d39018d1z",
        name: "Essentials",
    }
];

export const db = {
    categories,
    products
}