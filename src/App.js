// import React from 'react'
// import axios from 'axios';

// class App extends React.Component {
//   // State of your application
//   state = {
//     artists: [],
//     error: null,
//   };

//   // Fetch your restaurants immediately after the component is mounted
//   componentDidMount = async () => {
//     try {
//       const response = await axios.get('http://localhost:1337/api/artworks');
//       this.setState({ artists: response.data });
//     } catch (error) {
//       this.setState({ error });
//     }
//   };

//   render() {
//     const { error, artists } = this.state;

//     // Print errors if any
//     if (error) {
//       return <div>An error occured: {error.message}</div>;
//     }

//     return (
//       <div className="App">
//         <ul>
//           {this.state.artists.map(artist => (
//             <li key={artist.id}>{artist.name}</li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

// export default App;