import React, {FC} from 'react';
import Link from 'next/link';
import { Paper, Button, IconButton, Avatar } from '@material-ui/core';

import {
  SearchOutlined as SearchIcon,
  SmsOutlined as MessageIcon,
  Menu as MenuIcon,
  ExpandMoreOutlined as ArrowBottom,
  NotificationsNoneOutlined as NotificationIcon,
} from '@material-ui/icons';

import styles from './Header.module.scss';

export const Header:FC = () => {

  return (
    <Paper classes={{ root: styles.root }} elevation={0}>
      <div className="d-flex align-center">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <Link href="/">
          <a>
            <img height={35} className="mr-20" src="/static/img/logo.svg" alt="Logo" />
          </a>
        </Link>

        <div className={styles.searchBlock}>
          <SearchIcon />
          <input placeholder="Поиск" />
        </div>

         <Button variant="contained" className={styles.penButton}>
              Новая запись
         </Button>
        </div>
      <div className="d-flex align-center">
        <IconButton>
          <MessageIcon />
        </IconButton>
        <IconButton>
          <NotificationIcon />
        </IconButton>
          <Link href="/profile/1">
            <a className="d-flex align-center">
              <Avatar
                className={styles.avatar}
                alt="Remy Sharp"
                src="https://web24.com.ua/wp-content/uploads/2021/10/tema-06-001jpg.jpg"
              />
              <ArrowBottom />
            </a>
          </Link>
      </div>
    </Paper>
  );
};
