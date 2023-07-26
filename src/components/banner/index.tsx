import { IconButton, Stack } from "@mui/material";
import PlayImage from "../../assets/images/play.png";

const Banner = (): JSX.Element => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"center"}
      sx={{ background: "#e4e4e4", height: "300px" }}
    >
      <IconButton onClick={(): void=> alert("Hello World")}>
        <img src={PlayImage} alt="" width="50px" />
      </IconButton>
    </Stack>
  );
};

export default Banner;
