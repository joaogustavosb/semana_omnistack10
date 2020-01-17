import React, { useState, useEffect } from 'react'
import './style.css'


function DevForm({ onSubmit }) {
    // constantes de estado
    const [github_username, setGithub_username] = useState('')
    const [techs, setTechs] = useState('')
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')

    // Dispara um função, sempre que uma informação for alterada
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(possition => {
            const { latitude, longitude } = possition.coords
            setLatitude(latitude)
            setLongitude(longitude)
            console.log(possition)
        },
            (err) => {
                alert("Nesesitamos q permita sua localização")
            },
            {
                enableHighAccuracy: true,
                maximumAge: 30000,
                timeout: 30000
            }
        )
    }, [])

    async function handleSubmit(e) {
        e.preventDefault()

        await onSubmit({
            github_username,
            techs,
            latitude,
            longitude
        })

        setGithub_username("")
        setTechs("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-block">
                <label htmlFor="github_username" >Usuário do GitHub</label>
                <input
                    name="github_username"
                    id="github_username"
                    value={github_username}
                    required
                    onChange={e => setGithub_username(e.target.value)}
                />
            </div>

            <div className="input-block">
                <label htmlFor="techs" >Técnologias</label>
                <input
                    name="techs"
                    id="techs"
                    value={techs}
                    required
                    onChange={e => setTechs(e.target.value)}
                />
            </div>
            <button type="submit">Cadastrar</button>
        </form>
    )
}

export default DevForm