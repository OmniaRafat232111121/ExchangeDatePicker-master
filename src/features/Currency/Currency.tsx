import { FC } from 'react';
import { MdRestartAlt } from 'react-icons/md';
import moment from 'moment';
import './Currency.css'

interface CurrencyTableProps{
    data: any;
  setData: any;
  setDate: (date: any) => void;
}

const CurrencyTable: FC<CurrencyTableProps> = ({
  data,
  setData,
  setDate,
}: CurrencyTableProps) => {
  //response from APi
  const handleRestart = () => {
    setData({
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

    setDate({
      startDate: '',
      endDate: '',
    });
  };

  return (
    <div className='currency__page'>
      <div className='currency__page--date'>
        {/*add Day*/}
        <p className='currency__page--date-today'>
          <span className='today'>Today:- </span>
          {moment(new Date()).format('MMMM Do YYYY, h:mm:ss a')}
        </p>

        {/* Range of start-end Day */}

        <div className='currency_range'>
       
         <p className='currency__page--date-range-start'>
            {moment(data.start_date).format('MMMM Do YYYY, h:mm:ss a')}
          </p>
          <span className='range-hyphen'>-</span>
          <p className='currency__page--date-range-end'>
            {moment(data.end_date).format('MMMM Do YYYY, h:mm:ss a')}
          </p>
         
        </div>
      </div>

      <table className='currency__page--table'>
        <thead>
          <tr className='table'>
            <th>Date</th>
            <th>EGP</th>
            <th>CAD</th>
          </tr>
        </thead>

        
        <tbody>
          {Object.keys(data.rates).map(item => {
            if (Object.keys(data.rates[item]).length !== 0) {
              return (
                <tr key={item}>
                  <td>{moment(item).format('DD/MM/YYYY')}</td>
                  <td>{data.rates[item].EGP.toFixed(3)}</td>
                  <td>{data.rates[item].CAD.toFixed(3)}</td>
                </tr>
              );
            } else {
              return '';
            }
          })}
        </tbody>
      </table>

      {/* Add Button to forward Home Calender to get Back Home without any CHange*/}
      <button
        className='currency-btn-refersh'
        onClick={handleRestart}
    >
        <MdRestartAlt />
      </button>
    </div>
  );
};

export default CurrencyTable;