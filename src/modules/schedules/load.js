import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day"
import { hoursLoad } from "../form/hours-load"

// Seleciona o input de data
const selectedDate = document.getElementById("date")

export async function schedulesDay() {
  const date = selectedDate.value

  // Buscando os agendamentos na API
  const dailySchedules = await scheduleFetchByDay({ date })

  // Renderiza as horas disponíveis.
  hoursLoad({ date })
}
