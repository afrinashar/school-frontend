import React from 'react'
import{ Button,Spinner  }from 'react-bootstrap';
export const Spinners = () => {
  return (
   <>
  <Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button> 
   </>
  )
}
