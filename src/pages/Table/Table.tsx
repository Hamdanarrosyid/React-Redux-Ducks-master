import React, {Fragment, useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";

import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import Navbar from "../../components/Navbar/Navbar";
import {TestItemStateType} from "../../classes/TestItemStateType";
import {getValue} from "../../redux/actions";
import HeadPage from "../../components/HeadPage/HeadPage";
import {RootStore} from "../../redux";
import {Paginator} from "primereact/paginator";

const Table = () => {
    const getData: TestItemStateType = useSelector((state: RootStore) => state.people)
    const dispatch = useDispatch()

    const people = getData.textboxSuccessData.dataPeople

    interface statePageTypes {
        first:number,
        page:number,
        totalRecords:number
    }
    const [page, setPage] = useState<statePageTypes>(
        {
            first: 0,
            page: 0,
            totalRecords: 11,
        }
    )

    const handler = (event:any) =>{
        let totalRecords:number
        if (page.page > event.page) {
            totalRecords = page.totalRecords - 10
        } else if (page.page === event.page){
            totalRecords = page.totalRecords +1
        }else {
            totalRecords = page.totalRecords +10
        }
        setPage({
            first: event.first,
            page: event.page,
            totalRecords: totalRecords
        })
    }
    useEffect(() => {
        dispatch(getValue(page.page+1))
    },[page.page,dispatch])
    
    return (
        <Fragment>
            <Navbar/>
            {getData.isSuccess?(
            <div className="p-lg-10 p-mx-auto">
                <HeadPage text={'Table Page'}/>
                <div className="p-card p-mb-6 p-shadow-2">
                    <DataTable value={people} rows={10}>
                        <Column field="name" header="Name"/>
                        <Column field="height" header="Height"/>
                        <Column field="mass" header="Mass"/>
                        <Column field="hair_color" header="Hair Color"/>
                        <Column field="skin_color" header="Skin Color"/>
                    </DataTable>
                    <Paginator template={people.length<10?'PrevPageLink PageLinks':'PrevPageLink PageLinks NextPageLink'} pageLinkSize={people.length<10?2:3} rows={10} first={page.first} totalRecords={page.totalRecords}
                               onPageChange={(e) => handler(e)}/>
                </div>
            </div>
            ):(
                <p>{getData.textboxErrorData.message}</p>
            )}
        </Fragment>
    )
}

export default Table