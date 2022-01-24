import { FunctionComponent } from "react"
type Props = {
  when: boolean | undefined,
}

const Show: FunctionComponent<Props> = ({ when, children }) => {
  return <>{when ? children : undefined}</>
}

export default Show
