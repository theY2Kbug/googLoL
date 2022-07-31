import React from 'react';
import { Routes, Route} from 'react-router-dom'
import { Results } from './Results';
import { HomePage } from './HomePage';
import { ErrorPage } from './ErrorPage';
export const Switch = () => {
  return (
    <div className='p-4 grow'>
        <Routes>
          <Route exact path="/" element={<HomePage/>}/>
          <Route exact path='/search' element={<Results/>}/>
          <Route exact path='/image' element={<Results/>}/>
          <Route exact path='/news' element={<Results/>}/>
          <Route exact path='/videos' element={<Results/>}/>
          <Route path='*' element={<ErrorPage/>}/>
        </Routes>
    </div>
  )
}
