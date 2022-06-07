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
export default () => {
  const status = useSelector(hardwareStatusSelector)
  return (
    <Container className={!status ? "activate" : "inactivate"}>
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
