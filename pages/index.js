import { useState } from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Form, Grid, Header, Icon, Statistic } from 'semantic-ui-react'
import Link from 'next/link'

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
          <Header as="h1" textAlign="center">
            Bin2Dec
            <Header.Subheader>
              &copy;2021 sumomo-99
            </Header.Subheader>
            <Header.Subheader>
              <Link href="https://github.com/sumomo-99/bin2dec">
                <Icon link size="big" name="github" />
              </Link>
              <Link href="https://twitter.com/sumomo_99">
                <Icon link size="big" name="twitter" />
              </Link>
            </Header.Subheader>
          </Header>
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
        margin: 2em 0 0 0;
      }
      `}</style>
    </div>
  )
}