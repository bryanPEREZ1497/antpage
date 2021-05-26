import React from 'react';
export default function Count({ count = 10, cero }) {
  return (
    <div
      style={{
        backgroundColor: 'red',
        color: 'white',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <div>Count: {count}</div>
      <button onClick={() => alert(count)}>Encerar</button>
    </div>
  );
}
