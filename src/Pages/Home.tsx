import { useState, useEffect } from 'react';
import RangeCalender from '../features/RangeCalender/RangeCalender';
import Header from '../Component/Header/Header';
import axios from 'axios';
import CurrencyTable from '../features/Currency/Currency';

import { toast } from 'react-toastify';

const Home = () => {
    const [loading,setLoading]=useState(false);
    //using State in Object to add startDate-ENdDate
  const [date, setDate] = useState({
    startDate: '',
    endDate: '',
  });
  const [data, setData] = useState({
    motd: {
      msg: '',
      url: '',
    },
    success: false,
    timeseries: false,
    base: '',
    start_date: '',
    end_date: '',
    rates: {},
  });
  const getCurrencyRate = async () => {
    const { startDate, endDate } = date;
      setLoading(true);
    // CHECK IF BOTH ARE SELCETED
    if (startDate && endDate) {
      //Check Range with start and end
      if (startDate < endDate) {
        const res = await axios.get(
          `https://api.exchangerate.host/timeseries?start_date=${startDate}&end_date=${endDate}`
        );
        //setData(res.data);
        //console.log(res.data)
        setData(res.data);
        // setLoading(false);

        // !SHOW ALERT IF THE DATE RANGE IS NOT VALID
      } else if (startDate > endDate) {
        setDate({ startDate: '', endDate: '' });
        toast.error('This is Range is not found')
       
        // setLoading(false);
      }
    }
  };

  
  useEffect(() => {
    getCurrencyRate();
  }, [setDate, date]);


  return (
    <div className='main'>
        <Header/>
        {data.success && loading ?(
 <CurrencyTable data={data} setData={setData} setDate={setDate} />


        ):
        
        (
         <RangeCalender  setDate={setDate}/>
        )
            
        }
     
    </div>
  );
};

export default Home;
