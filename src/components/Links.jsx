import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  {key:0, url: '/search', text: '🔍 All'},
  {key:1, url: '/news', text: '📰 News' },
  {key:2, url: '/image', text: '📸 Images' },
  {key:3, url: '/videos', text: '📺 Videos' },
];

export const Links = () => {
  return (
    <div className="flex sm:justify-around justify-between items-center mt-4">
      {links.map(({key, url, text})=>(
        <NavLink key={key} to={url} className={(navData) => navData.isActive? "m-2 mb-0 text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2":"m-2 mb-0"}>
          {text}
        </NavLink>
      ))}
    </div>
  )
}
