import React from 'react';
import './Strongholds.css';
import {BsFillEaselFill} from 'react-icons/bs';
import {FaFistRaised} from 'react-icons/fa';
import {BsFillClockFill} from 'react-icons/bs';
import {AiFillCodeSandboxSquare} from 'react-icons/ai';

import {Pagination,Navigation} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


const Strongholds = () => {
    return ( <section id='strongholds'>

        <h2>Strongholds</h2>
        <h5>My main strongholds</h5>

        <Swiper className='container strongholds_container' 
         modules={[Pagination,Navigation]}
         spaceBetween={40}
         slidesPerView={1}
         navigation
         pagination={{ clickable: true }}>


            <SwiperSlide className='strongholds'>
                <div className='client_avatar'>
                    <BsFillEaselFill/>
                </div>
                <h3>Self Taught</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui deleniti sint et perspiciatis praesentium, mollitia nesciunt nostrum ullam fugit repudiandae temporibus eos, ducimus aperiam recusandae, unde vitae maxime explicabo? Rerum, quisquam autem possimus maxime quo molestias voluptates! Sint amet aspernatur quidem ullam laudantium, dolorem ut totam distinctio, harum sed iste.</p>
            </SwiperSlide>
             <SwiperSlide className='strongholds'>
                <div className='client_avatar'>
                    <FaFistRaised/>
                </div>
                <h3>Never Give Up</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui deleniti sint et perspiciatis praesentium, mollitia nesciunt nostrum ullam fugit repudiandae temporibus eos, ducimus aperiam recusandae, unde vitae maxime explicabo? Rerum, quisquam autem possimus maxime quo molestias voluptates! Sint amet aspernatur quidem ullam laudantium, dolorem ut totam distinctio, harum sed iste.</p>
            </SwiperSlide>
             <SwiperSlide className='strongholds'>
                <div className='client_avatar'>
                    <BsFillClockFill/>
                </div>
                <h3>Time Management</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui deleniti sint et perspiciatis praesentium, mollitia nesciunt nostrum ullam fugit repudiandae temporibus eos, ducimus aperiam recusandae, unde vitae maxime explicabo? Rerum, quisquam autem possimus maxime quo molestias voluptates! Sint amet aspernatur quidem ullam laudantium, dolorem ut totam distinctio, harum sed iste.</p>
            </SwiperSlide>
             <SwiperSlide className='strongholds'>
                <div className='client_avatar'>
                    <AiFillCodeSandboxSquare/>
                </div>
                <h3>Quick Problem Solving</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui deleniti sint et perspiciatis praesentium, mollitia nesciunt nostrum ullam fugit repudiandae temporibus eos, ducimus aperiam recusandae, unde vitae maxime explicabo? Rerum, quisquam autem possimus maxime quo molestias voluptates! Sint amet aspernatur quidem ullam laudantium, dolorem ut totam distinctio, harum sed iste.</p>
            </SwiperSlide>
        </Swiper>
    </section> 
    
    );
}
 
export default Strongholds;