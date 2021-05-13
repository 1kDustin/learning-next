// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default (req, res) => {
//   res.status(200).json({ name: 'John Doe' })
// }

// import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios'


// render() {
//   return (
//     <div>
//       <Get url="/api.giphy.com/v1/gifs/search" params={{ id: "12345" }}>
//         {(error, response, isLoading, makeRequest, axios) => {
//           if (error) {
//             return (<div>Something bad happened: {error.message} <button onClick={() => makeRequest({ params: { reload: true } })}>Retry</button></div>)
//           }
//           else if (isLoading) {
//             return (<div>Loading...</div>)
//           }
//           else if (response !== null) {
//             return (<div>{response.data.message} <button onClick={() => makeRequest({ params: { refresh: true } })}>Refresh</button></div>)
//           }
//           return (<div>Default message before request is made.</div>)
//         }}
//       </Get>
//     </div>
//   )
// }