import { Board } from "../Board/Board";
import { boards } from '../../constants/boards'
import { BoardColumn } from "../../models/boards.model";

export const Boards = () => {

   const boardArray: BoardColumn[] = Object.values(boards);
	return (
      <>
         { 
            boardArray.map((column, index) => <Board key={index} column={column} />)
         }
      </>
   );
};
