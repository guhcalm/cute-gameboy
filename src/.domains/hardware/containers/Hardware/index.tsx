import { useSelector } from "react-redux"
import { hardwareStatusSelector } from "../../../../store/selectors"
import Container from "./style"
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
import {
  Display,
  DirectionalPad,
  ActionPad,
  OperationalPad,
  Speaker
} from "../../components"
import { StatusInterfaces } from "../../../../interfaces"
export default () => {
  const status = useSelector(hardwareStatusSelector)
  const { ACTIVATE } =  StatusInterfaces.StatusEnum
  return (
    <Container className={status === ACTIVATE ? "activate" : "inactivate"}>
      <Header />
      <Main>
        <Display />
        <DirectionalPad></DirectionalPad>
        <ActionPad></ActionPad>
        <OperationalPad></OperationalPad>
        <Speaker></Speaker>
      </Main>
      <Footer />
    </Container>
  )
}
