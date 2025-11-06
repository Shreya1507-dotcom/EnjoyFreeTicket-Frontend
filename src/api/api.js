// import React from "react";
// import { useDispatch } from "react-redux";
// import { formReducer } from "../store/studioSlice";

// const API_PATH = process.env.REACT_APP_API_PATH;

// const fetchWithFile = async (endpoint, data = {}, headers = {}) => {
//   const formData = new FormData();
//   console.log("formData",formData);
//   console.log("headers",headers);

// //   const dispatch = useDispatch()

//   // Append all fields to FormData
//   for (const key in data) {
//     const value = data[key];

//     // Handle arrays (like multiple emails)
//     if (Array.isArray(value)) {
//       value.forEach((item, index) => {
//         formData.append(`${key}[${index}]`, item);
//       });
//     } else {
//       formData.append(key, value);
//     }
//   }

//   try {
//     const response = await fetch(`${API_PATH}${endpoint}`, {
//       method: 'POST',
//       headers: {
//         ...headers,
//       },
//       body: formData,
//     });

//     return response

//     console.log("response",response)
//     // dispatch(formReducer(response))

//     if (!response.ok) throw new Error('API error');

//     return await response.json();
//   } catch (err) {
//     console.error('API Error:', err);
//     throw err;
//   }
// };

// export const Api = { registerStudio: (data) => fetchWithFile('studio/register/registerStudio', data, {data: '', }),};
