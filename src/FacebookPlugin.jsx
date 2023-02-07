import React, { Component} from 'react';
import FacebookProvider, { Like } from 'react-facebook';
 
export default class Example extends Component {
  render() {
    return (
    <div>
      <FacebookProvider appId="123456789">
        <Like href="http://www.facebook.com" colorScheme="dark" showFaces share />
      </FacebookProvider>
    </div>
    );
  }
}
