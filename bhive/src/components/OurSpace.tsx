import { Typography, Stack, Box } from "@mui/material";
import { useEffect, useState } from "react";
import OurSpaceItem from "./OurSpaceItem";

interface UserData {
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

function OurSpace() {
  const [data, setData] = useState<UserData[] | null>(null);
  console.log(data);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://raw.githubusercontent.com/MujtabaKably/bhive-interview-project-data/main/data.json"
      );
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);
  console.log(data);
  return (
    <div>
      <Typography
        sx={{
          width: "366px",
          height: "45px",
          marginTop: "120px",
          marginLeft: "120px",
          marginBottom: "40px",
          fontFamily: "Inter, sans-serif",
          fontWeight: 700,
          fontSize: "36px",
          lineHeight: "45px",
          letterSpacing: "0.3px",
          color: "#263238",
        }}
      >
        Our Space Overview
      </Typography>
      <Stack
        direction={"row"}
        spacing={"45px"}
        marginLeft={"120px"}
        maxWidth={"1440px"}
      >
        {data?.map((item) => (
          <OurSpaceItem key={item.id} item={item} />
        ))}
      </Stack>
      <Box
        marginLeft={"20px"}
        component={"img"}
        src="./images/group bottom.png"
        alt="bot"
      ></Box>
    </div>
  );
}

export default OurSpace;
