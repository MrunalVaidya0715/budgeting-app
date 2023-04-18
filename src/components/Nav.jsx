// rrd imports
import { Form, NavLink } from "react-router-dom"

// library
import { TrashIcon } from '@heroicons/react/24/solid'

// assets
import {VscGraph} from 'react-icons/vsc'
import {ImUser} from 'react-icons/im'

const Nav = ({ userName }) => {
  return (
    <nav  style={{backgroundColor: 'transparent',  zIndex: '100', backdropFilter:'blur(350px)'}}>
      <NavLink
        to="/"
        aria-label="Go to home"
      >
        <VscGraph style={{color: 'blueviolet'}}/>
        <span style={{letterSpacing: '0.05em'}}>SpendWise</span>
      </NavLink>
      
      {
        userName && (
          <Form
            method="post"
            action="logout"
            onSubmit={(event) => {
              if (!confirm("Delete user and all data?")) {
                event.preventDefault()
              }
            }}
          >
            <button type="submit" className="btn btn--warning">
              <span>Delete User</span>
              <ImUser/>
            </button>

          </Form>
        )
      }
    </nav>
  )
}
export default Nav