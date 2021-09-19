import DataContext from "../Contexts/DataContext";
import { useContext } from "react";
import './ReportComponent.css';


const ReportComponent = () => {
    const { income ,  expense } = useContext(DataContext);
    const mix = income - expense;
    const status2 = mix < 0 ? 'loss' : 'profit';
    const formatNumber=(num)=> {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    return (
        <div>
            <h4 className="Heading">ยอดคงเหลือ (บาท)</h4>
            <h1 className={status2}>฿{formatNumber((income-expense).toFixed(2))}</h1>
            <div className="reportContainer">
                <div>
                    <h4 className="report">รายรับทั้งหมด</h4>
                    <p className="report plus">฿{formatNumber(income)}</p>
                </div>
                <div>
                    <h4 className="report">รายจ่ายทั้งหมด</h4>
                    <p className="report minus">฿{formatNumber(expense)}</p>
                </div>
            </div>
        </div>
    )
}

export default ReportComponent;