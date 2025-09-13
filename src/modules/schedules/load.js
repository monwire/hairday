import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js"
import { schedulesShow } from "../schedules/show.js"
import { hoursLoad } from "../form/hours-load.js"

// Seleciona o input de data
const selectedDate = document.getElementById("date")

export async function schedulesDay() {
  const date = selectedDate.value

  // Buscando os agendamentos na API
  const dailySchedules = await scheduleFetchByDay({ date })

  // Exibe os agendamentos
  schedulesShow({ dailySchedules })

  // Renderiza as horas disponíveis.
  hoursLoad({ date, dailySchedules })
}
