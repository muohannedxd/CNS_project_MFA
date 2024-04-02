import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";


export default function NoMatch() {
  return (
    <div className="flex justify-center items-center mt-80 sm:mx-0 md:mx-16 lg:mx-60 xl:mx-96">
      <Card sx={{ p: 4 }}>
        <CardContent >
          <Typography variant="inherit" fontSize={40} component="div">
            404 NOT FOUND
          </Typography>
          <Typography variant="inherit" fontSize={22}>
            The page you are lookig for does not exist
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}
