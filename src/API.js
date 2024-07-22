import axios from "axios";

const URL = "http://localhost:5000";

export async function getPosts() {
  const response = await axios.get(`${URL}/api/posts`);
  if (response.status === 200) {
    return response.data;
  } else {
    return;
  }
}

export async function getPost(id) {
  const response = await axios.get(`${URL}/api/post/${id}`);
  if (response.status === 200) {
    return response.data;
  } else {
    return;
  }
}

export async function createPost(post) {
  const response = await axios.post(`${URL}/api/posts`, post);
  return response;
}

export async function updatePost(id, post) {
  const response = await axios.put(`${URL}/api/post/${id}`, post);
  return response;
}

export async function deletePost(id) {
  const response = await axios.delete(`${URL}/api/post/${id}`);
  return response;
}

export async function getUser(id) {
  const response = await axios.get(`${URL}/api/user/${id}`);
  if (response.status === 200) {
    return response.data;
  } else {
    return;
  }
}

export async function createUser(user) {
  const response = await axios.post(`${URL}/api/users`, user);
  return response;
}

export async function verifyUser(user) {
  const response = await axios.post(`${URL}/api/login`, user);
  if (response.data.success) {
    return response.data.token;
  } else {
    return;
  }
}

export async function createImage(file) {
  const formData = new FormData();
  formData.append("image", file);
  const response = await axios.post(`${URL}/api/images/`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response;
}

export async function getImage(id) {
  const response = await axios.get(`${URL}/api/images/${id}`);
  return response;
}
