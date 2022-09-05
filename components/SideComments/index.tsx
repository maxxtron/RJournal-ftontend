import React, {FC} from 'react';
import ArrowRightIcon from '@material-ui/icons/NavigateNextOutlined';

import styles from './SideComments.module.scss';

const items = [
  {
    user: {
      fullName: 'Никита Сергеевич'
    },
    text: 'Каждое утро я начинаю с чашки кофе',
    post: {
      title: 'Какой у вас дома кофе?'
    }
  },
  {
    user: {
      fullName: 'Никита Сергеевич'
    },
    text: 'Каждое утро я начинаю с чашки кофе',
    post: {
      title: 'Какой у вас дома кофе?'
    }
  },
  {
    user: {
      fullName: 'Никита Сергеевич'
    },
    text: 'Каждое утро я начинаю с чашки кофе',
    post: {
      title: 'Какой у вас дома кофе?'
    }
  },
]

interface CommentItemProps {
  user: {
    fullName: string
  },
  text: string,
  post: {
    title: string
  }
}

const CommentItem: FC<CommentItemProps> = ({user,text,post}) => {
  return (
    <div className={styles.commentItem}>
      <div className={styles.userInfo}>
        <img src="https://web24.com.ua/wp-content/uploads/2021/10/tema-06-001jpg.jpg" alt="img"/>
        <a href="#">
          <b>{user.fullName}</b>
        </a>
      </div>
      <p className={styles.text}>{text}</p>
      <a href="#">
        <span className={styles.postTitle}>{post.title}</span>
      </a>
    </div>
  );
};

export const SideComments = () => {
  return (
      <div className={styles.root}>
        <h3>
          Комментарии <ArrowRightIcon/>
        </h3>
        {
          items.map((obj,i) => (
              <CommentItem {...obj} key={i}/>
          ))
        }
      </div>
  )
}