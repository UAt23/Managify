import { Fragment, useState } from "react";

import Button from "@mui/material/Button";
import {
	alpha,
	FormControl,
	InputBase,
	InputLabel,
	styled,
   Typography,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

import styles from "./AddBoard.module.scss";
import { AddRoundFill, Logo, Tick } from "../icons";
import { logos } from "../../constants/logos";

const BootstrapDialog = styled(Dialog)(() => ({
	"& .MuiDialog-paper": {
      minWidth: '33.125rem',
		padding: "1rem .5rem",
		background: "#2A2D32",
		color: "#FEF7EE",
		borderRadius: "0.75rem",
	},
	"& .MuiDialogContent-root": {
		display: "flex",
		flexDirection: "column",
		rowGap: "1.5rem",
	},
	"& .MuiDialogActions-root": {
		padding: "1.5rem",
	},
}));

const InputField = styled(InputBase)(({ theme }) => ({
	"label + &": {
		marginTop: theme.spacing(3),
	},
	"& .MuiInputBase-input": {
		display: 'flex',
		columnGap: '.25rem',
		color: "#FEF7EE",
		borderRadius: ".75rem",
		position: "relative",
		backgroundColor: "transparent",
		border: "2px solid #3A3E44",
		// borderColor: theme.palette.mode === "light" ? "#E0E3E7" : "#2D3843",
		fontSize: 16,
		width: "100%",
		padding: ".5rem",
		transition: theme.transitions.create([
			"border-color",
			"background-color",
			"box-shadow",
		]),
		"&:focus": {
			borderRadius: ".75rem",
			boxShadow: `${alpha("#7E878D", 0.25)} 0 0 0 0.2rem`,
			borderColor: "#7E878D",
		},
	},
}));

export default function AddBoard() {
	const [open, setOpen] = useState(false);
	const [boardName, setBoardName] = useState<string[]>([]);
	const [selectedLogo, setSelectedLogo] = useState<string[]>([]);
   
	const boardLogos: Array<any> = Object.keys(logos).map((item) => item)
   console.log(boardLogos)

	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Fragment>
			<Button onClick={handleClickOpen}>
            <AddRoundFill />
			</Button>
			<BootstrapDialog
				onClose={handleClose}
				aria-labelledby="customized-dialog-title"
				open={open}
			>
				<div className={styles.header}>
					<DialogTitle
						sx={{
							fontSize: "1.1rem",
							fontWeight: "700",
							letterSpacing: "0.02rem;",
							paddingTop: 0,
							paddingBottom: 0,
						}}
						id="customized-dialog-title"
					>
						New board
					</DialogTitle>
					<IconButton
						aria-label="close"
						onClick={handleClose}
						sx={{
							color: "#FEF7EE",
						}}
					>
						<CloseRoundedIcon
							sx={{ width: "1.75rem", height: "1.75rem" }}
						/>
					</IconButton>
				</div>
				<DialogContent>
					<FormControl
						variant="standard"
						sx={{
							width: "100%",
						}}
					>
						<InputLabel
							disableAnimation={true}
							shrink={false}
							htmlFor="task-name-input"
							sx={{
								color: "#7E878D !important",
								position: 'initial',
								fontFamily: 'inherit',
								fontSize: '0.75rem'
							}}
						>
							Board name
						</InputLabel>
						<InputField
							placeholder="e.g: Default Board"
							id="task-name-input"
						/>
					</FormControl>
					<FormControl
						variant="standard"
						sx={{
							width: "100%",
						}}
					>
						<Typography
							sx={{
								color: "#7E878D !important",
								position: 'initial',
								fontFamily: 'inherit',
								fontSize: '0.75rem',
                        marginBottom: '.5rem'
							}}
						>
							Logo
						</Typography>
                  <div style={{
                     display: "flex",
                     flexDirection: 'row',
                     columnGap: '1.5rem',
                     rowGap: '.75rem',
                     flexWrap: "wrap"
                  }}>
                     {boardLogos.map((logo, index) => (
                        <Logo key={index} logoType={logo} />
                     ))}
                  </div>
					</FormControl>
				</DialogContent>
				<DialogActions
					sx={{
						justifyContent: "flex-start",
					}}
				>
					<Button
						autoFocus
						onClick={handleClose}
						sx={{
							columnGap: ".75rem",
							background: "#3662E3",
							borderRadius: "2.5rem",
							width: "10.4375rem",
							color: "#FEF7EE",
							fontSize: ".875rem",
							textTransform: "none",
						}}
					>
						<span>Create board</span>
						<Tick />
					</Button>
					<Button
						onClick={handleClose}
						sx={{
							color: "#7E878D",
							width: "5.75rem",
							fontSize: ".875rem",
							textTransform: "none",
							borderRadius: "2.5rem",
							border: "2px solid #7E878D",
						}}
					>
						Cancel
					</Button>
				</DialogActions>
			</BootstrapDialog>
		</Fragment>
	);
}
