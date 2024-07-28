import { Box, Typography, Stack } from "@mui/material";

function HeaderPresentation() {
  return (
    <div>
      <Box
        component={"img"}
        sx={{
          position: "relative",
          zIndex: -5,
          top: "-100px",
          left: 0,
        }}
        src="./images/bgImage.png"
        alt={"bgImage"}
      ></Box>

      <Box
        width={"806px"}
        height={"254"}
        position={"absolute"}
        top={"170px"}
        left={"120px"}
        right={"3px"}
        bottom={"180px"}
      >
        <Typography
          sx={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 700,
            fontSize: "58px",
          }}
        >
          <span style={{ color: "#263238" }}>
            Host your meeting with world-class amenities. Starting at
          </span>
          <span style={{ color: "#FFBB00" }}> ₹199/-!</span>
        </Typography>
      </Box>
      <video
        src="./images/clip.mp4"
        autoPlay
        loop
        style={{
          position: "absolute",
          top: "132px",
          left: "932px",
          width: "388px",
          height: "388px",
          objectFit: "cover",
        }}
      />
      <Box
        component={"img"}
        sx={{
          position: "absolute",
          top: "132px",
          left: "980px",
          width: "508px",
          height: "438px",
        }}
        src="./images/Vector 7.png"
        alt="vector7"
      ></Box>
      <Box
        component={"img"}
        sx={{
          position: "absolute",
          top: "29px",
          left: "275px",
          width: "145px",
          height: "160px",
          zIndex: -5,
        }}
        src="./images/Vector 6.png"
        alt="vector7"
      ></Box>
    </div>
  );
}

export default HeaderPresentation;
