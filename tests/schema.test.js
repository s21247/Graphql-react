import axios from 'axios'


const url = 'http://localhost:4000/'
describe('test resolvers', () => {
    test('getAllProducts', async () => {
        const response = await axios.post(url, {
            query: `
           query {
           products{
             id
             name
                   }
                  }`
        });

        const {data} = response
        expect(data).toMatchObject({
            data: {
                "products": [
                    {
                        "id": "test-1",
                        "name": "name"
                    },
                    {
                        "id": "test-2",
                        "name": "lamp"
                    },
                    {
                        "id": "test-3",
                        "name": "Basket"
                    }
                ]
            }
        });
    })
    test('getSingleProductById', async () => {
        const response = await axios.post(url, {
            query: `
            query {
  product(id:"test-1"){
    name
    description
    image
  }
}
`
        });

        const {data} = response
        expect(data).toMatchObject({
            "data": {
                "product": {
                    "name": "name",
                    "description": "description",
                    "image": "img-1"
                }
            }
        })
    })
    test('getAllCategories', async () => {
        const response = await axios.post(url, {
            query: `
            query {
  categories {
    id
    name
  }
}
           `
        });

        const {data} = response
        expect(data).toMatchObject({
            data: {
                "categories": [
                    {
                        "id": "Cattest-1",
                        "name": "Bags & Backpacks"
                    },
                    {
                        "id": "Cattest-2",
                        "name": "Decoration"
                    }
                ]
            }
        });
    })
})