import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/poppins';
import './index.css'
import App from './App.jsx'

import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider
} from 'react-router-dom';

import {
  TransactionListPage,
  AddTransactionPage,
  EditTransactionPage,
  DeleteTransactionPage,
} from './pages';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      {/* children routes */}
      <Route index element={<TransactionListPage />}/>
      <Route path='add' element={<AddTransactionPage />}/>
      <Route path=':id/edit' element={<EditTransactionPage />}/>
      <Route path=':id/delete' element={<DeleteTransactionPage />}/>
      <Route path='*' element={
        <>
          <div className='w-full h-full flex justify-center items-center'>
            <p className='bg-white p-5 rounded-sm shadow-md md:text-xl text-black'>404 Page Not found</p>
          </div>
        </>
      }/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
