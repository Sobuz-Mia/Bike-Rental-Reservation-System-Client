import { TResponseRedux } from "../../../types/global";
import { TUser } from "../../../types/user.type";
import { baseApi } from "../../api/baseApi";

const userManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => ({
        url: "/users",
        method: "GET",
      }),
      providesTags: ["users"],
      transformResponse: (response: TResponseRedux<TUser[]>) => {
        return { data: response?.data };
      },
    }),
    deleteUser: builder.mutation({
      query: (id) => {
        return {
          url: `/users/${id}`,
          method: "PUT",
        };
      },
      invalidatesTags: ["users"],
    }),
    promotionUser: builder.mutation({
      query: (id) => {
        return {
          url: `/users/${id}`,
          method: "PATCH",
        };
      },
      invalidatesTags: ["users"],
    }),
    createUser: builder.mutation({
      query: (userData) => {
        console.log(userData);
        return {
          url: `/auth/signup`,
          method: "POST",
          body: userData,
        };
      },
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useDeleteUserMutation,
  usePromotionUserMutation,
  useCreateUserMutation,
} = userManagementApi;
