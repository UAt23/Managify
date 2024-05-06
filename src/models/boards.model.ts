export interface BoardColumn {
   color: string,
   title: string
}

export interface BoardColumns {
   'default': BoardColumn,
   'progress': BoardColumn,
   'review': BoardColumn,
   'completed': BoardColumn
}