import {
  AccountCircleRounded,
  Favorite,
  Home,
  HomeRounded,
  LocalMallRounded,
  MenuBookRounded,
  PersonPin,
  Phone,
  ShowChartOutlined,
} from "@mui/icons-material";
import { Box, IconButton, Tab, Tabs, Typography } from "@mui/material";
import { useRouter } from "next/router";

import React from "react";

export default function TapsProps() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const router = useRouter();

  const dawer = (
    <div className="bottom">
      <IconButton
        disabled={router.asPath === "/home" ? true : false}
        sx={{ display: "grid", justifyContent: "center" }}
        href="/home"
      >
        <HomeRounded
          style={{ width: 35, height: 35 }}
          suppressHydrationWarning
        />

        <Typography sx={{ fontSize: 12 }}>หน้าแรก</Typography>
      </IconButton>

      <IconButton
        disabled={router.asPath === "/stock" ? true : false}
        sx={{ display: "grid", justifyContent: "center" }}
        href="/stock"
      >
        <MenuBookRounded
          style={{
            width: 35,
            height: 35,
            marginLeft: 7,
          }}
          suppressHydrationWarning
        />

        <Typography sx={{ fontSize: 12, textAlign: "center" }}>
          คลังของฉัน
        </Typography>
      </IconButton>

      <IconButton
        disabled={router.asPath === "/order_list" ? true : false}
        sx={{ display: "grid", justifyContent: "center" }}
        href="/order_list"
      >
        <LocalMallRounded
          style={{ width: 35, height: 35, marginLeft: 5 }}
          suppressHydrationWarning
        />

        <Typography sx={{ fontSize: 12 }}>การสั่งซื้อ</Typography>
      </IconButton>

      <IconButton
        disabled={router.asPath === "/profile" ? true : false}
        sx={{ display: "grid", justifyContent: "center" }}
        href="/profile"
      >
        <AccountCircleRounded
          style={{ width: 35, height: 35 }}
          suppressHydrationWarning
        />

        <Typography sx={{ fontSize: 12 }}>โปรไฟล์</Typography>
      </IconButton>
    </div>
  );
  return <div>{dawer}</div>;
}
