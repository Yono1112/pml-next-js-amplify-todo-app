import { Button, Fab, Stack, TextField, Typography } from "@mui/material";
import  AddIcon from "@mui/icons-material/Add"

export default function Home() {
  return (
    <Stack height="100lvh" justifyContent="center" alignItems="center" gap="32px">
      <Typography id="login_heading" variant="h1" fontSize="1.5rem">ログインフォーム</Typography>
      <Stack component="form" width={560} gap="24px" aria-labelledby="login_heading">
        <TextField label="メールアドレス" variant="filled" />
        <TextField label="パスワード" />
        <Button variant="contained">ログイン</Button>
      </Stack>
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      <TextField
          error
          id="filled-error"
          label="Error"
          defaultValue="Hello World"
          variant="filled"
        />
    </Stack>
  );
}