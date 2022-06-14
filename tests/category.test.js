import axios from "axios";

const url = 'http://localhost:4000/'
describe('Testing category query', () => {
    test('retrieve products under certain category', async () => {
        const query = `
        query {
  category(
    id: "Cattest-1"
  ){
    name,
    products {
      description
      name
    }
  }
}`
        const response = await axios.post(url, {
            query: query
        })
        const {data} = response;
        expect(data).toMatchObject({
            data: {
                "category": {
                    "name": "Bags & Backpacks",
                    "products": [
                        {
                            "description": "description",
                            "name": "name"
                        },
                        {
                            "description": "Its sleek",
                            "name": "Basket"
                        }
                    ]
                }
            }
        })
    })
})
