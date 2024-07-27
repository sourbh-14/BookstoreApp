import React from 'react';

function Cardscourse({ item }) {
  return (
    <div className="card bg-base-100 w-full md:w-64 shadow-xl m-4 hover:scale-105 duration-200">
      <figure>
        <img className=''
          src={item.image }
          alt={item.name}
        />
      </figure>
     <div className="card-body w-full">
        <h2 className="card-title text-sm">
          {item.name}

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

export default Cardscourse;
