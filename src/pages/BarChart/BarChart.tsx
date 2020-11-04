import React, {Fragment, useEffect} from "react";
import Navbar from "../../components/Navbar/Navbar";
// @ts-ignore
import Plotly from 'plotly.js-basic-dist';
import createPlotlyComponent from 'react-plotly.js/factory'
import HeadPage from "../../components/HeadPage/HeadPage";
import {useDispatch, useSelector} from "react-redux";
import {TestItemStateType} from "../../classes/TestItemStateType";
import {getValue} from "../../redux/actions";
import {RootStore} from "../../redux";
import {People} from "../../redux/constants/testitem";

const Plot = createPlotlyComponent(Plotly)

const BarChart = () => {
    const getData: TestItemStateType = useSelector((state: RootStore) => state.people)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getValue(1))
    }, [dispatch])

    let name: Array<string> = []
    let height: Array<number> = []
    let mass: Array<number> = []

    getData.textboxSuccessData.dataPeople.map((people: People) => {
        name.push(people.name)
        height.push(people.height)
        mass.push(people.mass)
        return true
    })

    return (
        <Fragment>
            <Navbar/>
            {getData.isLoading ? (
                <p className='p-text-center'>loading</p>
            ) : getData.isSuccess ? (
                <div className="p-mx-auto p-lg-10">
                    <HeadPage text='Chart Page'/>
                    <div className="p-card p-shadow-2 p-pb-5">
                        <Plot
                            data={[
                                {
                                    x: name,
                                    y: mass,
                                    name: 'Mass',
                                    type: 'bar'
                                },
                                {
                                    x: name,
                                    y: height,
                                    name: 'Height',
                                    type: 'bar'
                                }
                            ]}
                            layout={{
                                autosize: true,
                                barmode: 'group',
                            }}
                            useResizeHandler={true}
                            style={{width: "100%", height: "100%"}}

                        />
                    </div>
                </div>
            ) : <p className='p-text-center'>{getData.textboxErrorData.message}</p>
            }
        </Fragment>
    )
}
export default BarChart