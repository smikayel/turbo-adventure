import BuyNow from 'components/Buttons/BuyNow';
import ObjViewer from 'components/ObjViewer';
// import style from './home.page.css'
import MiniBootsCard from 'components/boots_mini_card';
import Header from 'components/header';

export default function Home() {
	return (
		
		<div>
			<Header />
			<ObjViewer />
			
			{/* <div className={style.btn_buy_now}> */}
				{/* <BuyNow /> */}
			{/* </div> */}
		</div>
	);
}
