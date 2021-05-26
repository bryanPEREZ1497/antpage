import React from 'react';
// import '../style.css';
export default function Block({ person = { name: 'bryan' }, clase }) {
  return (
    <div className={clase}>
      <div>{person.name}</div>
    </div>
  );
}
