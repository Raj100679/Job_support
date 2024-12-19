import React from "react";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@mui/material";

const trainings = [
  {
    id: 1,
    image: "/azure.png",
    date: "Dec 2024",
    instructor: "Rahul Charla",
    description:
      "We are planning to start training for Azure Data Engineering Course. Those who are interested, please register.",
  },
  {
    id: 2,
    image: "/aws.png",
    date: "Jan 2025",
    instructor: "Priya Sharma",
    description:
      "We are planning to start training for Azure Data Engineering Course. Those who are interested, please register.",
  },
  {
    id: 3,
    image: "/gcp.png",
    date: "Feb 2025",
    instructor: "Amit Kulkarni",
    description:
      "We are planning to start Google Cloud Training. Those who are interested, please register.",
  },
];

const TrainingCards = () => {
  return (
    <Box sx={{ maxWidth: 1200, mx: "auto", my: 6, textAlign: "center" }}>
      {/* Heading */}
      <Typography
        variant="h4"
        sx={{
          color: "#90caf9",
          fontFamily: "'Roboto', sans-serif",
          fontWeight: 500,
          mb: 4,
        }}
      >
        Upcoming Training Batches
      </Typography>

      <Typography
        variant="body1"
        sx={{
          color: "#cccccc",
          fontStyle: "italic",
          maxWidth: 800,
          mx: "auto",
          mb: 4,
        }}
      >
        We are planning to start training batches in upcoming months. Stay tuned
        for more details on these exciting opportunities!
      </Typography>

      {/* Training Cards */}
      <Grid container spacing={4}>
        {trainings.map((training) => (
          <Grid item xs={12} sm={6} md={4} key={training.id}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                bgcolor: "#2c2c2c",
                boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.5)",
                borderRadius: 3,
                overflow: "hidden",
                height:400,
              }}
            >
              <CardMedia
                component="img"
                image={training.image}
                alt={training.instructor}
                sx={{
                  objectFit: "cover",
                  width: "100%",
                  height: 160,
                  borderBottom: "1px solid #444",
                }}
              />
              <CardContent sx={{ p: 3, textAlign: "left" }}>
                <Typography
                  variant="h6"
                  color="primary"
                  sx={{ fontWeight: "bold", mb: 1 }}
                >
                  {training.date}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.primary"
                  sx={{ fontWeight: "medium", mb: 1 }}
                >
                  {training.instructor}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  {training.description}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ mt: 2, borderRadius: 2 }}
                >
                  Register
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TrainingCards;
