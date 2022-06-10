import Container, { Input, Button } from "./style"

export default () => {
  const handlerUserName = ({ target: { value } }) => console.log(value)
  return (
    <Container>
      <Input type="text" placeholder="username" onChange={handlerUserName} />
      <Button>
        <span>(E)</span>Login
      </Button>
    </Container>
  )
}
