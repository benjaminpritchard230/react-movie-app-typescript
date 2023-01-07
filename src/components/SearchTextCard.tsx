import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Switch from "@mui/material/Switch";
import { Stack } from "@mui/system";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
type Props = {};

const SearchTextCard = (props: Props) => {
  const searchText = useSelector((state: RootState) => state.search.text);

  return (
    <Card
      sx={{
        width: "100%",
        height: "50px",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          alignItems: "center",
          //   justifyContent: "end",
          height: "62px",
        }}
      >
        <Stack
          spacing={2}
          direction={{ xs: "column", md: "row" }}
          sx={{ alignItems: "center", justifyContent: "end" }}
        >
          <Typography variant="h5" gutterBottom>
            {searchText
              ? `Searching for "${searchText}"...`
              : "Start searching"}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default SearchTextCard;
