import Hero from '../../Hero/Hero'
import Banner from './Banner/Banner'
import Category from './Category/Category'
import Offer from './Offer/Offer'
import Menu from '../../Menu/Menu'
import Table from './Table/Table'
import Blog from './Blog/Blog'

function Home() {
  return (
    <div className='space-y-10'>
      <Hero />
      <Banner /> 
      <Category />
      <Offer />
      <Menu />
      <Table />
      <Blog />
    </div>
  )
}

export default Home
