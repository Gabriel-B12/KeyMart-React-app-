import React from 'react';
import Navbar from '../components/Navbar';
import  {  useState } from 'react';
import MaterialTable from 'material-table';
import '../css/app.css';
import Footer from '../components/Footer';

const columns1 = [
    { title: "Customer Name", field: "Product Name", align: "center", cellStyle: { background: "#D7E5F0" } },
    { title: "Email", field: "Selling Price", align: "center" },
    { title: "Order Number", field: "Selling Price", align: "center" },
    { title: "Order Date", field: "Selling Price", align: "center" },
    { title: "Oras", field: "Quantity", align: "center" },
    { title: "Judet", field: "Selling Price", align: "center" },
    { title: "Bloc", field: "Quantity", align: "center" },
    { title: "Scara", field: "Selling Price", align: "center" },
    { title: "Numar", field: "Quantity", align: "center" }
  ]

  const columns2 = [
    { title: "Product Name", field: "Product Name", align: "center", cellStyle: { background: "#D7E5F0" } },
    { title: "Supplier", field: "Selling Price", align: "center" },
    { title: "Price Bought", field: "Selling Price", align: "center" },
    { title: "Price Sold", field: "Selling Price", align: "center" },
    { title: "Quantity", field: "Selling Price", align: "center" },
 
  ]

const Orders = () => {
    const [tableData1, setTableData1] = useState([]);
    const [tableData2, setTableData2] = useState([]);
    if(localStorage.getItem("isLoggedin")==="true" && (localStorage.getItem("userRole")==="4"|| localStorage.getItem("userRole")==="3" )){
    return (
        
            <div className="page-container">
            <Navbar />
            <div className="App" >
                <h1 align="center" className="title">Orders</h1>

                <MaterialTable columns={columns1} data={tableData1}
                    editable={{
                        onRowDelete: (selectedRow) => new Promise((resolve) => {
                            const updatedData = [...tableData1]
                            updatedData.splice(selectedRow.tableData.id, 1)
                            setTableData1(updatedData)
                            setTimeout(() => resolve(), 1000)

                        })
                    }}

                    options={{
                        sorting: true, search: true,
                        searchFieldAlignment: "right", searchAutoFocus: true, searchFieldVariant: "standard",
                        paging: true, pageSizeOptions: [5, 10, 20, 25, 50, 100], pageSize: 5,
                        paginationType: "stepped", showFirstLastPageButtons: false, paginationPosition: "both",
                        addRowPosition: "first", actionsColumnIndex: -1,

                        headerStyle: { background: "#ffb347" }

                    }}

                    title=" "
                />
            </div>
            
            <Footer />
            </div>
        
    );}else{
        return(
          <div>
            <h1 align="center" className="title">You are not logged in or dont't have access</h1>
          </div>
        )
      }
}

export default Orders