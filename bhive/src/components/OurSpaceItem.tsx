import { Box, Stack, Typography } from "@mui/material";
import { getDistance } from "geolib";
import { useState, useEffect } from "react";
import { workerData } from "worker_threads";

interface User {
  id: string;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  google_maps_url: string;
  city: string;
  state: string;
  country: string;
  postal_code: string;
  description: null | string;
  rules: null | string;
  amenities: string[];
  images: string[];
  working_hours_start: string;
  working_hours_end: string;
  contact_person_name: string;
  facilities: null;
  is_active: boolean;
  is_day_pass_enabled: boolean;
  day_pass_price: number;
  day_pass_discounts_percentage: {
    1: {
      value: number;
      message: string;
    };
    10: {
      value: number;
      message: string;
    };
  };
  manager_id: null | string;
}

interface Item {
  item: User;
}
function OurSpaceItem(props: Item) {
  const { item } = props;

  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [distance, setDistances] = useState<number | 0>(0);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLatitude(latitude);
          setLongitude(longitude);
        },
        (err) => {
          setError(err.message);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  }, []);
  console.log(longitude, latitude);

  useEffect(() => {
    if (latitude !== null && longitude !== null) {
      const distanc = getDistance(
        { latitude, longitude },
        { latitude: item.latitude, longitude: item.longitude }
      );
      // Convert to kilometers
      setDistances(Math.round(distanc / 1000));
    }
  }, [latitude, longitude, item.latitude, item.longitude]);
  console.log(item.longitude, item.latitude);
  console.log(distance);
  return (
    <Box
      sx={{
        width: "370px",
        height: "384px",
        bgcolor: "#FFFFFF",
        padding: "12px",
      }}
    >
      <Stack direction={"row"}>
        <Typography
          sx={{
            width: "238px",
            height: "48px",
            marginTop: "16px",
            marginLeft: "12px",
            marginBottom: "18px",
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            fontSize: "20px",
            lineHeight: "24.2px",
            color: "#263238",
          }}
        >
          {item.name}
        </Typography>
        <Box
          sx={{
            width: "52px",
            height: "52px",
            marginLeft: "56px",
            marginTop: "14px",
            marginRight: "!2px",
            borderRadius: "6.47px",
            bgcolor: "#F9F9F9",
          }}
        >
          <Box
            component={"img"}
            src={"./images/assistant_direction.png"}
            alt="Assist"
            sx={{
              width: "18px",
              height: "18px",

              marginTop: "8px",
            }}
          ></Box>
          <Typography
            sx={{
              height: "10px",
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
              fontSize: "8px",
              lineHeight: "9.68px",
              color: "#263238",
            }}
          >
            `{distance} Kms`
          </Typography>
        </Box>
      </Stack>
      <Stack>
        <Box
          component={"img"}
          src={`./${item.images}`}
          alt={item.id}
          sx={{
            width: "346px",
            height: "202px",
            marginTop: "16px",
            marginLeft: "12px",
            marginRight: "12px",
          }}
        ></Box>
        {item.amenities ? (
          <Box
            sx={{
              position: "absolute",
              width: "127px",
              height: "26px",
              marginLeft: "20px",
              marginTop: "26px",
              borderRadius: "5px",
              padding: "8px",
              gap: "8px",
              bgcolor: "#263238",
            }}
          >
            {" "}
            <Stack direction={"row"}>
              <Box
                component={"img"}
                src={"./images/Workspace.png"}
                alt={item.id}
                sx={{
                  width: "22px",
                  height: "22px",
                  marginTop: "3px",
                }}
              ></Box>
              <Typography
                sx={{
                  marginLeft: "8px",
                  marginTop: "3px",
                  height: "17px",
                  width: "91px",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 500,
                  fontSize: "14px",
                  lineHeight: "16.94px",
                  letterSpacing: "2px",
                  color: "#FFBB00",
                }}
              >
                Workspace
              </Typography>
            </Stack>
          </Box>
        ) : (
          <Box
            sx={{
              position: "absolute",
              width: "127px",
              height: "26px",
              marginLeft: "20px",
              marginTop: "26px",
              borderRadius: "5px",
              padding: "8px",
              gap: "8px",
              bgcolor: "#263238",
            }}
          >
            {" "}
            <Stack direction={"row"}>
              <Box
                component={"img"}
                src={"./images/Campus.png"}
                alt={item.id}
                sx={{
                  width: "22px",
                  height: "22px",
                  marginTop: "3px",
                }}
              ></Box>
              <Typography
                sx={{
                  marginLeft: "8px",
                  marginTop: "3px",
                  height: "17px",
                  width: "91px",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 500,
                  fontSize: "14px",
                  lineHeight: "16.94px",
                  letterSpacing: "2px",
                  color: "#FFBB00",
                }}
              >
                Campus
              </Typography>
            </Stack>
          </Box>
        )}
      </Stack>
      <Box paddingTop={"22px"}>
        <Stack direction={"row"}>
          <Box
            sx={{
              width: "167px",
              height: "66px",
              borderRadius: "6px",
              border: "0.5px",
              marginLeft: "12px",
              bgcolor: "#F9F9F9",
            }}
          >
            <Stack direction={"row"} spacing={"41px"}>
              <Stack>
                <Typography
                  sx={{
                    marginLeft: "12px",
                    marginTop: "8px",
                    height: "17px",
                    width: "65px",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 500,
                    fontSize: "14px",
                    lineHeight: "16.94px",
                    color: "#65624C",
                  }}
                >
                  Day Pass
                </Typography>
                <Typography
                  sx={{
                    marginLeft: "12px",
                    marginTop: "8px",
                    height: "24px",
                    width: "90px",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  <span
                    style={{
                      fontWeight: 600,
                      fontSize: "20px",
                      lineHeight: "24.2px",
                    }}
                  >
                    {`₹ ${item.day_pass_price}`}
                  </span>
                  <span
                    style={{
                      fontWeight: 500,
                      fontSize: "12px",
                      lineHeight: "14.52px",
                    }}
                  >
                    / Day
                  </span>
                </Typography>
              </Stack>
              <Box>
                <Stack direction={"row"} sx={{ marginTop: "27px" }}>
                  <img src="./images/Vector Stroke1.png" alt="str1"></img>
                  <img src="./images/Vector Stroke2.png" alt="str2"></img>
                  <img src="./images/Vector Stroke3.png" alt="str3"></img>
                </Stack>
              </Box>
            </Stack>
          </Box>
          <Box
            sx={{
              width: "167px",
              height: "66px",
              borderRadius: "6px",
              border: "1px",
              borderColor: "#FFC422",
              marginLeft: "12px",
              bgcolor: "#FFCF4B",
            }}
          >
            <Stack direction={"row"}>
              <Stack>
                <Typography
                  sx={{
                    marginLeft: "12px",
                    marginTop: "8px",
                    height: "17px",
                    width: "70px",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 500,
                    fontSize: "14px",
                    lineHeight: "16.94px",
                    color: "#65624C",
                  }}
                >
                  Bulk Pass
                </Typography>
                <Typography
                  sx={{
                    marginLeft: "10px",
                    marginTop: "8px",
                    height: "24px",
                    width: "130px",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  <span
                    style={{
                      fontWeight: 600,
                      fontSize: "20px",
                      lineHeight: "24.2px",
                    }}
                  >
                    {`₹ ${(item.day_pass_price + 1) * 8}`}
                  </span>
                  <span
                    style={{
                      fontWeight: 500,
                      fontSize: "12px",
                      lineHeight: "14.52px",
                    }}
                  >
                    / 10 Days
                  </span>
                </Typography>
              </Stack>
              <Box>
                <Stack direction={"row"} sx={{ marginTop: "27px" }}>
                  <img src="./images/Vector Stroke1.png" alt="str1"></img>
                  <img src="./images/Vector Stroke2.png" alt="str2"></img>
                  <img src="./images/Vector Stroke3.png" alt="str3"></img>
                </Stack>
              </Box>
            </Stack>
          </Box>
        </Stack>
        <Box
          sx={{
            position: "relative",
            width: "69px",
            height: "18px",
            left: "240px",
            top: "-77px",
            borderRadius: "3px",
            border: "1px",
            bgcolor: "#263238",
          }}
        >
          <Typography
            sx={{
              padding: "4px",
              paddingLeft: "7px",
              height: "10x",
              width: "53px",
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
              fontSize: "8px",
              lineHeight: "9.68px",
              color: "#FFFDF7",
            }}
          >
            20% discount
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default OurSpaceItem;
