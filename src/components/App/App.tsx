import WidgetMeteo from '../WidgetMeteo/WidgetMeteo'
import './App.css'

function App() {
  return (
    <div>
      <h2>Bienvenue sur la météo widget de Valentin</h2>
      <WidgetMeteo city="Paris" zipcode="75001" />
      <WidgetMeteo city="Marseille" zipcode="13000" />
      <WidgetMeteo city="Nice" zipcode="06300" />
      <WidgetMeteo city="Avesnes-Le-Sec" zipcode="59296" />
    </div>
  )
}

export default App
