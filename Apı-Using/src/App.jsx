import { useEffect } from 'react'
import './App.css'
import axios from 'axios'


function App() {
  
  const BASE_URL = 'http://localhost:3005'

  const getAllUsers = async() => {
    const response = await axios.get(BASE_URL + '/users');
    console.log(response.data);
  }

  const getUserById = async (userId) => {
    const response = await axios.get(BASE_URL + '/users/' + userId);
    console.log(response.data);
    return response.data;
  }

  const createUser = async (newUser) => {
    const response = await axios.post(`${BASE_URL}/users`, newUser);
    console.log("response ", response.data);
  }

  const updateUser = async (userId, updatedUser) => {
    const response = await axios.put(`${BASE_URL}/users/${userId}`, updatedUser);
    console.log("response ", response.data);
  }

  const deleteUser = async (userId) => {
    const response = await axios.delete(`${BASE_URL}/users/${userId}`);
    console.log("response ", response.data);
  }

  const getUserByIdTwo = async (userId) => {
    const response = await axios.get(`${BASE_URL}/users/${userId}`);
    return response.data.postId;
  }

  const getPostById = async (postId) => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts/" + postId);
    return response.data;
  }

  const getPost = async () => {
    const postId = await getUserByIdTwo(1);
    const postData = await getPostById(postId);
    console.log(postData);
  }

  useEffect(() => { 
    //getAllUsers(); 

    // const newUser = {
    //   "username": "Ahmet",
    //   "paswword": "123456"
    // }
    // createUser(newUser);

    // updateUser("a71c", {
    //   "username": "Sincap",
    //   "paswword": "1453"
    // })

    //deleteUser("1");

    getPost();
  }, [])

  return (
    <div></div>
  )
}

export default App
