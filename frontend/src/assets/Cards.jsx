import React from 'react';

function Cards({ item }) {
  return (
    <div className="card w-85 h-80 bg-base-100 shadow-xl m-4 flex flex-col items-center hover:scale-105 duration-200 ">
      <figure className="w-full h-42 overflow-hidden flex justify-center items-center">
        <img src={item.image} alt={item.name} className="w-3/4 " />
      </figure>
      <div className="card-body w-full">
        <h2 className="card-title text-sm">
          {item.name}
          <div className="badge badge-secondary">{item.category}</div>
        </h2>
        <p className="text-xs">{item.title}</p>
        <div className="card-actions justify-between">
          <div className="badge badge-outline text-sm ">{`$ ${item.price}`}</div>
          <div className="badge badge-outline text-sm hover:bg-blue-300 hover:text-white duration-200">Buy now</div>
        </div>
      </div>
    </div>
  );
}

export default Cards;

