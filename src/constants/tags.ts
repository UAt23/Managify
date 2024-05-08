export interface TagInfo {
   color: string,
   background: string,
   title: string
}

export interface Tags {
   'concept': TagInfo, 
   'technical': TagInfo, 
   'design': TagInfo,
   'fe': TagInfo 
} 

export const tags: Tags = {
   'concept': {
      color: 'hsla(4, 63%, 41%, 1)',
      background: 'hsla(3, 66%, 93%, 1)',
      title: 'Concept'
   },
   'technical': {
      color: 'hsla(225, 76%, 58%, 1)',
      background: 'hsla(218, 83%, 93%, 1)',
      title: 'Technical'
   },
   'design': {
      color: 'hsla(38, 60%, 47%, 1)',
      background: 'hsla(55, 93%, 89%, 1)',
      title: 'Design'
   },
   'fe': {
      color: 'hsla(126, 36%, 46%, 1)',
      background: 'hsla(134, 76%, 94%, 1)',
      title: 'Front-end'
   }
}