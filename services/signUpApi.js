import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const signUpApi = createApi({
  reducerPath: "signUpApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://192.168.1.6:5000/api/",
    prepareHeaders: (headers, { getState }) => {
      const {
        auth: { token },
      } = getState();
      console.log("signApi", token);
      headers.set("authorization", token ? token : "");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (user) => {
        return {
          url: "registerPartner",
          method: "POST",
          body: user,
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),
    verifyOtp: builder.mutation({
      query: (user) => {
        return {
          url: "verifyOtp",
          method: "POST",
          body: user,
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),
    login: builder.mutation({
      query: (user) => {
        return {
          url: "login",
          method: "POST",
          body: user,
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),
    organization: builder.mutation({
      query: (user) => {
        return {
          url: "addOrganization",
          method: "POST",
          body: user,
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),
    getOrganization: builder.query({
      query: () => {
        return {
          url: "organization",
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),
    UpdateOrganization: builder.mutation({
      query: (organization) => {
        console.log("organization",organization);
        const {id,...data}=organization;
        return {
          url: `updateOrganization/${id}`,
          method: "PUT",
          body: data,
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),
    deleteOrganization: builder.mutation({
      query: (id) => {
        console.log("organization delete successfully",id)
        return {
          url: `deleteOrganization/${id}`,
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        };
      },
    }),
    bankDetails: builder.mutation({
      query: (user) => {
        return {
          url: "addBankDetails",
          method: "POST",
          body: user,
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),
    UpdateBankDetails: builder.mutation({
      query: (bankDetails) => {
        console.log("updatebank",bankDetails);
        const {id,...data}=bankDetails;
        return {
          url: `updateBankDetails/${id}`,
          method: "PUT",
          body: data,
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),
    getBankDetails: builder.query({
      query: () => {
        return {
          url: "bankDetails",
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),
    deleteBankDetails: builder.mutation({
      query: (id) => {
        // console.log("Team delete successfully",id)
        return {
          url: `deleteBankDetails/${id}`,
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        };
      },
    }),
    kycDetails: builder.mutation({
      query: (user) => {
        return {
          url: "addKYC",
          method: "POST",
          body: user,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        };
      },
    }),
    getKYC: builder.query({
      query: () => {
        return {
          url: "KYC",
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),
    UpdateKYC: builder.mutation({
      query: (user) => {
        console.log("updateKYC",user);
        const transformedData = Object.fromEntries(user._parts);
        const { id, ...data}=transformedData;
        console.log(id)
        return {
          url: `updateKyc/${id}`,
          method: "PUT",
          body: data,
          // headers: {
          //   "Content-type": "multipart/form-data",
          // },
        };
      },
    }),
    deleteKYC: builder.mutation({
      query: (id) => {
        console.log("Team delete successfully",id)
        return {
          url: `deleteKyc/${id}`,
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        };
      },
    }),
    personalDetails: builder.mutation({
      query: (user) => {
        return {
          url: "updatePersonalDetails",
          method: "PUT",
          body: user,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        };
      },
    }),
    getDetails: builder.query({
      query: () => {
        return {
          url: "personalDetails",
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        };
      },
    }),
    createTeam: builder.mutation({
      query: (user) => {
        return {
          url: "createTeam",
          method: "POST",
          body: user,
          headers: {
            "Content-Type": "application/json",
          },
        };
      },
    }),
    getCreateTeam: builder.query({
      query: () => {
        return {
          url: "myTeam",
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        };
      },
    }),
    addMember: builder.mutation({
      query: (addMember) => {
        console.log("Add Member",addMember)
        const {id , ...data} = addMember
        return {
          url: `addNewTeamPartner/${id}`,
          method: "POST",
          body: data,
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),
    getPartnerInTeam: builder.query({
      query: (id) => {
        return {
          url: `partnerInTeam/${id}`,
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        };
      },
    }),
    deleteTeamMember: builder.mutation({
      query: (id) => {
        console.log("Partner delete successfully",id)
        return {
          url: `deleteTeamMember/${id}`,
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        };
      },
    }),
    updateName: builder.mutation({
      query: (user) => {
        // console.log("UpdateData", user);
        const { id, ...data } = user;
        // console.log("ActualUpdateData",data);
        return {
          url: `updateTeamName/${id}`,
          method: "PUT",
          body: data,
          headers: {
            "Content-Type": "application/json",
          },
        };
      },
    }),
    deleteTeam: builder.mutation({
      query: (id) => {
        // console.log("Team delete successfully",id)
        return {
          url: `destroyTeam/${id}`,
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        };
      },
    }),
    addWorkingHour: builder.mutation({
      query: (workingHour) => {
        return {
          url: "addWorkingHour",
          method: "POST",
          body: workingHour,
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),
    getWorkingHour: builder.query({
      query: () => {
        return {
          url: "workingHour",
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),
    updateWorkingHour: builder.mutation({
      query: (workingHour) => {
        // console.log("UpdateData", user);
        const { id, ...data } = workingHour;
        console.log("ActualUpdateData",data);
        return {
          url: `updateWorkingHour/${id}`,
          method: "PUT",
          body: data,
          headers: {
            "Content-Type": "application/json",
          },
        };
      },
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useVerifyOtpMutation,
  useLoginMutation,
  useOrganizationMutation,
  useUpdateOrganizationMutation,
  useGetOrganizationQuery,
  useDeleteOrganizationMutation,
  useBankDetailsMutation,
  useGetBankDetailsQuery,
  useUpdateBankDetailsMutation,
  useDeleteBankDetailsMutation,
  useKycDetailsMutation,
  useGetKYCQuery,
  useUpdateKYCMutation,
  useDeleteKYCMutation,
  usePersonalDetailsMutation,
  useGetDetailsQuery,
  useCreateTeamMutation,
  useGetCreateTeamQuery,
  useAddMemberMutation,
  useGetPartnerInTeamQuery,
  useDeleteTeamMemberMutation,
  useUpdateNameMutation,
  useDeleteTeamMutation,
  useAddWorkingHourMutation,
  useGetWorkingHourQuery,
  useUpdateWorkingHourMutation
} = signUpApi;
