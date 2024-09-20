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
    getSingleBike: builder.query({
      query: (id) => ({
        url: `/bikes/${id}`,
        method: "GET",
      }),
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
    }),
    updateBike: builder.mutation({
      query: (args) => {
        return {
          url: `/bikes/${args.id}`,
          method: "PUT",
          body: args?.data,
        };
      },
      invalidatesTags: ["bikes"],
    }),
    createBike: builder.mutation({
      query: (data) => {
        return {
          url: `/bikes`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["bikes"],
    }),
  }),
});

export const {
  useGetAllBikesQuery,
  useDeleteBikeMutation,
  useGetSingleBikeQuery,
  useUpdateBikeMutation,
  useCreateBikeMutation,
} = bikeManagementApi;
