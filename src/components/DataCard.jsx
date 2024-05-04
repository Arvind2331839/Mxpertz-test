import React from "react";

const DataCard = ({ story }) => {
  console.log(story);
  return (
    <div class="card shadow">
      <img className="card-img-top p-2 " src={`https://ik.imagekit.io/dev24/${story.Image}`}alt={story.Title}/>
      <div className="card-body">
        <h5 className="text-white text-center text-sm my-2">{story.Title}</h5>
        <button className="ml-16 text-center bg-white text-red-500 px-10 rounded-full">{story.Status}</button>
      </div>
    </div>
  );
};

export default DataCard;
