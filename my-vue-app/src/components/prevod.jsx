import{useStete} from 'react'

const Prevod = () => {
    return(
        <div>
            <h1>prevod eur do meny</h1>

            <div>
            <input 
                type='number'
                value={cislo}
                onChange={(e) => setCislo(e.target.value)}
                style={{padding: '5px'}}
            />
            <select></select>
            <button>preved</button>
            </div>
        </div>
    )
}