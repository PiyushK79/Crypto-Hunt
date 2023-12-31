import React from 'react'
import {Routes, Route,Link} from 'react-router-dom';
import {Layout,Typography,Space} from 'antd';

import {Navbar, Exchanges,Homepage, CryptoDetails,Cryptocurrencies,News} from './components';
import './App.css';
import 'antd/dist/reset.css';


const App = () => {
  return (
    <div className="app">
        <div className="navbar">
            <Navbar />
        </div>
        <div className='main'>
            <Layout>
                <div className='routes'>
                    <Routes>
                        <Route exact path="/" element={<Homepage />} />
                        <Route exact path="/reference-currencies" element={<Exchanges />} />
                        <Route exact path="/cryptocurrencies" element={<Cryptocurrencies/>} />
                        <Route exact path="/crypto/:uuid" element={<CryptoDetails />} />
                        <Route exact path="/news" element={<News />} />
                    </Routes>
                </div>
            </Layout>

        <div className='footer'>
            <Typography.Title  level={5} style={{color:"white", textAlign:"center"}}>
                Crypto-Hunt<br />
                Made with ❤️ by Piyush
            </Typography.Title>
            <Space>
                <Link to="/">Home</Link>
                <Link to="/reference-currencies">Reference-Currencies</Link>
                <Link to="/news">News</Link>
            </Space>
         </div>
        
        </div>
    </div>
  )
}

export default App

