import { Button, Paper, Typography } from '@material-ui/core';
import React, {FC} from 'react';
import { PostActions } from '../PostActions';
import MessageIcon from '@material-ui/icons/TextsmsOutlined';
import UserAddIcon from '@material-ui/icons/PersonAddOutlined';

import styles from './FullPost.module.scss';

export const FullPost:FC = () => {
  return (
    <Paper elevation={0} className={styles.paper}>
      <div style={{margin: '0 auto', width: 680}}>
        <Typography variant="h4" className={styles.title}>
          Wizz Air, летящий из Варшавы в Прагу, подал сигнал бедствия. Возможно, в Полете произошла резгермитизация
        </Typography>
        <div>
            <Typography>
              Wizz Air, летящий из Варшавы в Прагу, подал сигнал бедствия. Об этом сообщают польские новости с ссылкой на информационный источник. По данным источника, самолет резко снизился на границе
            </Typography>
          <Typography>
              Wizz Air, летящий из Варшавы в Прагу, подал сигнал бедствия. Об этом сообщают польские новости с ссылкой на информационный источник. По данным источника, самолет резко снизился на границе
            </Typography>
          <Typography>
              Wizz Air, летящий из Варшавы в Прагу, подал сигнал бедствия. Об этом сообщают польские новости с ссылкой на информационный источник. По данным источника, самолет резко снизился на границе
            </Typography>
          <div style={{ width: 250, marginLeft: -14 }}>
            <PostActions />
          </div>
          <div className="d-flex justify-between align-center mt-30 mb-30">
            <div className={styles.userInfo}>
              <img
                src="https://web24.com.ua/wp-content/uploads/2021/10/tema-06-001jpg.jpg"
                alt="Avatar"
              />
              <b>Donnie Darko</b>
              <span>+1685</span>
            </div>
            <div>
              <Button variant="contained" className="mr-15">
                <MessageIcon />
              </Button>
              <Button variant="contained">
                <UserAddIcon />
                <b className="ml-10">Подписаться</b>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Paper>
  );
};
