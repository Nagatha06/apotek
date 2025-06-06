import axiosWithConfig from "../axiosWithConfig";

export const getHistory = async () => {
  try {
    const response = await axiosWithConfig.get("/history");

    return response.data;
  } catch (error) {
    throw Error("Failed to get history");
  }
};
