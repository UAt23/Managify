import styles from './Board.module.scss'
import Task from '../Task/Task'
import AddTask from '../AddTask/AddTask'
import { BoardColumn } from '../../models/boards.model'

import Typography from '@mui/material/Typography'

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
      </div>
      <AddTask />
    </div>
  )
} 
