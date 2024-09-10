import React, {useState} from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import UseFetch from "../../hooks/useFetch";


const BiaxialBarChart = () => {
  const baseURL = import.meta.env.VITE_baseURL;
  const [data, setData] = useState([
    {
        "name": "Introduction to Node.js",
        "rating": 4.8,
        "numOfReviews": 10
    },
    {
        "name": "User Journey Mapping",
        "rating": 4.8,
        "numOfReviews": 5
    },
    {
        "name": "Statistical Analysis with R",
        "rating": 4.8,
        "numOfReviews": 4
    },
    {
        "name": "Introduction to UX Design",
        "rating": 4.8,
        "numOfReviews": 4
    },
    {
        "name": "API Development with Express",
        "rating": 4.6,
        "numOfReviews": 13
    },
    {
        "name": "Introduction to Cyber Security",
        "rating": 4.5,
        "numOfReviews": 17
    },
    {
        "name": "Design Thinking",
        "rating": 4.5,
        "numOfReviews": 15
    },
    {
        "name": "Network Security and Defense",
        "rating": 4.5,
        "numOfReviews": 8
    },
    {
        "name": "Introduction to Data Analysis",
        "rating": 4.5,
        "numOfReviews": 6
    },
    {
        "name": "Introduction to DevOps",
        "rating": 4.5,
        "numOfReviews": 6
    },
    {
        "name": "Modern JavaScript Frameworks",
        "rating": 4.4,
        "numOfReviews": 16
    },
    {
        "name": "Introduction to Graphic Design",
        "rating": 4.4,
        "numOfReviews": 14
    },
    {
        "name": "JavaScript Essentials",
        "rating": 4.4,
        "numOfReviews": 14
    },
    {
        "name": "Brand Identity Design",
        "rating": 4.4,
        "numOfReviews": 14
    },
    {
        "name": "Advanced Threat Detection",
        "rating": 4.4,
        "numOfReviews": 9
    }
])


  // const [data, error, loading, reFetch] = UseFetch(
  //   `${baseURL}/admin/charts/biaxial`,
  //   [],
  //   []
  // );

  const chartData = data.map(course => ({
    name: course.name,
    rating: course.rating,
    numOfReviews: course.numOfReviews
  }));

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={chartData}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis yAxisId="left" orientation="left" />
        <YAxis yAxisId="right" orientation="right" />
        <Tooltip />
        <Legend />
        <Bar yAxisId="left" dataKey="rating" fill="#8884d8" />
        <Bar yAxisId="right" dataKey="numOfReviews" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BiaxialBarChart;