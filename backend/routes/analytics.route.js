import { Router } from "express";
import { protectRoute, adminRoute } from "../middleware/auth.middleware.js";
import {
  getDailySalesData,
  getAnalyticsData,
} from "../controllers/analytics.controller.js";

const router = Router();

router.get("/", protectRoute, adminRoute, async (req, res) => {
  try {
    const analyticsData = await getAnalyticsData();

    const endDate = new Date();
    const startDate = new Date(endDate.getTime() - 7 * 24 * 60 * 60 * 1000);
    const dailySalesDate = await getDailySalesData(startDate, endDate);

    res.json(analyticsData, dailySalesDate);
  } catch (error) {
    console.log("Error in analytics route");
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

export default router;
