import React from 'react';

const MyParagraph = (props) => {
    console.log('MY PARAGRAPH');
    return (
    <p>{props.children}</p>
    );
};

export default MyParagraph;