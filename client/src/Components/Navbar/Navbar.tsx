import Container from "../Container"
import DarkMode from "./DarkMode"
import Logo from "./Logo"
import Menu from "./Menu"


const Navbar = () => {
  return (
    <div>
      <Container>
        <div className="flex flex-row justify-between items-center">
          <DarkMode/>
          <Logo/>
          <Menu/>
        </div>
      </Container>
    </div>
  )
}

export default Navbar