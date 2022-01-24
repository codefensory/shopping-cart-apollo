import { FunctionComponent, ReactElement } from "react";

type Props = {
  each: any[] | undefined
}

const For: FunctionComponent<Props> = ({ each, children }) => {
  return (<>
    {each && each.map(children as (item: any, index: number) => ReactElement)}
  </>)
};

export default For;
