import { Typography } from '@mui/material'
import styles from './Board.module.scss'
import Task from '../../Task/Task'

export const Board = () => {
  return (
    <div className={styles.boardWrapper}>
      <div className={styles.title}>
        <span className={styles.colorBall}></span>
        <Typography sx={{
          color: '#FEF7EE'
        }}>
          Backlog ({2})
        </Typography>
      </div>
      <div className={styles.taskList}>
        <Task />
      </div>
    </div>
  )
} 
