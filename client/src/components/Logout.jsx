import React, { useEffect } from 'react'
import Cookie from 'js-cookie';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux'
import { setUser } from '../redux/user/userSlice';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, CircularProgress } from "@nextui-org/react";
export default function LogoutPage() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [isMenuOpen, setIsMenuOpen] = React.useState(true);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  async function logout() {
    const res = await axios.get('http://localhost:8080/auth/logout', { withCredentials: true });
    console.log(res)
    if (res.status === 200) {
      dispatch(setUser(null))
      navigate('/')
    }
  }
  useEffect(() => {
    logout()
  }, [])
  return (

    <div className='flex items-center justify-center w-full min-h-[600px]'><CircularProgress size='lg' aria-label="Loading..." /></div>

  )
}
