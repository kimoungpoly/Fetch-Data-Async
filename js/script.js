import { cardProduct } from "../components/cardProduct.js"
import {cardUser} from "../components/cardUser.js"
import {getData} from "../store/fetchApi.js"
const renderArea = document.querySelector('#product-area')
const userArea = document.querySelector('#user-area')
// products
const products = await getData("products")
//users
const users = await getData("users")
products.map((product)=>{
    renderArea.innerHTML += cardProduct(product);
})

users.map((user)=>{
    userArea.innerHTML += cardUser(user);
})