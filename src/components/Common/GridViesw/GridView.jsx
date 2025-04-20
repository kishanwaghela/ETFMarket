// import { Heart, ShoppingCart } from 'lucide-react';

import './GridView.scss';
export function GridView({ data }) {
  console.log(data?.data.map((iteam) => (iteam?.prevClose - iteam?.ltP)));

  return (
    <div className='card-container d-flex'>
      {data?.data?.map((item) => (
        <div className='card-body' key={Math.random()}>
          <div>
            <div className='pb-14'>
              <p className='flex-between fw-127 black-text mb-5'> <span>{item?.symbol}</span> <span>{item?.ltP} 
                <span className='ml-5' style={{ color: ((item?.ltP - item?.prevClose) < 0) ? '#e3515c' : '#52b974' }}>({(((item?.ltP - item?.prevClose) / item?.prevClose) * 100).toFixed(2)}%) </span> </span> </p>
              <p className='flex-between fw-114 black-text'> <span className='gray-text'>NSE: Apr 17, 15:59 </span> <span className=''>Vol: {Number(item?.trdVal).toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}</span></p>
            </div>
            <div className='bo-gray-patb-10'>
              <p className='flex-between fw-124 gray-text mb-10 perc'>
                <span>1Y(%)</span>
                <span>3Y(%)</span>
                <span>5Y(%)</span>
              </p>
              <p className='flex-between fw-147 black-text perc'>
                <span>5%</span>
                <span>50%</span>
                <span>100%</span>
              </p>
            </div>
            <div className='pt-14'>
              <div className='flex-between'>
                <p className='fw-124 gray-text d-flex gap-5'>
                  <span>Tracking Error</span>
                  <span className='fw-147 black-text'>5%</span>
                </p>
                <p>
                  <span className='fw-124 gray-text '>AUM (Rs. Cr.)</span>
                </p>
              </div>
              <div className='flex-between '>
                <p className='fw-124 gray-text d-flex gap-5'>
                  <span>Expense Ratio</span>
                  <span className='fw-147 black-text'>5%</span>
                </p>
                <p>
                  <span className='fw-147 black-text'>5,00,000</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))
      }
    </div>
  );
}
