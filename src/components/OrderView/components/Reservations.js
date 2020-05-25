import React, { useState, useEffect } from 'react';
import Moment from 'react-moment';
import Bin from '../../../../assets/imgs/recycle-bin.png';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export const Reservation = ({ table, setTable, res: { _id, tableNumber, people, date } }) => {
  const [selected, setSelected] = useState(table === tableNumber);

  const toggleSelect = () => {
    if (table === tableNumber) {
      setTable([]);
    } else {
      setTable(tableNumber);
    }
  };

  useEffect(() => {
    if (table === tableNumber) {
      setSelected(true);
    } else {
      setSelected(false);
    }
  }, [table]);

  return (
    <div className='reservation-container'>
      <div onMouseDown={toggleSelect} className={`select ${selected && 'active'}`}></div>
      <div className='reservation-number'>Table {tableNumber}</div>
      <div className='reservation-people'>{people} People</div>
      <div className='reservation-date'>
        <Moment format='h:mm a'>{date}</Moment>
      </div>

      <div className='reservation-button'>
        <img src={Bin} alt='' />
      </div>
    </div>
  );
};

const Reservations = ({ table, setTable }) => {
  const [formInput, setFormInput] = useState({
    _id: Math.random(999999999),
    tableNumber: 0,
    people: 0,
    date: '',
  });

  const [reservations, setReservations] = useState([
    {
      _id: 1,
      tableNumber: 1,
      people: 12,
      date: new Date(),
    },
    {
      _id: 18,
      tableNumber: 18,
      people: 12,
      date: new Date(),
    },
    {
      _id: 3,
      tableNumber: 3,
      people: 12,
      date: new Date(),
    },
    {
      _id: 14,
      tableNumber: 14,
      people: 12,
      date: new Date(),
    },
    {
      _id: 5,
      tableNumber: 5,
      people: 12,
      date: new Date(),
    },
    {
      _id: 10,
      tableNumber: 10,
      people: 12,
      date: new Date(),
    },
    {
      _id: 7,
      tableNumber: 7,
      people: 12,
      date: new Date(),
    },
    {
      _id: 12,
      tableNumber: 12,
      people: 12,
      date: new Date(),
    },
    {
      _id: 9,
      tableNumber: 9,
      people: 12,
      date: new Date(),
    },
  ]);

  const onChange = (e) => {
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const dateO = formInput.date.replace('pm', '').split(':');
    let result = {
      _id: formInput.tableNumber,
      tableNumber: formInput.tableNumber,
      people: formInput.people,
      date: new Date().setHours(dateO[0], dateO[1]),
    };
    setFormInput({ tableNumber: 0, people: 0, date: '' });
    setReservations([...reservations, result]);
  };

  return (
    <div className='reservations-container'>
      {}
      <div className='header-container'>
        <div className='header-title'>Restaurant Reservations</div>
        <div className='header-text'>
          <Moment format='MMMM Do YYYY, h:mm:ss a'>{new Date()}</Moment>
        </div>
      </div>
      <div className='reservation-list-container'>
        {reservations.map((res) => (
          <Reservation key={res._id} res={res} table={table} setTable={setTable} />
        ))}
      </div>
      <div className='create-reservation-container'>
        <Form onSubmit={onSubmit} className='form-container'>
          <Row>
            <Col className='my-3'>
              <Form.Control
                as='select'
                name='tableNumber'
                size='lg'
                value={formInput.tableNumber}
                onChange={onChange}
              >
                <option value='0'>Table Number</option>
                {[...Array(20)].fill(0).map(
                  (t, index) =>
                    !!!reservations.find((r) => r.tableNumber === index + 1) && (
                      <option key={index} value={index + 1}>
                        {index + 1}
                      </option>
                    )
                )}
              </Form.Control>
            </Col>
          </Row>
          <Row>
            <Col className='my-3'>
              <Form.Control
                as='select'
                name='people'
                size='lg'
                value={formInput.people}
                onChange={onChange}
              >
                <option value='0'>How Many People?</option>
                {[...Array(15)].fill(0).map((table, index) => (
                  <option key={index} value={index + 1}>
                    {index + 1}
                  </option>
                ))}
              </Form.Control>
            </Col>
            <Col className='my-3'>
              <Form.Control
                as='select'
                name='date'
                size='lg'
                value={formInput.date}
                onChange={onChange}
              >
                <option value='0'>Time</option>
                <option value={'12:00pm'}>12:00pm</option>
                <option value={'12:30pm'}>12:30pm</option>
                <option value={'1:00pm'}>1:00pm</option>
                <option value={'1:30pm'}>1:30pm</option>
                <option value={'2:00pm'}>2:00pm</option>
                <option value={'2:30pm'}>2:30pm</option>
                <option value={'5:00pm'}>5:00pm</option>
                <option value={'5:30pm'}>5:30pm</option>
                <option value={'6:00pm'}>6:00pm</option>
                <option value={'6:30pm'}>6:30pm</option>
              </Form.Control>
            </Col>
          </Row>
          <Row>
            <Col className='my-3'>
              <Button
                type='submit'
                size='lg'
                style={{
                  backgroundImage: 'linear-gradient(120deg, #6fecf5 0%, #66a6ff 100%)',
                  border: 'none',
                }}
                block
              >
                Add Reservation
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default Reservations;
