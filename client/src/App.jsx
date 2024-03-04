import React, { useEffect, useState } from "react";
import NavbarComponete from "./components/Navbar";
import { Route, Routes } from "react-router";
import { HomePage, LoginPage, SignupPage, AboutPage, AllBlogPage, CreateBlogPage, LogoutPage, MyProfilePage, ContactUs, Footer } from "./index";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setLoading, setUser } from "./redux/user/userSlice";
import { useSelect } from "@nextui-org/react";

export default function App() {
  const [data,setData] = useState(null)
  const dispatch = useDispatch()
  const res = useSelect((state)=>state.user)
  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(setLoading(true));
        const res = await axios.get('http://localhost:8080/user/own', { withCredentials: true });
        if (res.data) {
          // Update state with user data or perform other actions
          console.log(res.data);
          setData(res.data);
          dispatch(setLoading(false));
          dispatch(setUser(res.data));
        }
      } catch (error) {
        dispatch(setLoading(false));
        console.error(error);
      }
    };
  
    fetchData();
  }, [dispatch]);
  return (
    <>
    <NavbarComponete/>
    <Routes path='/'>
    <Route path=''element={<HomePage/>} />
    <Route path='/login'element={<LoginPage/>} />
    <Route path='/logout'element={<LogoutPage/>} />
    <Route path='/signup'element={<SignupPage/>} />
    <Route path='/about'element={<AboutPage/>} />
    <Route path='/allblog'element={<AllBlogPage/>} />
    <Route path='/createblog'element={<CreateBlogPage/>} />
    <Route path='/logout'element={<LogoutPage/>} />
    <Route path='/myprofile'element={<MyProfilePage/>} />
    <Route path='/contactus'element={<ContactUs/>} />
   </Routes>
   <Footer/>
   </>
  );
}
