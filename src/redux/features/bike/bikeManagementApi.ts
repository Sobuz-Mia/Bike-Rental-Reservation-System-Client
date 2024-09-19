import { TBike } from "../../../types/bikes.type";
import { TResponseRedux } from "../../../types/global";
import { baseApi } from "../../api/baseApi";

const bikeManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBikes: builder.query({
      query: () => ({
        url: "/bikes",
        method: "GET",
      }),
      providesTags: ["bikes"],
      transformResponse: (response: TResponseRedux<TBike[]>) => {
        return { data: response?.data };
      },
    }),
    deleteBike: builder.mutation({
      query: (id) => ({
        url: `/bikes/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["bikes"],
      transformResponse: (response: TResponseRedux<TBike[]>) => {
        return { data: response?.data };
      },
    }),
  }),
});

export const { useGetAllBikesQuery, useDeleteBikeMutation } = bikeManagementApi;
