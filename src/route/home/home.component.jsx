import Directory from '../../components/directory/directory.component';

const Home = () => {
	const categories = [
		{
			title: 'Hats',
			id: 1,
			imageUrl: 'https://i.ibb.co/cvpntL1/hats.png'
		},
		{
			title: 'Jackets',
			id: 2,
			imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png'
		},
		{
			title: 'Sneakers',
			id: 3,
			imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png'
		},
		{
			title: 'Womens',
			id: 4,
			imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png'
		},
		{
			title: 'Mens',
			id: 5,
			imageUrl: 'https://i.ibb.co/R70vBrQ/men.png'
		}
	]

	return (
		<Directory categories = {categories}/>
	)
}

export default Home;
