import { createApi } from "@reduxjs/toolkit/query/react";
import { Servers } from "./protocol/servers_pb_service";
import { Server, ListFilter } from "./protocol/servers_pb";
import { grpcBaseQuery } from "rtk-query-grpc-web";

export const collectiveApi = createApi({
  reducerPath: 'collectiveApi',
  baseQuery: grpcBaseQuery({
    host: 'http://localhost:8080',
  }),
  endpoints: (builder) => ({
    listServers: builder.query<Server.AsObject[], void>({
      query: () => ({ method: Servers.List, request: new ListFilter() }),
      transformResponse: (servers: Server[]): Server.AsObject[] => servers.map((server) => {
        return {
          ...server.toObject(),
          key: server.getName()
        }
      })
    }),
  }),
});

export const { useListServersQuery } = collectiveApi;