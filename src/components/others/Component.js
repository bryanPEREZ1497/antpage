import React from 'react';
import './style.css';
import Component from './Component';
export default function Component() {
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h2>dfdf</h2>
        <img
          className="logo"
          src="https://www.gettyimages.es/gi-resources/images/500px/983794168.jpg"
          alt="sdfsdf"
        />
        <img
          className="logo"
          src="https://firebasestorage.googleapis.com/v0/b/react-42718.appspot.com/o/instagram.png?alt=media&token=8974ae05-1d3a-4422-906d-e087adaf4ed1"
          alt=""
        />
      </div>
      <p className="text">
        <b>sdfsdfsdfsdfsdsddssdd</b> s ds s dsd sd sd sd s ds ds ds ds d sd s ds
        d sds ds ds ds d d <b>sdfsdfsdfsdfsdsddssdd</b> s ds s dsd sd sd sd s ds
        ds ds ds d sd s ds d sds ds ds ds d d <b>sdfsdfsdfsdfsdsddssdd</b> s ds
        s dsd sd sd sd s ds ds ds ds d sd s ds d sds ds ds ds d d
      </p>
      <div className="flex">
        <Component />
        <Component />
        <Component />
      </div>
    </>
  );
}
