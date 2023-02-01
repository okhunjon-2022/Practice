import React,{useState} from 'react'
import "./Home.css"
import pass2 from "../../assets/home/pass2.png"
import "./HomeMedia.css"
import{BsChevronDown} from "react-icons/bs"
import {COUNTRIES,YEARS,STATI} from "../../data/homes"
import gara from "../../assets/home-application/gar.png"
import gar12 from "../../assets/home-application/gar1 2.png"
import gar21 from "../../assets/home-application/gar2 1.png"
import gar31 from "../../assets/home-application/gar3 1.png"
import gar32 from "../../assets/home-application/gar3 2.png"
import girl from "../../assets/banner/girl.png"

import brand from "../../assets/home-application/brand.png"
import Banner from '../../components/banner/Banner'
import BannerSwiper from '../../components/banner-swiper/BannerSwiper'


function Home() {
  const OPTION = ["Test-1","Test-2","Test-3",]
  const [drop,setDrop] =useState(false)
  const months=['Jan','Feb','Mar','Apr','May','Jun','July','Aug','Sept','Oct','Nov','Dec']


  const d= new Date()
  const day=d.getDate()
  const month =months[d.getMonth()]
  const year =d.getFullYear()
  


  return (
    <div className='home'>
      <div className="home__top-image">
        <h1>Работа в ЕС <br />
        зарплатой 3 000 евро в месяц,</h1>
        <p>с нашей поддержкой на весь срок контракта и заменой вакансии в случае сокращения с работы</p>
        <div className="home__top-pass">
        <img src={pass2} alt="" />
        <button className='home__top-btn'>оставить заявку</button>
        </div>
      </div>

      <div className="home__search">
          <h1><span>Н</span>АЙТИ РАБОТУ</h1>
          <p>Работа по биометрическим пасспортам (3 месяца) и по визам</p>

      </div>
      

      <div className="home__search-vacancy">
        <div className="home__btns">
            <div onClick={()=>setDrop(!drop)} className="left__btn">
              <button>Все страны <span><BsChevronDown/></span></button>
              {
                drop &&(
                  <ul className="left__btn-context">
                {
                  OPTION?.map((value,index)=>(
                    <li key={index} className="left__btn-item">
                      {value}
                    </li>
                  ))
                }
              </ul>
                )
              }
            </div>
            <div className="mid__btn">Для всех <span><BsChevronDown/></span></div>
            <div className="right__btn">Все специализации <span><BsChevronDown/></span></div>
        </div>
        <button className='search__vacancy'>найти вакансию</button>
      </div>

    <div className="country__vacancy">
      <h1> <span>В</span>АКАНСИИ В СТРАНАХ</h1>
    </div>


    <div className="home__country">
      {
        COUNTRIES?.map((value,index)=>(
          <div className="country__collection">
            <img  src={value.img} alt="" />
        <p>{value.title}</p>
      </div>
        ))
      }
     
      
    </div>

    <div className="home__year">
      {
        YEARS?.map((item,inex)=>(
          <div key={inex} className="country__years">
          <h1>{item.number}</h1>
          <p>{item.title}</p>
      </div>
        ))
      }
      
    </div>

    <div className="home__servise">
      <div className="home__column1 column1">
        <div className="home__garand">
            <p>С каждым клиентом подписываем договор</p>
            <img width={60} height={60} src= {gara}alt="" />
        </div>
        <div className="home__garand">
            <p>С каждым клиентом подписываем договор</p>
            <img width={60} height={60} src= {gar12}alt="" />
        </div>
      </div>
      <div className="home__column1 column2">
      <div className="home__garand">
            <p>С каждым клиентом подписываем договор</p>
            <img width={60} height={60} src= {gar21}alt="" />
        </div>
        <div className="home__brand">
              <img src={brand} width={400} alt="" />
            </div>
      </div>
      <div className="home__column1 column3">
      <div className="home__garand">
            <p>С каждым клиентом подписываем договор</p>
            <img width={60} height={60} src= {gar31}alt="" />
        </div>
        <div className="home__garand">
            <p>С каждым клиентом подписываем договор</p>
            <img width={60} height={60} src= {gar32}alt="" />
        </div>
      </div>


    </div>

    <div className="home__work">
      <h1><span>К</span> АК МЫ РАБОТАЕМ</h1>
    </div>

    <div className="home__consul">
      <h1>Записаться на консультацию</h1>

      <div className="home__input">
        <div  className="inputs">
        <p>Имя</p>
        <input placeholder='ваше имя' type="text" />
        </div>
        <div className="inputs">
        <p>Номер телефона</p>
        <input placeholder='+38 (000) 000 00 00' type="text" />
        </div>
        <button className='consul__btn'>записаться</button>
      </div>

      <p className='home__info'>Якщо ви відсилаєте цю     форму, ви підтверджуєте свою згоду
       з політикою передачі і використання даних на цьому сайті</p>
      
     

    </div>

    <div className="home__social">
      <h1 className='socail__green'><span className='home__green'>О</span> НАС ГОВОРЯТ</h1>
    </div>
    <Banner/>

    <div className="home__social">
      <h1 className='socail__green'><span className='home__green'>Н</span>АС НАША КОМАНДА</h1>
    </div>
    <div className="home__image">
      <img src={girl} alt="" />
    </div>  

    <BannerSwiper/>

    <div className="home__social">
      <h1 className='socail__green'><span className='home__green'>С</span>ТАТЬИ</h1>
    </div>

    <div className="home__stati">
      {
        STATI?.map((value,index)=>(
        <div key={index} className="stati__wrapper">
        <div className="stati__img">
          <div className="stati__date">
            <p>{day}</p>
            <p>{month}</p>
            <p>{year}</p>
          </div>
        </div>
        <div className="stati__info">{value.title}</div>
        <div className="stati__parag">{value.parag}</div>
        <div className="stati__creater">
          <h2>{value.creator}</h2>
          <p>{value.read}</p>
        </div>
      </div>
        ))
      }
      <div className="lastBanner">
      <p lastBannerTop>Построить карьеру мечты вместе с нами очень просто. Изначально Вы должны оставить заявку на сайте или по телефону. После этого менеджер по телефону в режиме онлайн бесплатно проконсультирует вас по поводу работы за границей и вакансий, которые мы подбираем клиентам.
      <br /><br />

Затем мы заключаем договор – с нами клиенты сотрудничают исключительно официально, так как мы лицензированный рекрутер, материально ответственный за результаты своей работы. Перед обращением в миграционные органы наш юрист по вопросам миграции и трудоустройства за рубежом с удовольствием и профессионализмом проконсультирует Вас и ответит на все вопросы, даст рекомендации и полезные советы. После этого Вы сможете в установленные сроки получить необходимые разрешения на иммиграцию.
<span>Читать дальше</span>



</p>
      
    </div>

      
    </div>  
  
    </div>
    
  )
}

export default Home