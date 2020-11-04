import React, {useEffect, useState} from 'react';

const Materials = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState('');

  const getMaterials = () => {};

  useEffect(() => {
    getMaterials();
  }, []);

  if (isLoading) {
    return <Preloader title='Materials' description='Loading Materials...' />;
  }

  if (isLoading && error) {
    return (
      <>
        <h1>Error: {error}</h1>
        <button onClick={getMaterials}>Retry</button>
      </>
    );
  }

  return (
    <div>
      <h1>Materials Page. {data}</h1>
    </div>
  );
};

export default Materials;
