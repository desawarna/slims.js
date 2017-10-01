/**
 * @Author: Waris Agung Widodo <user>
 * @Date:   2017-10-01T23:45:53+07:00
 * @Email:  ido.alit@gmail.com
 * @Filename: main.jsx
 * @Last modified by:   ido
 * @Last modified time: 2017-10-02T00:13:23+07:00
 */

// create class Component
class Card extends React.Component {
  render(){
    return (
      <div className="ui card">
        <div className="content">
          <img className="right floated mini ui image" src="/images/elliot.jpg"/>
          <div className="header">
            Elliot Fu
          </div>
          <div className="meta">
            Friends of Veronika
          </div>
          <div className="description">
            Elliot requested permission to view your contact details
          </div>
        </div>
        <div className="extra content">
          <div className="ui two buttons">
            <div className="ui basic green button">Approve</div>
            <div className="ui basic red button">Decline</div>
          </div>
        </div>
      </div>
    )
  }
}

// render class Component to template
ReactDOM.render(
  <Card/>, document.getElementById('app')
)
