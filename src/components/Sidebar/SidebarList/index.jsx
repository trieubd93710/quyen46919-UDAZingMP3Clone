import React, { useState } from 'react';
import SidebarItem from '../SidebarItem';
import {
  Individual,
  Discover,
  ZingChart,
  Radio,
  Follow,
  NewMusic,
  TypeMusic,
  Top100,
  MV,
  Song,
  Playlist,
  Recently,
  Pen,
} from '../../Icons';

import './styles.scss';

const sidebarList = [
  {
    listItem: [
      {
        id: 1,
        title: 'Cá nhân',
        icon: Individual,
        isPlay: true,
      },
      {
        id: 2,
        title: 'Khám phá',
        icon: Discover,
        isPlay: false,
      },
      {
        id: 3,
        title: '#zingchart',
        icon: ZingChart,
        isPlay: true,
      },
      {
        id: 4,
        title: 'Radio',
        icon: Radio,
        isPlay: true,
        isLive: true,
      },
      {
        id: 5,
        title: 'Theo dõi',
        icon: Follow,
        isPlay: false,
      },
      {
        id: 6,
        title: 'Nhạc mới',
        icon: NewMusic,
        isPlay: true,
      },
      {
        id: 7,
        title: 'Thể loại',
        icon: TypeMusic,
        isPlay: false,
      },
      {
        id: 8,
        title: 'Top 100',
        icon: Top100,
        isPlay: false,
      },
      {
        id: 9,
        title: 'MV',
        icon: MV,
        isPlay: false,
      },
    ],
  },
  {
    myMusic: [
      {
        id: 1,
        title: 'Bài hát',
        icon: Song,
        isPlay: true,
      },
      {
        id: 2,
        title: 'Playlist',
        icon: Playlist,
        isPlay: false,
      },
      {
        id: 3,
        title: 'Gần đây',
        icon: Recently,
        isPlay: false,
      },
    ],
  },
];

function SidebarList(props) {
  const [activeItem, setActiveItem] = useState(null);

  const handleActiveItem = (id) => {
    setActiveItem(id);
  };

  return (
    <div className="sidebar-list">
      <div className="sidebar-list__main">
        <ul className="sidebar-list__menu">
          {sidebarList[0].listItem
            .slice(0, 5)
            .map(({ id, title, icon, isPlay, isLive }) => (
              <SidebarItem
                key={id}
                id={id}
                icon={icon}
                title={title}
                isPlay={isPlay}
                isLive={isLive}
                handleActiveItem={handleActiveItem}
                activeItem={activeItem}
              />
            ))}
        </ul>
      </div>

      <div className="sidebar-list__second">
        <div className="sidebar-list__scroll">
          <ul className="sidebar-list__menu">
            {sidebarList[0].listItem
              .slice(5, 9)
              .map(({ id, title, icon, isPlay }) => (
                <SidebarItem
                  key={id}
                  id={id}
                  icon={icon}
                  title={title}
                  isPlay={isPlay}
                  handleActiveItem={handleActiveItem}
                  activeItem={activeItem}
                />
              ))}
          </ul>

          <div className="sidebar-list__vip-banner">
            <p>Nghe nhạc không quảng cáo cùng kho nhạc VIP</p>
            <a
              href="https://zingmp3.vn/vip?utm_source=desktop&amp;utm_campaign=VIP&amp;utm_medium=sidebar"
              target="_blank"
            >
              Nâng cấp VIP
            </a>
          </div>

          <div className="sidebar-list__my-music">
            <div className="sidebar-list__title">
              <h4>Thư viện</h4>
              <img
                src={Pen}
                alt="pen"
              />
            </div>
            <ul className="sidebar-list__menu">
              {sidebarList[1].myMusic.map(({ id, title, icon, isPlay }) => (
                <SidebarItem
                  key={id}
                  id={id}
                  icon={icon}
                  title={title}
                  isPlay={isPlay}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SidebarList;
