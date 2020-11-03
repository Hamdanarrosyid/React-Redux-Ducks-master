import logo from './logo192.png';
import './Navbar.css';
import {Menubar} from "primereact/menubar";
import React, {Fragment} from 'react';

const Navbar = () => {
    const items:Array<any> = [
        {
            label: 'Table',
            url:'/'
        },
        {
            label: 'Chart',
            url:'/barchart'
        }
    ]
    const start:any = <img alt="logo" src={logo} height="40" className="p-mr-2"/>;

    return (
        <Fragment>
            <div className='wrap'>
                <Menubar className='p-justify-between p-lg-10 p-mx-auto' start={start} model={items}/>
            </div>
        </Fragment>
    )
}
export default Navbar