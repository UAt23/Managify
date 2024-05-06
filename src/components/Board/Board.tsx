import styles from './Board.module.scss'
import Task from '../Task/Task'
import { BoardColumn } from '../../models/boards.model'

import { Typography } from '@mui/material'
import { AddRounded } from '@mui/icons-material'

interface BoardProps {
  column: BoardColumn
}

export const Board = (props: BoardProps) => {

  const { column } = {...props}

  return (
    <div className={styles.boardWrapper}>
      <div className={styles.title}>
        <span className={styles.colorBall} style={{backgroundColor: `${column.color}`}}></span>
        <Typography sx={{
          color: '#FEF7EE',
          fontWeight: '600'
        }}>
          {column.title} ({2})
        </Typography>
      </div>
      <div className={styles.taskList}>
        <Task />
        <Task />
        <Task />
      </div>
      <div className={styles.addButton}>
        <span>Add new task card</span>
        <AddRounded sx={{
          width: '1.8rem',
          height: '1.8rem'
        }} />
      </div>
    </div>
  )
} 
