import { Fragment, useState } from "react";

import Button from "@mui/material/Button";
import {
	alpha,
	FormControl,
	InputBase,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
	styled,
	Theme,
	useTheme,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import AddRounded from "@mui/icons-material/AddRounded";

import styles from "./AddTask.module.scss";
import { Tick } from "../icons";
import { boards } from "../../constants/boards";
import { BoardColumn } from "../../models/boards.model";

const BootstrapDialog = styled(Dialog)(() => ({
	"& .MuiDialog-paper": {
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

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 250,
			padding: '.5rem',
			borderRadius: '.75rem',
			border: '1px solid #3A3E44',
			background: '#191B1F',
			color: '#FEF7EE'
		},
	},
};

const names = [
	'Oliver Hansen',
	'Van Henry',
	'April Tucker',
	'Ralph Hubbard',
	'Omar Alexander',
	'Carlos Abbott',
	'Miriam Wagner',
	'Bradley Wilkerson',
	'Virginia Andrews',
	'Kelly Snyder',
];

function getStyles(name: string, boardName: string[], theme: Theme) {
	return {
		fontWeight:
			boardName.indexOf(name) === -1
				? theme.typography.fontWeightRegular
				: theme.typography.fontWeightMedium,
	};
}

export default function AddTask() {
	const theme = useTheme();
	const [open, setOpen] = useState(false);
	const [boardName, setBoardName] = useState<string[]>([]);

	const boardOptions: Array<BoardColumn> = Object.values(boards).map((item) => item)

	const handleChange = (event: SelectChangeEvent<typeof boardName>) => {
		const {
			target: { value },
		} = event;
		setBoardName(
			typeof value === "string" ? value.split(",") : value
		);
	};

	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Fragment>
			<Button id={styles.addButton} onClick={handleClickOpen}>
				<span>Add new task card</span>
				<AddRounded
					sx={{
						width: "1.8rem",
						height: "1.8rem",
					}}
				/>
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
						Task details
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
					<div className={styles.coverSelectionBox}>
						<img
							className={styles.coverPhoto}
							src="src/assets/images/cover.png"
							alt="Task Cover Photo"
						/>
						<div className={styles.coverActions}>
							<Button
								// onClick={handleClose}
								sx={{
									color: "#FEF7EE",
									background: "#3662E3",
									padding: ".625rem",
									fontSize: ".875rem",
									textTransform: "none",
									borderRadius: "2.5rem",
								}}
							>
								Random Cover
							</Button>
							<Button
								// onClick={handleClose}
								sx={{
									color: "#FEF7EE",
									background: "#DD524C",
									width: "5.75rem",
									fontSize: ".875rem",
									textTransform: "none",
									borderRadius: "2.5rem",
								}}
							>
								Remove
							</Button>
						</div>
					</div>
					<FormControl
						variant="standard"
						sx={{
							width: "100%",
						}}
					>
						<InputLabel
							htmlFor="task-name-input"
							sx={{
								color: "#7E878D !important",
							}}
						>
							Task name
						</InputLabel>
						<InputField
							defaultValue="New tasks awaits..."
							id="task-name-input"
						/>
					</FormControl>
					<FormControl
						variant="standard"
						sx={{
							width: "100%",
						}}
					>
						<InputLabel
							disableAnimation={true}
							shrink={false}
							htmlFor="status-input"
							sx={{
								color: "#7E878D !important",
								position: 'initial',
								fontFamily: 'inherit',
								fontSize: '0.75rem'
							}}
						>
							Status
						</InputLabel>
						<Select
							id="status-input"
							IconComponent={() => <AddRounded sx={{display: 'none'}} />}
							value={boardName}
							onChange={handleChange}
							input={<InputField />}
							labelId="status-input"
							MenuProps={MenuProps}
						>
							{boardOptions.map((option) => (
								<MenuItem
									key={option.title}
									value={option.title}
									style={getStyles(option.title, boardName, theme)}
									sx={{
										borderRadius: '.25rem',
										marginBottom: '.25rem',
									}}
								>
									<span className={styles.colorBall} style={{backgroundColor: `${option.color}`}}></span>
									{option.title}
								</MenuItem>

							))}
						</Select>
					</FormControl>
					<FormControl
						variant="standard"
						sx={{
							width: "100%",
						}}
					>
						<InputLabel
							disableAnimation={true}
							shrink={false}
							htmlFor="tags-input"
							sx={{
								color: "#7E878D !important",
								position: 'initial',
								fontFamily: 'inherit',
								fontSize: '0.75rem'
							}}
						>
							Tags
						</InputLabel>
						<Select
							id="tags-input"
							IconComponent={() => <AddRounded sx={{display: 'none'}} />}
							multiple
							value={boardName}
							onChange={handleChange}
							input={<InputField />}
							labelId="status-input"
							MenuProps={MenuProps}
						>
							{names.map((name) => (
								<MenuItem
									key={name}
									value={name}
									style={getStyles(name, boardName, theme)}
									sx={{
										borderRadius: '.25rem',
										background: 'red',
										marginBottom: '.25rem',
									}}
								>
									{name}
								</MenuItem>
							))}
						</Select>
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
							width: "7.125rem",
							color: "#FEF7EE",
							fontSize: ".875rem",
							textTransform: "none",
						}}
					>
						<span>Save</span>
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
