import { hoursLoad } from "../form/hours-load"

// Seleciona o input de data
const selectedDate = document.getElementById("date")

export function schedulesDay() {
  const date = selectedDate.value
  // Renderiza as horas disponíveis.
  hoursLoad({ date })
}
