import axiosInstance from "../../../api/axiosInstance";
import { task } from "../type/TaskType"


export const taskAPI = {
    createTask : async (formData : task) => {
       const res = await axiosInstance.post('/api/task/add',formData
       )
    },
    updateTask : async (formData : task) => {
        const res = await axiosInstance.patch('/api/task/update',formData
        )
     },
     deleteTask : async (_id : string) => {
        const res = await axiosInstance.delete(`/api/task/delete?id=${_id}`
        )
    },
    getTask : async (_id:string) =>{
        const res = await axiosInstance.get(`/api/task/get?id=${_id}`)
        return res
    }
}