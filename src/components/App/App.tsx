import WidgetMeteo from '../WidgetMeteo/WidgetMeteo'
import './App.css'

function App() {
  return (
    <div>
      <h2>Bienvenue sur le météo widget de Solene</h2>
      <WidgetMeteo city="Paris" />
      <WidgetMeteo city="Savines-le-Lac" />
    </div>
  )
}

export default App
