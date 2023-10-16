import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";

import {
  DownloadOutlined,
  Email,
  PersonAdd,
  PointOfSale,
  Traffic,
} from "@mui/icons-material";

import { tokens } from "../../theme";

import Header from "../../components/Header";
import StatBox from "../../components/StatBox";
import LineChart from "../../components/LineChart";
import { mockTransactions } from "../../data/mockData";
import ProgressCircle from "../../components/ProgressCircle";
import BarChart from "../../components/BarChart";
import GeographyChart from "../../components/GeographyChart";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="welcome to your dashboard" />

        <Box>
          <Button
            sx={{
              padding: "10px 20px",
              fontSize: "14px",
              fontWeight: "bold",
              color: colors.grey[100],
              background: colors.blueAccent[700],
            }}>
            <DownloadOutlined sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px">
        {/* row 1 */}

        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}>
          <StatBox
            title="12,361"
            subtitle="Emails Sent"
            progress="0.75"
            increase="+14%"
            icon={
              <Email
                sx={{ fontSize: "26px", color: colors.greenAccent[600] }}
              />
            }
          />
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}>
          <StatBox
            title="431,225"
            subtitle="Sales Obtained"
            progress="0.5"
            increase="+21%"
            icon={
              <PointOfSale
                sx={{ fontSize: "26px", color: colors.greenAccent[600] }}
              />
            }
          />
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}>
          <StatBox
            title="32,441"
            subtitle="New Clients"
            progress="0.30"
            increase="+5%"
            icon={
              <PersonAdd
                sx={{ fontSize: "26px", color: colors.greenAccent[600] }}
              />
            }
          />
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}>
          <StatBox
            title="1,325,134"
            subtitle="Traffic Inbound"
            progress="0.80"
            increase="+43%"
            icon={
              <Traffic
                sx={{ fontSize: "26px", color: colors.greenAccent[600] }}
              />
            }
          />
        </Box>
        {/* Row 2 */}

        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mt="25px"
            p="0 30px">
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}>
                Revenue Generated
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[600]}>
                $59,342,32
              </Typography>
            </Box>

            <Box>
              <IconButton>
                <DownloadOutlined
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard />
          </Box>
        </Box>
        {/* transactions */}

        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            p="15px"
            borderBottom={`4px solid ${colors.primary[500]}`}
            color={colors.grey[100]}>
            <Typography variant="h5" fontWeight="600" color={colors.grey[100]}>
              Recent Transactions
            </Typography>
          </Box>

          {mockTransactions.map((transaction, index) => (
            <Box
              key={`${transaction.txId}-${index}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              p="15px"
              borderBottom={`4px solid ${colors.primary[500]}`}>
              <Box>
                <Typography
                  variant="h5"
                  fontWeight="600"
                  color={colors.greenAccent[500]}>
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box>
                <Typography color={colors.grey[100]}>
                  {transaction.date}
                </Typography>
              </Box>
              <Box>
                <Typography
                  p="5px 10px"
                  borderRadius="4px"
                  backgroundColor={colors.greenAccent[500]}>
                  ${transaction.cost}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>

        {/* row 3 */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          p="30px"
          backgroundColor={colors.primary[400]}>
          <Typography variant="h5" fontWeight="600">
            Campaign
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px">
            <ProgressCircle size="125" />
            <Typography
              variant="h5"
              color={colors.greenAccent[500]}
              sx={{ mt: "15px" }}>
              $48,352 revenue generated
            </Typography>
            <Typography>Includes extra misc expenditures and costs</Typography>
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}>
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}>
            Sales Quantity
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          padding="30px"
          backgroundColor={colors.primary[400]}>
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}>
            Geography Based Traffic
          </Typography>
          <Box height="200px">
            <GeographyChart isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
