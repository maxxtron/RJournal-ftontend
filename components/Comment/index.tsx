import React, {FC, useState} from 'react';
import { Typography, IconButton, MenuItem, Menu } from '@material-ui/core';
import MoreIcon from '@material-ui/icons/MoreHorizOutlined';

import styles from './Comment.module.scss';

interface CommentPostProps {
  user?: {
    fullname: string
  }
  text?: string;
}

export const Comment:FC<CommentPostProps> = ({ user, text }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={styles.comment}>
      <div className={styles.userInfo}>
        <img src="https://web24.com.ua/wp-content/uploads/2021/10/tema-06-001jpg.jpg" alt="Avatar"/>
        <b>Master Dogway</b>
        <span>5 часов</span>
      </div>
      <Typography className={styles.text}>
        Много раз летал на Wizz Air, и все было хорошо
      </Typography>
      <span className={styles.replyBtn}>Ответить</span>
      <IconButton onClick={handleClick}>
            <MoreIcon />
      </IconButton>
          <Menu anchorEl={anchorEl} elevation={2} open={Boolean(anchorEl)} onClose={handleClose} keepMounted>
            <MenuItem onClick={handleClose}>Удалить</MenuItem>
            <MenuItem onClick={handleClose}>Редактировать</MenuItem>
          </Menu>

    </div>
  );
};
