import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import ListMe from './Components/Listme';
import FormComponents from './Components/FormComponent';
import { useState, useEffect } from 'react';
import DataContext from './Contexts/DataContext';
import ReportComponent from './Components/ReportComponent';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Footer from './Components/footer';


const Payment = () => <h1 style={styles}>Income - Expense</h1>
const Save = () => <h4 style={{textAlign:'center', color:'orange'}}>by ChetTha SaeTeaw</h4>
const styles = {color:'#d499', textAlign:'center',fontSize:'2rem'}
const init = [
  { id : 1,title : "เงินเดือน" , amount : 15900},
  { id : 2,title : "ค่าอัพคอม" , amount : -5500},
  { id : 3,title : "ค่าหอพัก" , amount : -4000}
];

function App() {
  const [items, setItems] = useState([]);
  const [reportIncome , setReportIncome ] = useState(0);
  const [reportExpense , setReportExpense ] = useState(0);
 
  const onAddNew = newItems => {
    setItems( (prevItme) => {
      return [newItems,...prevItme]
    })
  }

  useEffect(() => {
    const amounts =  items.map(items => items.amount)
    const inCome = amounts.filter(element => element > 0).reduce((total,element)=> total += element,0)
    const exPense = (amounts.filter(element => element < 0).reduce((total,element)=> total += element,0))*-1
    setReportIncome(inCome.toFixed(2));
    setReportExpense(exPense.toFixed(2));
  },[items,reportIncome,reportExpense]);
 
  return (
      <DataContext.Provider value = {{income : reportIncome,expense : reportExpense }}>
          <div>
            <Payment />
            <Save />
            <Router>
            <div>
              <ul className="horizontal-menu">
                <li><Link to="/">ข้อมูลบัญชี</Link></li>
                <li><Link to="/insert">บันทึกข้อมูล</Link></li>
              </ul>
              <Switch>
                <Route path="/" exact>
                  <ReportComponent />
                </Route>
                <Route path="/insert">
                  <FormComponents onAddItems={onAddNew}/>
                  <ListMe items = {items} />
                </Route>
              </Switch>
              <Footer/>
            </div>
            </Router>
          </div>
      </DataContext.Provider>
      
  )
}

export default App;
