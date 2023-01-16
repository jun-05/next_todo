import axiosInstance from "../../../api/axiosInstance";

export const tasksAPI = {
    getList: async () => {
      const res = await axiosInstance.get(`/api/tasks`);
      return res;
    },
}