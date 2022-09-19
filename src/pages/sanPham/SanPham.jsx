import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import './sanPham.css'
const SanPham = () => {
    return(
        <div className="sanPham">
         <div className="home">
            <Sidebar/>
            <div className="homeContainer">
            <Navbar/>
            </div>
            </div>
            </div>
    )
}
export default SanPham
