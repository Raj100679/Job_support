import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';

const trainings = [
  {
    id: 1,
    image: "/azure.png", // Replace with actual image paths
    date: "Dec 2024",
    instructor: "Rahul Charla",
    description:
      "We are planning to start training for Azure Data Engineering Course. Those who are interested, please register.",
  },
  {
    id: 2,
    image: "/aws.png", // Replace with actual image paths
    date: "Jan 2025",
    instructor: "Priya Sharma",
    description:
      "We are planning to start training for Azure Data Engineering Course. Those who are interested, please register.",
  },
];

const TrainingCards = () => {
  return (
    <Box sx={{ maxWidth: 800, mx: "auto", my: 6, textAlign: "center" }}>
      {/* Heading */}
      <Typography
        variant="h4"
        sx={{
          color: "#90caf9", // Soft light blue color related to carousel theme
          fontFamily: "'Roboto', sans-serif", // Consistent font family
          fontWeight: 500,
          mb: 4, // Margin below the heading
        }}
      >
        Upcoming Training Batches
      </Typography>
      
      <Typography
        variant="body1"
        sx={{
          color: "#cccccc", // Light gray description text
          fontStyle: "italic",
          maxWidth: 800,
          mx: "auto", // Centered text
          mb: 4,
        }}
      >
        We are planning to start training batches in upcoming months. Stay tuned for more details on these exciting opportunities!
      </Typography>

      {/* Training Cards */}
      <Grid container spacing={4}>
        {trainings.map((training) => (
          <Grid item xs={12} md={6} key={training.id}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
                bgcolor: "#2c2c2c", // Dark background similar to carousel slides
                boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.5)", // Dark shadow for depth
                borderRadius: 3,
                overflow: "hidden", // To prevent any image overflow
              }}
            >
              <CardMedia
  component="img"
  image={training.image}
  alt={training.instructor}
  sx={{
    objectFit: "cover",  // Maintain the aspect ratio of the image
    width: "100%",       // Ensure it fills the full width
    height: 160,         // Fixed height for consistent display
    borderBottom: "1px solid #444", // Slight border for separation
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
