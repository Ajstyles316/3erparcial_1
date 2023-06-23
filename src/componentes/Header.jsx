import { useState } from 'react'
import './Header.css';
import {AiOutlineSketch,AiFillStar} from "react-icons/ai";
function HeaderContainer() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className='container'>
            <div className='header'>
                <img src='https://blog.virtualianet.com/wp-content/uploads/2015/10/Encuentra-im%C3%A1genes-libres-en.png' className='img'></img>
                <div className='heart'>
                    
                    <AiOutlineSketch color='#ff0080' size={40} enableBackground={15}/>
                    <div className='option'></div>
                </div>
            </div>
            <div className='header2'>
                <div className='head'>
                    <div className='h3'>
                        <h3>Standarr Cactus</h3>
                        <h3>Succulent</h3>
                    </div>
                    <h3 >$20.0</h3>
                </div>
                <div className='hola'>
                
                <div>
                <AiFillStar color='#fdfd96' size={30}/>
                <AiFillStar color='#fdfd96' size={30}/>
                    <AiFillStar color='#fdfd96' size={30}/>
                    <AiFillStar color='#fdfd96' size={30}/>
                </div>
                    
                    <h4 className='texto'>2 reviews</h4>
                </div>
                 
            </div>
        </div>
    </>
  )
}

export default HeaderContainer
