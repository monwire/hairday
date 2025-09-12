import dayjs from "dayjs"
import { apiConfig } from "./api-config"

export async function scheduleFetchByDay() {
  try {
    // Fazendo a requisição.
    const response = await fetch(`${apiConfig.baseURL}/schedules`) // O valor padrão do atributo method do objeto 'options?' do fetch é "GET"

    // Converte a requisição para JSON
    const data = await response.json()

    // Filtrando os agendamentos pelo dia selecionado
    const dailySchedules = data.filter((schedule) =>
      dayjs(date).isSame(schedule.when, "day")
    )

    return dailySchedules
  } catch (error) {
    console.log(error)
    alert("Não foi possível buscar os agendamentos do dia selecionado.")
  }
}
