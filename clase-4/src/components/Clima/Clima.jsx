import { useState, useEffect } from "react"
const API_KEY = "bfd1b980aa5416c251b43fb2f1ba6c22"

export const Clima = () => {

    const [clima, setClima] = useState([])

    useEffect(() => {
        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${"New York"},${"New York"},${"USA"}&limit=${1}&appid=${API_KEY}`)
            .then(response => response.json())
            .then(datos => {
                const { lat, lon, country, state, name } = datos[0]
                fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=sp`)
                    .then(response => response.json())
                    .then(({ main, weather }) => {
                        const { feels_like, temp, humidity, pressure } = main
                        const { description } = weather[0]
                        const divClima =
                            <>
                                <p>Ciudad: {name}</p>
                                <p>Provincia: {state}</p>
                                <p>Pais: {country}</p>
                                <p>Temperatura: {temp} °C</p>
                                <p>Sensacion Termica: {feels_like} °C</p>
                                <p>Humedad: {humidity} %</p>
                                <p>Presion: {pressure} hPa</p>
                                <p>Descripcion: {description}</p>
                            </>
                        setClima(divClima)
                    })

            })
    }, [])

    return (
        <div>
            {clima}
        </div>
    )
}