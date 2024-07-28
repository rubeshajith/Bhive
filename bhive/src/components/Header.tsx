import { Box, Button, Stack, Typography } from "@mui/material";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";

function Header() {
  return (
    <Stack
      direction={"row"}
      width={"1440px"}
      height={"90px"}
      sx={{ backgroundColor: "white" }}
    >
      <Box
        paddingLeft={"120px"}
        paddingTop={"25px"}
        sx={{ backgroundColor: "white" }}
      >
        <img
          src="./images/Bhive logo.png"
          alt="Bhive logo"
          width={"125px"}
          height={"40px"}
        ></img>
      </Box>
      <Box
        marginLeft={"1042px"}
        marginTop={"33px"}
        sx={{ backgroundColor: "white" }}
      >
        <Button
          style={{
            padding: "0px",
            maxWidth: "24px",
            maxHeight: "24px",
            minWidth: "24px",
            minHeight: "24px",
          }}
        >
          <img src="./images/call.png" alt="call" width={24} height={24}></img>
        </Button>
      </Box>
    </Stack>
  );
}

export default Header;
