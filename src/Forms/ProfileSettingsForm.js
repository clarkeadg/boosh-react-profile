
/* React */
import React from 'react'
import { connect } from 'react-redux'

/* Actions */
//import Actions from '../Actions/Creators'

/* Selectors */
import { getMe } from 'boosh-react-auth'

/* Components */
import Form from 'react-jsonschema-form'
import { Button } from 'react-foundation'
import { Link } from 'react-router'

class ProfileSettingsForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      form: {
        schema: {
          //title: "Account",
          type: "object",
          required: [],
          properties: {
            username: {title: "Username", type: "string", minLength: 3 },
            email: {title: "Email", type: "string", minLength: 3 }
            //bio: {title: "Bio", type: "string", minLength: 3 },
            //blog: {title: "URL", type: "string", minLength: 3 },
            //company: {title: "Company", type: "string", minLength: 3 },
            //location: {title: "Location", type: "string", minLength: 3 }
          }
        },
        uiSchema: {
          user_profile_bio: {
            "ui:widget": "textarea"
          }
        },
        formData: {
        },
        buttons: [
          { "type": "Submit", "title": "Update Profile" }
        ]
      }
    }
  }

  onSubmit = ({formData}) => {
    /*this.state.form.formData.username = formData.username;
    this.props.dispatch(Actions.loginAttempt({
      username: formData.username,
      password: formData.password
    }))*/
  }

  onChange = ({formData}) => {

  }

  onError = ({formData}) => {

  }

  render() {

    let z = this;
    let { me } = this.props;
    if (!me.email) return false;

    this.state.form.formData.username = me.username;
    this.state.form.formData.email = me.email;

    // { this.props.me.errorCode ? 'There was an error logging in.' : ''}

    return (
      <div>
        <Form
          schema={z.state.form.schema}
          uiSchema={z.state.form.uiSchema}
          formData={z.state.form.formData}
          onChange={z.onChange}
          onSubmit={z.onSubmit}
          onError={z.onError} >
          <div>
            {z.state.form.buttons.map((item,id) => {
              return (<Button key={id} type={item.type}>{ item.title }</Button>)
            })}
          </div>
        </Form>
      </div>
    );
  }

}

const mapStateToProps = (state, props) => {
  return {
    me: getMe(state, props)
  }
}
export default connect(mapStateToProps)(ProfileSettingsForm)



