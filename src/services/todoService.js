import axios from "axios";


const API_URL = "http://localhost:8000/tasks/"


export const getTodos = async() => {
    try {
        await new Promise(resolve => setTimeout(resolve, 1000));

        const response = await axios.get(API_URL + "list")
        return response.data
        
    } catch (error) {
        console.error(error)
    }
}

export const createTodo = async(data) => {
    try {
        const response = await axios.post(API_URL + "create",data)
        return response.data
        
    } catch (error) {
        console.error(error)
    }
}