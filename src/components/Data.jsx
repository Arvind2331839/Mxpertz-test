import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStories } from '../store/slice';
import DataCard from './DataCard';

const Data = () => {
  const dispatch = useDispatch();
  const stories = useSelector((state) => state.stories.stories);
  console.log(stories)
  const status = useSelector((state) => state.stories.status);
  const error = useSelector((state) => state.stories.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchStories());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>
  }

  return (
    <div className="w-[80%] mx-auto mt-10">
         <h1 className='text-white text-3xl font-bold text-center '>science fiction story</h1>
         <div className='py-5 flex justify-center'>
         <button className='btn bg-blue-700 text-white md:ml-8 font-semibold px-5 py-1 rounded-full duration-500 md:static' >New</button>
         <button className='btn bg-green-500 text-white md:ml-8 font-semibold px-5 py-1 rounded-full duration-500 md:static' >In Progess</button>
         <button className='btn bg-yellow-400 text-white md:ml-8 font-semibold px-5 py-1 rounded-full duration-500 md:static' >Compleated</button>
         <button className='btn bg-gradient-to-r from-indigo-900 to-blue-700 text-white md:ml-8 font-semibold px-5 py-1 rounded-full duration-500 md:static' >Cleare All</button>
         </div>
      <div className="flex flex-wrap gap-10">
        {stories.map((story) => (
          <DataCard key={story.id} story={story} />
         ))}
      </div>
    </div>
  );
};

export default Data;

