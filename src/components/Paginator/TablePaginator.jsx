import {Paginator} from "primereact/paginator";
import React, {Fragment, useState} from "react";

const TablePaginator = ({rows,onClick}) => {

    const [page, setPage] = useState(
        {
            first: 0,
            rows: 10,
            page: 0,
            totalRecords: 11,
        }
    )

    const onClickNextLink = async (event) => {
            let totalRecords
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
        onClick(event.page+1)
        }

    return (
        <Fragment>
            <Paginator template={rows<10?'FirstPageLink PrevPageLink PageLinks':'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink'} pageLinkSize={rows<10?2:3} rows={10} first={page.first} totalRecords={page.totalRecords}
                       onPageChange={(e) => onClickNextLink(e)}/>
        </Fragment>
    )
}
export default TablePaginator