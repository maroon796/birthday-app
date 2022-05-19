import React from 'react';

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, image, age } = person;
        return <div>{image}</div>;
      })}
    </>
  );
};

export default List;
