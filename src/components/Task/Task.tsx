import { Typography } from "@mui/material";
import styles from "./Task.module.scss";
import Tag from "../Tag/Tag";


const Task = () => {
	return (
      <div className={styles.wrapper}>
         <img className={styles.coverPhoto} src="src/assets/images/cover.png" alt="Task Cover Photo" />
         <Typography
            sx={{
               fontWeight: 'bold'
            }}
         >
            Investigate Framer-Motion for animations.
         </Typography>
         <div className={styles.tags}>
            <Tag />
         </div>
      </div>
   );
};

export default Task;
