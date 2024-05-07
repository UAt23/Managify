import { Fragment, useState } from "react";

import Button from "@mui/material/Button";
import { styled } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
// import Typography from "@mui/material/Typography";
import AddRounded from "@mui/icons-material/AddRounded";

import styles from "./AddTask.module.scss";
import { Tick } from "../icons";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
	"& .MuiDialog-paper": {
		padding: "1rem 2rem",
		background: "#2A2D32",
		color: "#FEF7EE",
		borderRadius: "0.75rem",
	},
	"& .MuiDialogContent-root": {},
	"& .MuiDialogActions-root": {
		padding: theme.spacing(1),
	},
}));

export default function AddTask() {
	const [open, setOpen] = useState(false);

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
							fontSize: "1.25rem",
							fontWeight: "500",
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
									padding: '.625rem',
									fontSize: ".875rem",
									textTransform: "none",
									borderRadius: "2.5rem",
								}}
							>
								Cancel
							</Button>
							<Button
								// onClick={handleClose}
								sx={{
									color: "#FEF7EE",
									width: "5.75rem",
									fontSize: ".875rem",
									textTransform: "none",
									borderRadius: "2.5rem",
								}}
							>
								Cancel
							</Button>
						</div>
					</div>
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
