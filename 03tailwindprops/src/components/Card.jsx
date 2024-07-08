import React from 'react'

function Card({username, btntext}) {

  console.log(username);
  return (
<div className="w-[300px] rounded-md border">
        <img
          src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
          alt="Laptop"
          className="h-[200px] w-full rounded-t-md object-cover"
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold">About {username}</h2>
          <p className="mt-3 text-sm text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            debitis?
          </p>
          <button
            type="button"
            className="mt-4 rounded-sm bg-black px-3 py-1 text-xs font-semibold text-white shadow-sm hover:bg-black/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-opacity-50"
          >
            {btntext}
          </button>
        </div>
        </div>
)
}

export default Card