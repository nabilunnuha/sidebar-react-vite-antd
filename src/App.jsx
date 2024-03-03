import Layouts from "./layout/layout"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NotFoundLayout from "./layout/notFoundLayout";

const App = () => {
  const paths = [
    '/dashboard',
    '/check',
    '/delete',
    '/archive',
    '/up_product',
    '/launch',
    '/auto_online',
    '/create_voucher',
    '/message_bot',
    '/email_tools',
    '/setting',
  ]

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          {paths.map((path) => (
            <Route key={path} path={path} element={<Layouts />} />
          ))}
          <Route path='*' element={<NotFoundLayout />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
