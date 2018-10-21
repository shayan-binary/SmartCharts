import React from 'react';
import { connect } from '../store/Connect';
import ChartTypes from './ChartTypes.jsx';
import StudyLegend from './StudyLegend.jsx';
import Comparison from './Comparison.jsx';
import Views from './Views.jsx';
import CrosshairToggle from './CrosshairToggle.jsx';
import Timeperiod from './Timeperiod.jsx';
import ChartSize from './ChartSize.jsx';
import DrawTools from './DrawTools.jsx';
import Share from './Share.jsx';
import '../../sass/components/_chart-controls.scss';


export const RenderDefaultControls = ({ isMobile }) => (
    <>
        {isMobile ? '' : <CrosshairToggle />}
        <ChartTypes />
        <Timeperiod />
        <StudyLegend />
        <Comparison />
        <DrawTools />
        <Views />
        <Share />
        {isMobile ? '' : <ChartSize />}
    </>
);

const ChartControls = ({
    isMobile,
    hasOpenMenu,
    widgets,
    context,
}) => {
    const Controls =  widgets || RenderDefaultControls;

    return (
        <div className={`cq-chart-controls ${hasOpenMenu ? ' active' : ''}`}>
            { context ? <Controls isMobile={isMobile} /> : null }
        </div>
    );
};

export default connect(({ chart,
    chartType,
    studies,
    comparison,
    drawTools,
    view,
    share,
    timeperiod,
    chartSetting }) => ({
    isMobile: chart.isMobile,
    context: chart.context,
    hasOpenMenu: (
        chartType.menu.open
            || studies.menu.open
            || comparison.menu.open
            || drawTools.menu.open
            || view.menu.open
            || share.menu.open
            || timeperiod.menu.open
            || chartSetting.menu.open
    ),
}))(ChartControls);
