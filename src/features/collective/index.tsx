import { Table } from 'antd';
import { Server } from './protocol/servers_pb';
import { useListServersQuery } from "./api";

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Description',
    dataIndex: 'description',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    sorter: {
      compare: (a: Server.AsObject, b: Server.AsObject) => a.status - b.status,
    },
  },
];

export function Collective() {
  const { data: servers, isLoading } = useListServersQuery();

  return (
    <>
      <Table columns={columns} dataSource={servers} loading={isLoading} />
    </>
  )
}
