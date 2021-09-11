import { MiddlewareAPI, Middleware, isRejectedWithValue } from "@reduxjs/toolkit";
import { createApi, retry } from "@reduxjs/toolkit/query/react";
import { Servers } from "./protocol/servers_pb_service";
import { Server, ListFilter } from "./protocol/servers_pb";
import { grpcBaseQuery } from "rtk-query-grpc-web";
import { message } from "antd";

const grpcBaseQueryWithRetry = retry(grpcBaseQuery({
  host: 'http://localhost:8080',
}), { maxRetries: 3 });

export const collectiveApi = createApi({
  reducerPath: 'collectiveApi',
  baseQuery: grpcBaseQueryWithRetry,
  endpoints: (builder) => ({
    listServers: builder.query<Server.AsObject[], void>({
      query: () => ({ method: Servers.List, request: new ListFilter() }),
      transformResponse: (servers: Server[]) => servers.map((server) => server.toObject())
    }),
  }),
});

export const rtkQueryErrorLogger: Middleware = (api: MiddlewareAPI) => (next) => (action) => {
  // RTK Query uses `createAsyncThunk` from redux-toolkit under the hood, so we're able to utilize these use matchers!
  if (isRejectedWithValue(action)) {
    const { payload } = action;
    message.error(`Unable to complete request. (Code: ${payload.code})`)
  }
  return next(action)
}

export const { useListServersQuery } = collectiveApi;