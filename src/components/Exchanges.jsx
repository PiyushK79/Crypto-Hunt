import React,{useState} from 'react';
import millify from 'millify';
import { Collapse, Row, Col, Typography, Avatar } from 'antd';
import noImage from '../images/noImage.png';

import { useGetReferenceCurrenciesQuery } from '../services/cryptoApi';
import Loader from './Loader';

const { Title,Text } = Typography;
const { Panel } = Collapse;

const Exchanges = () => {
  const { data, isFetching } = useGetReferenceCurrenciesQuery();
  const referencesList = data?.data?.currencies;
  const empty = '-';

  if (isFetching) return <Loader />;

  return (
    <>
      <Row className='table-headings' >
        <Col span={6}><Title level={5}>Icon</Title></Col>
        <Col span={6}><Title level={5}>Name</Title></Col>
        <Col span={6}><Title level={5}>Symbol</Title></Col>
        <Col span={6}><Title level={5}>Sign</Title></Col>
      </Row>
      <Row xs={24} sm={12} lg={6}  >
        {referencesList.map((reference) => (
          <Col span={24}>
                  <Row key={reference.uuid} className='rows'>
                    <Col span={6}>
                      <Avatar className="exchange-image" src={reference.iconUrl || noImage} />
                    </Col>
                    <Col span={6}><Text><strong>{reference.name}</strong></Text> </Col>
                    <Col span={6} >{reference.symbol}</Col>
                    <Col span={6} > {reference.sign || empty}</Col>
                  </Row>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Exchanges;