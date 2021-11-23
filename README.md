# virtual-table-ant-design

The virtual table based on `ant-design@4.x` is simple and easy to use, without changing the original table component.

Since peerDependencies are used, please make sure to use reac and antd in your project, see **package.json** for details.

The project was packaged by rollup, exported **CommonJS** and **ESModule** modules, and used prettier to beautify the code.

**Try it out:** https://codesandbox.io/s/awesome-virtual-table-wxqc9

### Install

```js
npm install -D virtual-table-ant-design
```

### Usage

```sh
import { VList } from 'virtual-table-ant-design'
```

```sh
import { Table } from 'antd'

<Table
  rowSelection={rowSelection}
  pagination={false}
  rowKey="id"
  dataSource={dataSource}
  columns={columns}
  loading={loading}
  scroll={{ y: '50vh', x: true }}
  components={VList({
    height: 500,
  })}
/>
```

### Document

- https://github.com/ant-design/ant-design/blob/1c85bb3b6231a01c53c53204846a03c4cfdf41f9/components/table/interface.tsx#L39

- https://marvinsblog.net/post/2018-12-23-rollup-typescript-react/
