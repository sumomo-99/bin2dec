import { useState } from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Form, Grid, Header, Input, Label, Statistic } from 'semantic-ui-react'

export default function Home() {
  const [value, setValue] = useState('')
  const [decimal, setDecimal] = useState('')
  const [error, setError] = useState(false)
  
  function handleChange(e) {
    setError(false)
    
    if (e.target.value.match(/^[01]+$/)) {
      setValue(e.target.value)
      setDecimal(parseInt(e.target.value, 2))
    } else if (e.target.value == '') {
      setValue('')
      setDecimal('')
    } else {
      setError({content: 'Please enter 0 or 1', pointing: 'below'})
    }
  }

  return (
    <div>
      <Grid centered>
        <Grid.Row className="header">
          <Header as="h1" textAlign="center" content="Bin2Dec" />
        </Grid.Row>
        <Grid.Row>
          <Form>
          <Form.Input
            error={error}
            label="Binary Number"
            size='massive' 
            placeholder='Binary numbers...0 or 1' 
            onInput={handleChange} 
            value={value}
          />
          </Form>
        </Grid.Row>
        <Grid.Row>
          <Statistic>
            <Statistic.Label>Decimal Number</Statistic.Label>
            <Statistic.Value>{decimal}</Statistic.Value>
          </Statistic>
        </Grid.Row>
      </Grid>

      <style jsx global>{`
      .header {
        margin: 4em 0 4em;
      }
      `}</style>
    </div>
  )
}