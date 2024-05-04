import * as React from "react";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

const drawerWidth = 296;

const openedMixin = (theme: Theme): CSSObject => ({
	width: drawerWidth,
	transition: theme.transitions.create("width", {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen,
	}),
	overflowX: "hidden",
   backgroundColor: '#191B1F',
});

const closedMixin = (theme: Theme): CSSObject => ({
	transition: theme.transitions.create("width", {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	overflowX: "hidden",
	width: `calc(${theme.spacing(7)} + 1px)`,
	[theme.breakpoints.up("sm")]: {
		width: `calc(${theme.spacing(8)} + 1px)`,
	},
   backgroundColor: '#191B1F',
});

const DrawerHeader = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "flex-start",
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
	shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
	width: drawerWidth,
	flexShrink: 0,
   color: '#FEF7EE',
	whiteSpace: "nowrap",
	boxSizing: "border-box",
	...(open && {
		...openedMixin(theme),
		"& .MuiDrawer-paper": openedMixin(theme),
	}),
	...(!open && {
		...closedMixin(theme),
		"& .MuiDrawer-paper": closedMixin(theme),
	}),
}));

export default function Sidebar() {
	const [open, setOpen] = React.useState(false);

	const handleDrawer = () => {
		setOpen((open) => !open);
	};

	return (
		<Box sx={{ 
         display: "flex",
         alignSelf: 'flex-end', 
         height: '100%',
         width: open ? `calc(100% - ${drawerWidth}px)` : '100%'
         }}>
			<Drawer variant="permanent" open={open}>
				<DrawerHeader>
					<IconButton 
                  sx={{
                     color: '#FEF7EE'
                  }} 
                  onClick={handleDrawer}>
                     {!open ? (
                        <ChevronRightIcon />
                     ) : (
                        <ChevronLeftIcon />
                     )}
					</IconButton>
				</DrawerHeader>
				<Divider />
				<List>
					{["Inbox", "Starred", "Send email", "Drafts"].map(
						(text, index) => (
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
                                 color: '#FEF7EE'
										}}
									>
										{index % 2 === 0 ? (
											<InboxIcon />
										) : (
											<MailIcon />
										)}
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
				
			</Box>
		</Box>
	);
}
