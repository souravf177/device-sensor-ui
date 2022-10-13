/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { customers } from '../constansts/Customers'
import { Col, Row, Button, Form, Container } from 'react-bootstrap'
import { useAddSensor } from '../hooks/useAddSensor'
import { useNavigate, useParams } from 'react-router-dom'
import { useSensorDetail } from '../hooks/useSensorDetail'
import { useUpdateSensor } from '../hooks/useUpdateSensor'

interface ISensorData {
  location: string
  customer: string
  min_temp_limit: string
  monitor_min_temp: boolean
  max_temp_limit: string
  monitor_max_temp: boolean
}

const AddSensor: React.FC = () => {
  const [formValues, setFormValue] = useState<ISensorData | null>(null)
  const [isEditMode, setIsEditMode] = useState(false)
  const navigate = useNavigate()
  const schema = yup.object().shape({
    location: yup.string().required('Location is required'),
    customer: yup.string().required(),
    min_temp_limit: yup.string().required(),
    max_temp_limit: yup.string().required(),
  })
  const initialValues = {
    location: '',
    customer: '',
    min_temp_limit: '',
    monitor_min_temp: false,
    max_temp_limit: '',
    monitor_max_temp: false,
  }
  const { id } = useParams()

  const onSuccess = (data: any) => {
    setFormValue({
      location: data?.data.result.location,
      customer: data?.data.result.customer,
      min_temp_limit: '',
      monitor_min_temp: false,
      max_temp_limit: '',
      monitor_max_temp: false,
    })
  }
  if (id) {
    useSensorDetail(id, onSuccess)
  }

  useEffect(() => {
    if (id) {
      setIsEditMode(true)
    }
  }, [])

  const { mutate: addSensor } = useAddSensor()
  const { mutate: updateSensor } = useUpdateSensor(id)
  const onSubmit = () => {
    if (isEditMode) {
      updateSensor(values)
    } else {
      addSensor(values)
    }
    resetForm()
    navigate('/')
  }
  const { values, errors, touched, handleChange, handleBlur, handleSubmit, resetForm } = useFormik({
    initialValues: formValues || initialValues,
    validationSchema: schema,
    onSubmit,
    enableReinitialize: true,
  })
  console.log(errors)

  return (
    // <form style={{ display: 'flex', justifyContent: 'space-around' }}>
    //   <div
    //     style={{
    //       height: '50vh',
    //       display: 'flex',
    //       flexDirection: 'column',
    //       justifyContent: 'space-evenly',
    //     }}
    //   >
    //     <input
    //       type='text'
    //       id='location'
    //       value={values.location}
    //       onChange={handleChange}
    //       onBlur={handleBlur}
    //       placeholder='Location'
    //     />

    //     <select id='customer' value={values.customer} onChange={handleChange}>
    //       {customers.map((customer) => {
    //         return (
    //           <option value={customer.customerId} key={customer.customerId}>
    //             {customer.customerName}
    //           </option>
    //         )
    //       })}
    //     </select>
    //   </div>
    //   <div>
    //     <input type='text' />
    //     <input type='text' />
    //   </div>
    // </form>
    <Container>
      <div style={{ display: 'flex', justifyContent: 'space-between', margin: '1rem' }}>
        <span>
          <b>New Sensor</b>
        </span>
        <span>
          <b>Alerts</b>
        </span>
      </div>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Control
              id='location'
              value={values.location}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder='Location'
            />
            {errors.location && touched.location ? (
              <p style={{ color: 'red' }}>Location is required</p>
            ) : (
              ''
            )}
          </Col>
          <Col>
            <Form.Control
              type='number'
              id='min_temp_limit'
              value={values.min_temp_limit}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder='Min Temp. Threshold'
            />
            {errors.min_temp_limit && touched.min_temp_limit ? (
              <p style={{ color: 'red' }}>Min Temp is required</p>
            ) : (
              ''
            )}
            <Form.Check
              type='checkbox'
              label='Monitor Min Temperature'
              id='monitor_min_temp'
              value={values.monitor_min_temp.toString()}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <Form.Select id='customer' value={values.customer} onChange={handleChange}>
              {customers.map((customer) => {
                return (
                  <option value={customer.customerId} key={customer.customerId}>
                    {customer.customerName}
                  </option>
                )
              })}
            </Form.Select>
          </Col>
          <Col>
            <Form.Control
              type='number'
              id='max_temp_limit'
              value={values.max_temp_limit}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder='Min Temp. Threshold'
            />
            {errors.max_temp_limit && touched.max_temp_limit ? (
              <p style={{ color: 'red' }}>Max Temp is required</p>
            ) : (
              ''
            )}
            <Form.Check
              type='checkbox'
              label='Monitor Max Temperature'
              id='monitor_max_temp'
              value={values.monitor_max_temp.toString()}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <br />
        <Button variant='secondary' type='submit'>
          {isEditMode ? 'Update Sensor' : 'Add Sensor'}
        </Button>
      </Form>
    </Container>
  )
}

export default AddSensor
