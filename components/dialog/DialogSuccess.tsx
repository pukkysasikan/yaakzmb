import { CheckRounded, ClearRounded } from "@mui/icons-material";
import {
  Dialog,
  DialogContent,
  DialogContentText,
  Icon,
  Typography,
} from "@mui/material";

interface DialogProps {
  open: boolean;
  onClose: () => void;
  icon: any;
  text: string;
}

export default function DialogProps(props: DialogProps) {
  return (
    <div className="dialog-success">
      <Dialog
        open={props.open}
        PaperProps={{
          style: { borderRadius: 20 },
        }}
      >
        <div
          onClick={props.onClose}
          style={{
            justifyContent: "flex-end",
            display: "flex",
            margin: "10px 10px 0px 0px",
          }}
        >
          <ClearRounded />
        </div>

        <DialogContent>
          <div
            style={{
              display: "grid",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {props.icon}
          </div>
          <DialogContentText id="alert-dialog-description">
            <Typography style={{ textAlign: "center", marginTop: 20 }}>
              {props.text}
            </Typography>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
