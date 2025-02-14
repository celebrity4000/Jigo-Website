import { useEffect, useState } from "react";
import BreadCrumbs from "../components/BreadCrumbs";
import { json, useParams } from "react-router-dom";
import { instance } from "../helpers";
import ProductDet from "../components/ProductDetails";
import { Table } from 'react-bootstrap';

function Product() {
  const param = useParams(); // inside your component
  const [data, setData] = useState([]);
  const [tableData, setTableData] = useState();

  const getProduct = async () => {
    const response = await instance.get(
      "/products.php?case=get_product_by_id&id=" + param.id
    );
    setData(response.data);
    console.log(response.data)
  };

  useEffect(() => {
    getProduct();
  }, []);

  // useEffect(() => {
  //   if (data[0]?.data) {
  //     const data_ = JSON.parse(data[0].data);
  //     console.log(data_);
  //     setTableData(data_);
  //   }
  // }, [data])

  // replace with
  useEffect(() => {
    if (data[0]?.data) {
      // Replace newline characters with escaped newline (\n)
      const sanitizedData = data[0].data.replace(/\n/g, "\\n");
      try {
        const data_ = JSON.parse(sanitizedData);
        console.log(data_);
        setTableData(data_);
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    }
  }, [data]);

  return (
    <div>
      <BreadCrumbs page={"Products"} />
      <ProductDet data={data[0]} />
      <div className='flex justify-center mb-5'>
        {
          tableData && (
            <div className='w-[90%]'>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    {
                      tableData && (
                        tableData?.headers?.map((item, index) => (
                          <th key={index}>{item}</th>
                        )))
                    }
                  </tr>
                </thead>
                <tbody>
                  {
                    tableData && (
                      tableData?.rows?.map((item, index) => (
                        <tr>
                          {Object.values(item).map((item, index) => (
                            <td key={index}>{item}</td>
                          ))}
                        </tr>
                      )))
                  }
                </tbody>
              </Table>
            </div>
          )
        }
      </div>
    </div >
  );
}

export default Product;
