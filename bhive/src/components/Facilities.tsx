import { Box, Typography, Stack, Button } from "@mui/material";

function Facilities() {
  return (
    <>
      <Box
        display={"flex"}
        width={"300px"}
        height={"45px"}
        marginLeft={"120px"}
      >
        <Typography
          sx={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 700,
            fontSize: "36px",
            lineHeight: "45px",
            letterSpacing: "0.3px",
          }}
        >
          Why Choose us?
        </Typography>
      </Box>
      <Stack direction={"row"}>
        <Box
          component={"button"}
          display={"flex"}
          width={"300px"}
          height={"80px"}
          marginLeft={"120px"}
          marginTop={"40px"}
          alignItems={"start"}
          border={"0px"}
          bgcolor={"white"}
        >
          <Box
            component={"img"}
            src={"./facility images/comunityEvents.png"}
            alt="comunityEvents"
            sx={{
              width: "31px",
              height: "32px",
              marginLeft: "24px",
              marginTop: "24px",
            }}
          ></Box>
          <Box
            component={"img"}
            src={"./facility images/comunityEventsStar.png"}
            alt="comunityEventsStar"
            sx={{
              width: "21px",
              height: "18px",
              marginLeft: "-20px",
              marginTop: "34px",
            }}
          ></Box>
          <Typography
            sx={{
              width: "202px",
              height: "26px",
              marginTop: "30px",
              marginLeft: "17px",
              textAlign: "left",
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
              fontSize: "18px",
              lineHeight: "21.78px",
              color: "#263238",
            }}
          >
            Community Events
          </Typography>
        </Box>

        <Box
          display={"flex"}
          width={"300px"}
          height={"80px"}
          marginLeft={"0px"}
          marginTop={"40px"}
          alignItems={"start"}
        >
          <Box
            component={"img"}
            src={"./facility images/gym.png"}
            alt="gym"
            sx={{
              marginLeft: "24px",
              marginTop: "32px",
            }}
          ></Box>

          <Typography
            sx={{
              width: "202px",
              height: "26px",
              marginTop: "30px",
              marginBot: "28px",
              marginLeft: "16px",
              textAlign: "left",
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
              fontSize: "18px",
              lineHeight: "21.78px",
              color: "#263238",
            }}
          >
            Gym Facilities
          </Typography>
        </Box>
        <Box
          display={"flex"}
          width={"300px"}
          height={"80px"}
          marginLeft={"0px"}
          marginTop={"40px"}
          alignItems={"start"}
        >
          <Box
            component={"img"}
            src={"./facility images/wifi.png"}
            alt="wifi"
            sx={{
              marginLeft: "24px",
              marginTop: "32px",
            }}
          ></Box>

          <Typography
            sx={{
              width: "202px",
              height: "26px",
              marginTop: "30px",
              marginBot: "28px",
              marginLeft: "16px",
              textAlign: "left",
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
              fontSize: "18px",
              lineHeight: "21.78px",
              color: "#263238",
            }}
          >
            High-Speed WiFi
          </Typography>
        </Box>
        <Box
          display={"flex"}
          width={"300px"}
          height={"80px"}
          marginLeft={"0px"}
          marginTop={"40px"}
          alignItems={"start"}
        >
          <Box
            component={"img"}
            src={"./facility images/cafe.png"}
            alt="cafe"
            sx={{
              marginLeft: "24px",
              marginTop: "32px",
            }}
          ></Box>

          <Typography
            sx={{
              width: "202px",
              height: "26px",
              marginTop: "36px",
              marginBot: "28px",
              marginLeft: "16px",
              textAlign: "left",
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
              fontSize: "18px",
              lineHeight: "21.78px",
              color: "#263238",
            }}
          >
            Cafe & Tea Bar
          </Typography>
        </Box>
      </Stack>
      <Stack direction={"row"}>
        <Box
          display={"flex"}
          width={"300px"}
          height={"80px"}
          marginLeft={"120px"}
          marginTop={"40px"}
          alignItems={"start"}
        >
          <Box
            component={"img"}
            src={"./facility images/affordable.png"}
            alt="aff"
            sx={{
              marginLeft: "24px",
              marginTop: "32px",
            }}
          ></Box>

          <Typography
            sx={{
              width: "202px",
              height: "26px",
              marginTop: "36px",
              marginBot: "28px",
              marginLeft: "16px",
              textAlign: "left",
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
              fontSize: "18px",
              lineHeight: "21.78px",
              color: "#263238",
            }}
          >
            Affordable
          </Typography>
        </Box>
        <Box
          display={"flex"}
          width={"300px"}
          height={"80px"}
          marginLeft={"0px"}
          marginTop={"40px"}
          alignItems={"start"}
        >
          <Box
            component={"img"}
            src={"./facility images/comfort.png"}
            alt="cafe"
            sx={{
              marginLeft: "24px",
              marginTop: "32px",
            }}
          ></Box>

          <Typography
            sx={{
              width: "202px",
              height: "26px",
              marginTop: "36px",
              marginBot: "28px",
              marginLeft: "16px",
              textAlign: "left",
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
              fontSize: "18px",
              lineHeight: "21.78px",
              color: "#263238",
            }}
          >
            Comfort Lounges
          </Typography>
        </Box>
        <Box
          display={"flex"}
          width={"300px"}
          height={"80px"}
          marginLeft={"0px"}
          marginTop={"40px"}
          alignItems={"start"}
        >
          <Box
            component={"img"}
            src={"./facility images/quick.png"}
            alt="cafe"
            sx={{
              marginLeft: "24px",
              marginTop: "32px",
            }}
          ></Box>

          <Typography
            sx={{
              width: "202px",
              height: "26px",
              marginTop: "36px",
              marginBot: "28px",
              marginLeft: "16px",
              textAlign: "left",
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
              fontSize: "18px",
              lineHeight: "21.78px",
              color: "#263238",
            }}
          >
            Quick Booking
          </Typography>
        </Box>
        <Box
          display={"flex"}
          width={"300px"}
          height={"80px"}
          marginLeft={"0px"}
          marginTop={"40px"}
          alignItems={"start"}
        >
          <Box
            component={"img"}
            src={"./facility images/sports.png"}
            alt="cafe"
            sx={{
              marginLeft: "24px",
              marginTop: "32px",
            }}
          ></Box>

          <Typography
            sx={{
              width: "202px",
              height: "26px",
              marginTop: "36px",

              marginLeft: "16px",
              textAlign: "left",
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
              fontSize: "18px",
              lineHeight: "21.78px",
              color: "#263238",
            }}
          >
            Sports Area
          </Typography>
        </Box>
      </Stack>
    </>
  );
}

export default Facilities;
