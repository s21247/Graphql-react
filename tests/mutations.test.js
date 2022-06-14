import axios from "axios";

const url = 'http://localhost:4000/'
describe('Mutations tests', () => {
    test("addProduct", async () => {
        const query = `mutation {
  addProduct(input: {
    name: "hello",
    description: "potate",
    price: 5,
    image: "img-5"
    categoryId: "555"
  }){
    name,
    image,
    description
  }
}`
        const response = await axios.post(url, {
            query: query
        })
        const {data} = response;
        expect(data).toMatchObject({
            data: {
                "addProduct": {
                    "name": "hello",
                    "image": "img-5",
                    "description": "potate"
                }
            }
        })
    })
    test("addCategory", async () => {
        const query = `
        mutation {
  addCategory(input:{
      name:"newCategory"
  }){
    name
  }
}
`
        const response = await axios.post(url, {
            query: query
        })
        const {data} = response;
        expect(data).toMatchObject({
            data: {
                "addCategory": {
                    "name": "newCategory"
                }
            }
        })
    })

    test("updateCategory", async () => {
        const query = `
        mutation {
  updateCategory(
    id:"Cattest-1",
    input:{
      name:"updatedCategory"
    }
  ){
    name
  }
}
`
        const response = await axios.post(url, {
            query: query
        })
        const {data} = response;
        expect(data).toMatchObject({
            data: {
                "updateCategory": {
                    "name": "updatedCategory"
                }
            }
        })
    })

    test("updateProduct", async () => {
        const query = `
        mutation {
  updateProduct(id: "test-1", input: {
    name: "newName"
    description: "newDescription",
    image: "newImage",
    price: 999999
  }){
    name,
    description
    image
    price
  }
}      
`
        const response = await axios.post(url, {
            query: query
        })
        const {data} = response;
        expect(data).toMatchObject({
            data: {
                "updateProduct": {
                    "name": "newName",
                    "description": "newDescription",
                    "image": "newImage",
                    "price": 999999
                }
            }
        })
    })
})