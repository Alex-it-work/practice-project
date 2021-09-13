import React from 'react'
import { connect } from 'react-redux'
import Header from '../../components/Header/Header.js'
import Footer from '../../components/Footer/Footer.js'
import Transactions from './Transactions/Transactions.js'

function TransactionPage() {
    return (
<>
<Header/>
<Transactions/>
<Footer/>
</>
    )
}
const mapStateToProps = (state)=>{

}
const mapDispatchToProps = (dispatch) =>{}
export default connect(mapStateToProps, mapDispatchToProps)(TransactionPage)
