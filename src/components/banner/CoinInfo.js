import { CircularProgress, createTheme, makeStyles, ThemeProvider } from '@material-ui/core';
import axios from 'axios';
import React, {useEffect, useState, useRef} from 'react'
import { HistoricalChart } from '../../config/api';
import { chartDays } from '../../config/data';
import { CryptoState } from '../../CryptoContext';
import SelectButton from '../SelectButton';
// import { Chart } from 'react-chartjs-2';
// import { Chart as ChartJS, LineController, LineElement, PointElement, LinearScale, Title } from 'chart.js';


const useStyles = makeStyles((theme) => ({
    container: {
      width: "75%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 25,
      padding: 40,
      [theme.breakpoints.down("md")]: {
        width: "100%",
        marginTop: 0,
        padding: 20,
        paddingTop: 0,
      },
    },
  }));

const CoinInfo = ({ coin }) => {
    const ref = useRef();
    const [historicalData, setHistoricalData] = useState();
    const [days, setDays] = useState(1);

    const { currency } = CryptoState()

    const fetchHistoryData = async () => {
        const { data } = await axios.get(HistoricalChart(coin.id, days, currency));

        setHistoricalData(data.prices);
    };

    useEffect(() => {
        fetchHistoryData();
    }, [currency, days]);


    const darkTheme = createTheme({
        palette: {
            primary: {
                main: "#fff",
            },
            type: "dark"
        },
    });

    const classes = useStyles();

   
    return(
        <ThemeProvider theme={darkTheme}>
            <div className={classes.container}>
                {
                    !historicalData ? (
                        <CircularProgress
                            style={{ color: "gold" }}
                            size={250}
                            thickness={1} 
                        />
                    ):(
                    <>
{/*                  
                    <Line data={{

                            labels: historicalData.map(( coin ) => {
                                let date = new Date(coin[0]);
                                let time = 
                                    date.getHours() > 12
                                        ? `${date.getHours() - 12}: ${date.getHours()} PM`
                                        : `${date.getHours()}: ${date.getMinutes()} AM`;
                                    
                                    return days === 1 ? time : date.toLocaleDateString()
                            }),
                            datasets: [
                                { 
                                    data: historicalData.map((coin) => coin[1]),
                                    label: `Price (past ${days} Days ) in ${currency}`,
                                    borderColor: "#EEBC1D"
                                },
                            ]
                        }}   
                        options={{
                            elements: {
                                point: {
                                    radius: 1,
                                },
                            },
                        }}    
                    /> */}
                    <div style={{ display: "flex",
                                marginTop: 20,
                                justifyContent: "space-around",
                                width: "100%"
                        }}>
                        { 
                            chartDays.map((day) => (
                                <SelectButton
                                    key={day.value}
                                    onClick={() => setDays(day.value)}
                                    selected={day.value === days}
                                >{day.label}
                                
                                </SelectButton>
                            ))
                        }
                    </div>
                    </>
                    )
                }

            </div>
        </ThemeProvider>
    );
}

export default CoinInfo;



