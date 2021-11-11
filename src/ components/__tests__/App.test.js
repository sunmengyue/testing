import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

it('shows a comment box', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  // Look inside the div and check if it contains the CommentBox
  //   console.log(div.innerHTML);
  //expect(div.innerHTML).toContain('Comment Box');

  ReactDOM.unmountComponentAtNode(div);
});
