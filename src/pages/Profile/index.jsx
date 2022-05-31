import DocumentImg from "../../assets/documents.svg";
import HomeImg from "../../assets/home.svg";
import ProfileImg from "../../assets/profile.svg";
import NavLink from "../../components/NavLinks";
import "./style.css";

function Profile() {
	return (
		<navbar className='column ai-center gap-nav-items'>
			<NavLink image={HomeImg} text='Home' color='main-pink' />
			<NavLink
				image={ProfileImg}
				text='Clientes'
				color='color-navbar-text-default'
				display='hidden'
			/>
			<NavLink
				image={DocumentImg}
				text='Cobranças'
				color='color-navbar-text-default'
				display='hidden'
			/>
		</navbar>
	);
}

export default Profile;
