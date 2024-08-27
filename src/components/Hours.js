

const Hours = ({  }) => {

    const isWeekendDay = () => {
        let date= new Date();
        return date.getDay() === 0 || date.getDay() === 6;
    }

    return (
        <>
            { isWeekendDay() ? 
                "El refugio abre de 10 a.m. a 4 p.m."

                :
                "El refugio abre de 8 a.m. a 12 p.m."

                
            }
        </>
    )
  }
  
  export default Hours