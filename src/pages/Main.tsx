import React from 'react';
import { useMainData } from 'hooks';

export default function Main() {
  const { data, isLoading, error } = useMainData();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <div>
      <h1>Main Page</h1>
      <ul>
        {data.map((item: any) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
