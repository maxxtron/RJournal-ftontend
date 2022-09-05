import React, {FC} from 'react';
import Link from 'next/link';
import { Paper, Typography } from '@material-ui/core';
import Image from 'next/image';

import styles from './Post.module.scss';
import { PostActions } from '../PostActions';


export const Post:FC = () => {
  return (
    <Paper elevation={0} className="p-20" classes={{ root: styles.paper }}>
      <Typography variant="h5" className={styles.title}>
        <Link href="/news/test-123">
          <a>Кот прилег отдохнуть в английском парке миниатур - и стал героем шуток и фотожаб</a>
        </Link>
      </Typography>
      <Typography className="mt-10 mb-15">Пока они не могли соотнести размеры животного и окружения,другие начали создавать апокалптические сюжеты с котом в главной роли</Typography>
        <Image
          src="https://web24.com.ua/wp-content/uploads/2021/10/tema-06-001jpg.jpg"
          height={500}
          width={600}
          alt="img"
        />
      <PostActions />
    </Paper>
  );
};
