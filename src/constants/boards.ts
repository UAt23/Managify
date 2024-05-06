import { BoardColumns } from "../models/boards.model";

export const boards: BoardColumns = {
   'default':  {
      color: '#70A3F3',
      title: 'Backlog'
   },
   'progress': {
      color: '#F3CE49',
      title: 'In Progress'
   },
   'review': {
      color: '#B787F5',
      title: 'In Review'
   },
   'completed': {
      color: '#77DB89',
      title: 'Completed'
   }
}