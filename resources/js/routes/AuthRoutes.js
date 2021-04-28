import axios from 'axios';

const apiUrl = "http://127.0.0.1:8000/api/auth/";

const register = (firstName, lastName, email, password) => {
    return axios.post(apiUrl + 'signup', {firstName, lastName, email, password });
};

const login  = (email , password)=> {
    return axios.post(apiUrl + 'signin', { email , password } )
                .then ( (response) => {
                    if(response.data.user){
                        localStorage.setItem('userToken',JSON.stringify(response.data))
                    }

                    return response.data;
                } )
}

const forgetPassword = (email) => {
    return axios.post(API_URL + "forget-password", { email });
  };

  
  const resetPassword = (id,password) => {
    return axios.post(API_URL + "reset-password", { id,password });
  };
  
  const logout = () => {
    localStorage.removeItem("user");
  };


  const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
  };
  
  const verifyUser = (code) => {
    return axios.get(API_URL + "confirm/" + code).then((response) => {
      return response.data;
    });
  };


  export default {
    register,
    login,
    logout,
    getCurrentUser,
    verifyUser,
    forgetPassword,
    resetPassword
  };
  