import React, {useState, useEffect} from "react";
import BiaxialBarChart from "../components/dashboard/BiaxialBarChart";
import CourseDistributionChart from "../components/dashboard/CourseDistributionChart";
import UserGrowthChart from "../components/dashboard/UserGrowthChart";
import TopSellingCoursesChart from "../components/dashboard/TopSellingCoursesChart";
import TopRevenueGeneratingCoursesChart from "../components/dashboard/TopRevenueGeneratingCoursesChart";
import UseFetch from "../hooks/useFetch";
import InfoSummaryChart from "../components/dashboard/InfoSummaryChart";
import ClockLoader from "../components/general/ClockLoader";


const Dashboard = () => {
  const baseURL = import.meta.env.VITE_baseURL;
  const [data, setData] = useState([
    {
        "id": "66dfc952436086f433fbf5fa",
        "title": "API Development with Express",
        "price": 169.99,
        "totalSales": 16,
        "revenue": 2719.84
    },
    {
        "id": "66dfc952436086f433fbf48c",
        "title": "Building Web Applications",
        "price": 199.99,
        "totalSales": 15,
        "revenue": 2999.8500000000004
    },
    {
        "id": "66dfc952436086f433fbf5ef",
        "title": "Database Management with MongoDB",
        "price": 159.99,
        "totalSales": 14,
        "revenue": 2239.86
    },
    {
        "id": "66dfc952436086f433fbf64a",
        "title": "Advanced Threat Detection",
        "price": 299.99,
        "totalSales": 14,
        "revenue": 4199.860000000001
    },
    {
        "id": "66dfc952436086f433fbf4a9",
        "title": "Introduction to UX Design",
        "price": 129.99,
        "totalSales": 13,
        "revenue": 1689.8700000000001
    },
    {
        "id": "66dfc952436086f433fbf5b1",
        "title": "Typography",
        "price": 169.99,
        "totalSales": 13,
        "revenue": 2209.87
    },
    {
        "id": "66dfc952436086f433fbf44e",
        "title": "JavaScript Essentials",
        "price": 119.99,
        "totalSales": 12,
        "revenue": 1439.8799999999999
    },
    {
        "id": "66dfc952436086f433fbf461",
        "title": "Responsive Web Design",
        "price": 149.99,
        "totalSales": 12,
        "revenue": 1799.88
    },
    {
        "id": "66dfc952436086f433fbf636",
        "title": "Ethical Hacking and Penetration Testing",
        "price": 249.99,
        "totalSales": 12,
        "revenue": 2999.88
    },
    {
        "id": "66dfc952436086f433fbf51b",
        "title": "Big Data Analytics",
        "price": 229.99,
        "totalSales": 11,
        "revenue": 2529.8900000000003
    },
    {
        "id": "66dfc952436086f433fbf556",
        "title": "Kubernetes for Beginners",
        "price": 199.99,
        "totalSales": 11,
        "revenue": 2199.8900000000003
    },
    {
        "id": "66dfc952436086f433fbf59c",
        "title": "Logo Design",
        "price": 149.99,
        "totalSales": 11,
        "revenue": 1649.89
    },
    {
        "id": "66dfc952436086f433fbf5ba",
        "title": "Brand Identity Design",
        "price": 179.99,
        "totalSales": 11,
        "revenue": 1979.89
    },
    {
        "id": "66dfc952436086f433fbf5cd",
        "title": "Introduction to Node.js",
        "price": 129.99,
        "totalSales": 11,
        "revenue": 1429.89
    },
    {
        "id": "66dfc952436086f433fbf589",
        "title": "Introduction to Graphic Design",
        "price": 139.99,
        "totalSales": 10,
        "revenue": 1399.9
    }
])

  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 600)
  })

  // const [data, error, loading, reFetch] = UseFetch(
  //   `${baseURL}/admin/charts/top-selling-courses`,
  //   [],
  //   []
  // );

  const sortedByRevenue = [...data].sort((a, b) =>
    a?.revenue > b?.revenue ? -1 : 1
  );

  return (
    <div className="w-full ">
      {loading && <ClockLoader />}
      <div className="flex justify-between items-end sm:px-3 px-2 ">
        <h1 className=" text-5xl font-semibold text-[#212529] underline">
          Dashboard
        </h1>
      </div>

      <div className="sm:px-3 px-2 py-4 overflow-x-hidden my-4 flex flex-col gap-6">


        <div className="bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] grid md:grid-cols-2 grid-cols-1 rounded-sm w-full">
          <div className="col-span-1">
            <TopSellingCoursesChart data={data} />
          </div>
          <div className="col-span-1">
            <TopRevenueGeneratingCoursesChart data={sortedByRevenue} />
          </div>
        </div>

        <div className="bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-sm z-20 grid md:grid-cols-2 grid-cols-1">
          <div className="col-span-1 flex justify-center">
            <CourseDistributionChart />
          </div>
          <div className="col-span-1">
            <InfoSummaryChart />
          </div>
        </div>

        
        <div className="bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-sm">
        <h2 className="text-center font-semibold mb-4">Higest Rated Courses</h2>
          <BiaxialBarChart />
        </div>

        <div className="bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-sm">
        <h2 className="text-center font-semibold mb-4">User Growth Overtime</h2>

          <UserGrowthChart />
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
