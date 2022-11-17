import React from "react";

function List(props) {
  return (
    <>
      <div>
        <button
          onClick={() => props.fungsi(props.url)}
          className="w-full px-2 py-1 bg-purple-700"
        >
          <p className="text-white">{props.name}</p>
        </button>
      </div>
    </>
  );
}

export default List;
