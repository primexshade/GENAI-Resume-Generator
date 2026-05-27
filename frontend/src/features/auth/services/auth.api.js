import axios from "axios"

// we use axios.create to remove the repetitive part of the code in axios
axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: True // as it reacts with the cookie so we use withCredentials: true
})

export async function register( {username, email, password}) {

    try{
        const response = api.post('/api/auth/register',{
            username, email, password
        })

        return response.data

    } catch(err){

        console.log(err)
    }
    
}


export async function login({email, password}){
    try{

        const response = await api.post('/api/auth/login',{
            email,password
        }) 

        return response.data

    }catch(err){
        console.log(err)
    }
}

export async function logout(){
    try{

        const response = await api.get('/api/auth/logout')

    }catch(err){
        console.log(err)
    }
}

export async function getMe() {
    
    try{

        const response = await api.get('/api/auth/get-me')

    }catch (err){
        console.log(err)
    }
}