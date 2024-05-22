import * as React from "react";
import { Box } from "@mui/material";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Drawer, DrawerHeader, drawerWidth } from "../../../constants/drawer";
import { Boards } from "../";
import { Logo } from "../../icons";
import AddBoard from "../../AddBoard/AddBoard";

export function Sidebar() {
	const [open, setOpen] = React.useState(false);

	const handleDrawer = () => {
		setOpen((open) => !open);
	};

	return (
		<Box sx={{ 
         display: "flex",
         alignSelf: 'flex-end', 
         height: '100%',
         width: open ? `calc(100% - ${drawerWidth}px)` : `calc(100% - 73px)`
         }}>
			<Drawer variant="permanent" open={open}>
				<DrawerHeader>
					<IconButton 
                  sx={{
                     color: '#FEF7EE'
                  }} 
                  onClick={handleDrawer}>
                     {!open ? (
                        <ChevronRightIcon sx={{
                           width: '40px',
                           height: '40px',
                           backgroundColor: '#2A2D32',
                           borderRadius: '50%'
                        }} />
                     ) : (
                        <ChevronLeftIcon sx={{
                           width: '40px',
                           height: '40px',
                           backgroundColor: '#2A2D32',
                           borderRadius: '50%'
                        }} />
                     )}
					</IconButton>
				</DrawerHeader>
				<Divider />
				<List>
					{["Inbox", "Starred", "Send email", "Drafts"].map(
						(text) => (
							<ListItem
								key={text}
								disablePadding
								sx={{ display: "block" }}
							>
								<ListItemButton
									sx={{
										minHeight: 48,
										justifyContent: open
											? "initial"
											: "center",
										px: 2.5,
									}}
								>
									<ListItemIcon
										sx={{
											minWidth: 0,
											mr: open ? 3 : "auto",
											justifyContent: "center",
										}}
									>
										<Logo logoType="eyes" />
									</ListItemIcon>
									<ListItemText
										primary={text}
										sx={{ 
                                 opacity: open ? 1 : 0, 
                                 color: '#FEF7EE'
                              }}
									/>
								</ListItemButton>
							</ListItem>
						)
					)}
					<ListItem
						disablePadding
						sx={{ display: "block" }}
					>
						<ListItemButton
							sx={{
								minHeight: 48,
								justifyContent: 'center',
								px: 2.5,
							}}

						>
							<ListItemIcon
								sx={{
									minWidth: 0,
									width: open ? "auto" : "100%",
									mr: open ? 3 : "auto",
									justifyContent: "center",
								}}
							>
								{/* <AddRoundFill /> */}
								<AddBoard />
							</ListItemIcon>
							<ListItemText
								primary='Add new board'
								sx={{ 
									opacity: open ? 1 : 0, 
									color: '#FEF7EE'
								}}
							/>
						</ListItemButton>
					</ListItem>
				</List>
			</Drawer>
			<Box 
            component="main" 
            sx={{ 
               height: '100%',
               overflow: 'auto',
               flexGrow: 1, 
               p: 3,
               borderRadius: '12px',
               backgroundColor: '#2A2D32',
            }}
				>
					<Boards />
			</Box>
		</Box>
	);
}
