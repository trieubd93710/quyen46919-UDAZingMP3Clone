import 'swiper/css'
import './styles.scss'
import { AiOutlineRight } from 'react-icons/ai'
import { CgPlayButtonO } from 'react-icons/cg'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay } from 'swiper'

const listMusic = [
  {
    name: 'Ngoài 30',
    singer: 'Thái Học',
    thumbnail: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/c/e/3/4/ce34451501c9e64070402a50f7660c07.jpg',
    rank: '#1',
    time: '03.01.2023'
  },
  {
    name: 'Bồng Bềnh Bồng Bềnh',
    singer: 'Nam Em',
    thumbnail: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/7/a/6/f/7a6f65300b3d82b17a023a05e42ea6c1.jpg',
    rank: '#2',
    time: '03.01.2023'
  },
  {
    name: 'Sau Này Nếu Có Thương Em',
    singer: 'Hương Ly',
    thumbnail: '	https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/f/1/9/a/f19ad7841238e403df36cc7a9c536837.jpg',
    rank: '#3',
    time: '03.01.2023'
  },
  {
    name: 'Người Rất Tốt Không Gặp Sẽ Tốt Hơn',
    singer: 'Hiền Hồ',
    thumbnail: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/b/a/1/d/ba1dc4f790dedb967a397abff94ebc8f.jpg',
    rank: '#4',
    time: '03.01.2023'
  },
  {
    name: 'Bí Mật Nhỏ',
    singer: 'B Ray, Hoàng tôn, Bảo Hân helia',
    thumbnail: 'https://photo-resize-zmp3.zmdcdn.me/w600_r1x1_webp/cover/c/4/d/1/c4d1802c5ca0d2124edc1c7e043c6992.jpg',
    rank: '#5',
    time: '03.01.2023'
  },
  {
    name: 'Không Chờ Đợi Nữa',
    singer: 'Khải',
    thumbnail: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/9/f/b/6/9fb6bec2bcf4e9e73cc1470533757956.jpg',
    rank: '#6',
    time: '03.01.2023'
  }
]

export default function NewMusic() {
  SwiperCore.use([Autoplay])
  return (
    <div className='newmusic'>
      <div className='newmusic__heading'>
        <p className='newmusic__heading-name'>Nhạc Mới</p>
        <p className='newmusic__heading-all'>
          <span>TẤT CẢ</span>
          <span className='newmusic__heading-icon'>
            <AiOutlineRight />
          </span>
        </p>
      </div>
      <Swiper className='' spaceBetween={20} slidesPerView={3} autoplay={{ delay: 6000, disableOnInteraction: false }}>
        {listMusic.map((music) => (
          <SwiperSlide key={music.thumbnail} className='newmusic__list'>
            <div className='newmusic__item'>
              <div className='newmusic__item-img'>
                <img className='newmusic__item-thum' src={music.thumbnail} alt={music.name} />
                <CgPlayButtonO className='newmusic__item-icon--play' />
              </div>
              <div className='newmusic__item-group'>
                <div className='newmusic__item-info'>
                  <p className='newmusic__item-name'>{music.name}</p>
                  <p className='newmusic__item-singer'>{music.singer}</p>
                </div>
                <div className='newmusic__item-other'>
                  <p className='newmusic__item-trending'>{music.rank}</p>
                  <p className='newmusic__item-time'>{music.time}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
