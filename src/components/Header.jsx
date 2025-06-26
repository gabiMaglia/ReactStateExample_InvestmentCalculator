import logo from '../assets/investment-calculator-logo.png'

const Header = () => {
  return (
    <header id='header'>
        <img src={logo} alt="Logo" />
        <h1>Calculadora de inversiones</h1>
    </header>
  )
}

export default Header