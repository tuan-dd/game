// import React, { useEffect, useState } from 'react'
// const RepeatNotice = ({ message }) => {
//     useEffect(() => {
//         const id = setInterval(() => {
//             console.log(message)
//         }, 4000)
//         return () => {
//             clearInterval(id)
//         }
//     });
//     return (<div>{message}</div>)
// }

// function App() {
//     console.log('rendering');
//     const [language, setLanguage] = useState(
//         () => window.localStorage.getItem('language') || '');
//     const [count, setCount] = useState(
//         () => Number(window.localStorage.getItem('count')) || 0);

//     useEffect(() => {
//         console.log('run title');
//         document.title = 'Learn useEffect';
//     }, [])

//     useEffect(() => {
//         console.log('update language')
//         window.localStorage.setItem('language', language);
//     }, [language]);

//     useEffect(() => {
//         console.log('update count');
//         window.localStorage.setItem('count', count);
//     }, [count]);
//     return (
//         <>
//             <label htmlFor='language>'>Favorite language</label>
//             <input id='language' value={language}
//                 onChange={(e) => setLanguage(e.target.value)} />
//             {language ?
//                 (<div><p>{`My favorite language is ${language}`}</p></div>) :
//                 (<div><p>{`Type your language`}</p>)</div>)
//             }
//             <br />
//             <button onClick={() => setCount(count + 1)} >Numbles++ : {count}</button>
//             {/* <RepeatNotice message={'Tuan khoai to'} /> */}
//         </>
//     );
// }

// export default App;
import React, { useEffect, useState } from 'react'
const URL = 'https://api.openweathermap.org/data/2.5/weather?'
const apiKey = 'cf9ede22dde172d4c0f5297b698feaec'
function App() {
    const [searchCity, setSearchCity] = useState('')
    const [city, setCity] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [weatherCity, setWeatherCity] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        setSearchCity(city)
    }
    useEffect(() => {
        const getWeatherCity = async () => {
            if (!searchCity) return;
            setLoading(true)
            try {
                const response = await fetch(`${URL}q=${searchCity}&units=metric&APPID=${apiKey}`)
                const data = await response.json()
                if (response.ok) {
                    console.log(data)
                    setWeatherCity((data))
                } else {
                    setWeatherCity('')
                    setError(data.message)
                }
            } catch (error) {
                setError(error.message)
            }
            setLoading(false)
        }
        getWeatherCity()
    }, [searchCity])
    return (
        <div>
            <form onSubmit={handleSubmit} >
                <label htmlFor='weather'> Input Your City </label>
                <input onChange={(e) => setCity(e.target.value)} value={city} type='text' id='weather' />
                <button type='submit'>submit</button>
            </form>
            <br />
            {loading ?
                (<div style={{ color: 'red' }}>loading...</div>) : (
                    <>
                        {weatherCity ?
                            (<div>{`${weatherCity.name},Temperature:${weatherCity.main.temp}°C,Humidity:${weatherCity.main.humidity},Date:${new Date()}`}</div>) :
                            (<div>{error}</div>)
                        }
                    </>
                )}

        </div>
    )
}

export default App

