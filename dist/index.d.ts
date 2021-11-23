/// <reference types="react" />
/**
 * https://github.com/ant-design/ant-design/blob/1c85bb3b6231a01c53c53204846a03c4cfdf41f9/components/table/interface.tsx#L39
 * @param props 导出
 */
export declare const VList: (props: {
    height: string | number;
    onReachEnd?: () => void;
}) => {
    table: (props: any) => JSX.Element;
    body: {
        wrapper: (props: any) => JSX.Element;
        row: (props: any) => JSX.Element;
        cell: (props: any) => JSX.Element;
    };
};
