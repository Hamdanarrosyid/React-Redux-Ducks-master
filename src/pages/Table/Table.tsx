import React, {Fragment, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";

import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import Navbar from "../../components/Navbar/Navbar";
import {TestItemStateType} from "../../classes/TestItemStateType";
import {getValue} from "../../redux/actions";
// import HeadPage from "../../components/HeadPage/HeadPage";

const Table = () => {
    const getData: TestItemStateType = useSelector((state: any) => state.testItem)
    const dispatch = useDispatch()
    // const [state, setState]: any = useState(1)

    //
    // const handler = (e) =>{
    //     setState(e)
    // }
    useEffect(() => {
        dispatch(getValue(1))
    },[dispatch])

    return (
        <Fragment>
            <Navbar/>
            {getData.isLoading?(
                <p className='p-text-center'>Loading...</p>
            ):getData.isSuccess?(
            <div className="p-lg-10 p-mx-auto">
                {/*<HeadPage text/>*/}
                <div className="p-card p-mb-6 p-shadow-2">
                    <DataTable value={getData.textboxSuccessData.dataPeople} rows={10}>
                        <Column field="name" header="Name"/>
                        <Column field="height" header="Height"/>
                        <Column field="mass" header="Mass"/>
                        <Column field="hair_color" header="Hair Color"/>
                        <Column field="skin_color" header="Skin Color"/>
                    </DataTable>
                    {/*<TablePaginator rows={getPeople.length} onClick={handler}/>*/}
                </div>
            </div>
            ):(
                <p>{getData.textboxErrorData.message}</p>
            )}
        </Fragment>
    )
}

export default Table