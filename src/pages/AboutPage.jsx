import { Link } from 'react-router-dom'
import Card from '../components/shared/Card'

function AboutPage(props) {
  return (
    <Card>
      <div className='about'>
        <h1>О нас</h1>
        <p>Это сервис для оценки наших услуг</p>
        <p>Махачкала 3108</p>

        <p>
          <Link to='/'>На главную</Link>
        </p>
      </div>
    </Card>
  )
}

export default AboutPage
