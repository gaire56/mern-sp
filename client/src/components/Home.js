import React, { useEffect, useState } from 'react';

const Home = () => {
  const [userName, setUserName] = useState('');
  const [show, setShow] = useState(false);

  useEffect(() => {
    userHomePage();
  }, []);

  const userHomePage = async () => {
    try {
      const res = await fetch('/getdata', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await res.json();
      // console.log(data);
      setUserName(data.name);
      setShow(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="home-page">
        <div className="home-div ">
          <p className="pt-5 ">Welcome</p>
          <h1>{userName}</h1>
          <h2>{show ? 'Happy to see you back' : 'This is home page'}</h2>
        </div>
      </div>
    </>
  );
};

export default Home;
