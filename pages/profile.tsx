import Head from "next/head";
import * as React from "react";

import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControl,
  IconButton,
  InputBase,
  Select,
  Typography,
} from "@mui/material";
import {
  CardGiftcardRounded,
  ModeEditOutlineRounded,
} from "@mui/icons-material";

import ImageSlider from "../components/ImageSlider";
import TapsProps from "@/components/Tabs";
import { SelectInputBase } from "@/services/StyleUtils";
import DialogProps from "@/components/dialog/DialogSuccess";
import DialogEditUserProps from "@/components/dialog/DialogEditUser";
import ItemRewarsSliders from "@/components/ItemRewarsSliders";
import { api } from "@/services/AxiosUtils";
import { customer_update_seed } from "@/models/seed";
import dayjs, { locale } from "dayjs";
import toast from "react-hot-toast";
import { thaiAddress } from "@/models/constants/thaiAddress";
import { AddressOption } from "@/services/StoreUtils";

export default function Profile() {
  const [customer, setCustomer] = React.useState<any>([]);
  const [selectedCustomer, setSelectedCustomer] =
    React.useState<EditUser>(customer_update_seed);
  const [address, setAddress] = React.useState<AddressOption[]>([]);
  const [openUpdateCustomer, setOpenUpdateCustomer] = React.useState(false);
  const slides = [
    {
      title: "Slide 1",
      description: "Description for Slide 1",
    },
    {
      title: "Slide 2",
      description: "Description for Slide 2",
    },
    {
      title: "Slide 3",
      description: "Description for Slide 3",
    },
    // Add more slides as needed
  ];

  const handleClose = () => {
    setOpenUpdateCustomer(false);
  };

  // [Method] - ดึงข้อมูลที่อยู่
  const getAddress = async () => {
    setAddress(thaiAddress);
  };

  // [Method] - รับค่าจากฟอร์มแก้ไขข้อมูลลูกค้า
  const handleChangeEdit = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSelectedCustomer((prevState: any) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const getCustomer = async () => {
    const res = await api.get(`/customer/list?uid=1051`);
    setSelectedCustomer(res.data.item[0]);
  };

  const onOpenUpdateCustomer = async () => {
    const res = await api.get(`/customer/info/${1051}`);

    if (res.data.status === "Success") {
      console.log(res.data);
      setSelectedCustomer((prev) => ({
        ...prev,
        province: String(res.data.data[0].province),
        district: String(res.data.data[0].district),
        sub_district: res.data.data[0].sub_district,
        zip_code: res.data.data[0].zip_code,
        birth_day: res.data.data[0].birth_day,
        address: res.data.data[0].address,
      }));
    }

    setOpenUpdateCustomer(true);
  };

  //[Mathod] - บันทึกการแก้ไขข้อมูลลูกค้า
  const onSubmitUpdateCustomer = async () => {
    setOpenUpdateCustomer(false);
    delete selectedCustomer.birth_day;

    const res = await api.put(
      `/customer/update/${selectedCustomer.id}`,
      selectedCustomer
    );
    if (res.data.status === "Success") {
      toast.success(res.data.msg);
    } else {
      toast.error(res.data.msg);
    }
    console.log(res.data.msg);
  };

  React.useEffect(() => {
    getCustomer();
    getAddress();
  }, []);

  const [openEditUser, setOpenEditUser] = React.useState(false);
  return (
    <>
      <Head>
        <title>Yaakz Member</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="toolbar">
        <div />
        <Typography style={{ fontSize: "24px" }}>โปรไฟล์</Typography>
        <div />
      </div>
      <Box className="container">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Avatar
            style={{ width: 80, height: 80, marginLeft: 10 }}
            alt="Pukky"
            src="/static/images/avatar/1.jpg"
          />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Typography
            style={{
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              fontSize: 24,
            }}
          >
            {selectedCustomer.name}
          </Typography>
          <IconButton onClick={onOpenUpdateCustomer}>
            <ModeEditOutlineRounded />
          </IconButton>
        </div>

        <div className="box-points-profile">
          <div className="box-points-profile-left">
            <CardGiftcardRounded sx={{ width: 40, height: 40 }} />
            <div>
              <Typography style={{ fontSize: "12px", marginBottom: 5 }}>
                คะแนนสะสม
              </Typography>
              <div className="point">
                <Typography style={{ fontSize: "20px" }}>200</Typography>
                <div className="icon-point">
                  <div className="icon-point2"></div>
                  <Typography sx={{ mt: -2.6, ml: 0.8, color: "#fff" }}>
                    P
                  </Typography>
                </div>
              </div>
            </div>
          </div>
          <div className="box-points-profile-right">
            <Typography style={{ fontSize: "14px" }}>30คะแนน</Typography>
            <Typography style={{ fontSize: "14px", marginBottom: 5 }}>
              คะแนนหมดอายุ 31 ธ.ค. 67
            </Typography>
            <a href="/rewards">
              {" "}
              <Button
                className="point-detail"
                variant="contained"
                color="secondary"
              >
                <Typography style={{ fontSize: "14px" }}>
                  ดูรายละเอียดเพิ่มเติม
                </Typography>
              </Button>
            </a>
          </div>
        </div>

        <div className="product-index-container">
          <div style={{ marginTop: 40 }}>
            <div
              style={{
                backgroundColor: "#F1F1F1",
                width: "100%",
                height: 50,
                alignItems: "center",
                display: "flex",
              }}
            >
              <Typography style={{ fontSize: "22px", marginLeft: 20 }}>
                แลกของรางวัล
              </Typography>
            </div>
            <div>
              <ItemRewarsSliders slides={slides} />
            </div>
          </div>
        </div>
      </Box>
      <TapsProps />

      <DialogEditUserProps
        open={openUpdateCustomer}
        onClose={handleClose}
        customer_name={selectedCustomer.name}
        customer_phone={selectedCustomer.phone}
        customer_email={selectedCustomer.email}
        customer_address={selectedCustomer.address}
        customer_main_address={[
          selectedCustomer.province,
          selectedCustomer.district,
          `${selectedCustomer.sub_district} ${selectedCustomer.zip_code}`,
        ]}
        onChangeCustomerData={handleChangeEdit}
        locale={locale}
        customer_birth_day={selectedCustomer.birth_day}
        onChangeProvince={(e) =>
          setSelectedCustomer({ ...selectedCustomer, province: Number(e) })
        }
        onChangeDistrict={(e) =>
          setSelectedCustomer({ ...selectedCustomer, district: e })
        }
        onChangeSubDistrictAndPostCode={(e, a) =>
          setSelectedCustomer({
            ...selectedCustomer,
            sub_district: e,
            zip_code: a,
          })
        }
        cascaderAddress={address}
        onChangeDate={(value: any) => {
          setSelectedCustomer({
            ...selectedCustomer,
            bod: !value ? null : dayjs(value).format("YYYY-MM-DD"),
          });
        }}
        onSubmit={onSubmitUpdateCustomer}
      />
    </>
  );
}
