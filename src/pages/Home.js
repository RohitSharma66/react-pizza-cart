import Products from '../components/Products';
const Home = () => {
    return (
        <>
            <div className="hero py-10">
                <div className="container mx-auto flex items-center justify-between">
                    <div className="w-1/2">
                        <h6 className="text-lg"><i>Are you hungry?</i></h6>
                        <h1 className="text-3xl md:text-6xl font-bold">Don't Wait !</h1>
                        <button className="px-6 py-2 rounded-full text-white font-bold mt-4 bg-yellow-500 hover:bg-yellow-600">Order Now</button>
                    </div>
                    <div className="w-3/4">
                        <img  style={{width:1000, height: 450, borderRadius:10}} src="/images/main.jpeg" alt="pizza pic" />
                    </div>
                </div>
            </div>
            <div>
              <Products />  
            </div>
        </>
    )
}
export default Home;