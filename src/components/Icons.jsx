import React from 'react';
import '../../sass/components/_icons.scss';

// Chart types:
import BaseLine from '../../sass/icons/chart settings/chart types/baseline/ic-baseline-normal.svg';
import Candle from '../../sass/icons/chart settings/chart types/candle/ic-candle-normal.svg';
import Dot from '../../sass/icons/chart settings/chart types/dot/ic-dot-normal.svg';
import LineDot from '../../sass/icons/chart settings/chart types/line dot/ic-linedot-normal.svg';
import HeikinAshi from '../../sass/icons/chart settings/chart types/ic-heikin-ashi-normal.svg';
import HollowCandle from '../../sass/icons/chart settings/chart types/hollow candle/ic-hollowcandle-normal.svg';
import Kagi from '../../sass/icons/chart settings/chart types/ic-kagi-normal.svg';
import Line from '../../sass/icons/chart settings/chart types/line/ic-line-normal.svg';
import LineBreak from '../../sass/icons/chart settings/chart types/ic-linebreak-normal.svg';
import OHLC from '../../sass/icons/chart settings/chart types/ohlc/ic-ohlc-normal.svg';
import PointFigure from '../../sass/icons/chart settings/chart types/ic-pointfigure-normal.svg';
import RangeBars from '../../sass/icons/chart settings/chart types/ic-rangebars-normal.svg';
import Renko from '../../sass/icons/chart settings/chart types/ic-renko-normal.svg';
import Spline from '../../sass/icons/chart settings/chart types/spline/ic-spline-normal.svg';
import Png from '../../sass/icons/download/ic-png.svg';
import Csv from '../../sass/icons/download/ic-csv.svg';


import Add from '../../sass/icons/chart settings/zoom-in/ic-zoomin-light.svg';
import Close from '../../sass/icons/close/ic-close.svg';
import Comparison from '../../sass/icons/chart settings/comparison/ic-comparison-normal.svg';
import CrosshairOff from '../../sass/icons/chart settings/crosshair/ic-crosshair-off.svg';
import CrosshairOn from '../../sass/icons/chart settings/crosshair/ic-crosshair-on.svg';
import CrosshairTooltip from '../../sass/icons/chart settings/crosshair/ic-crosshair-tooltip.svg';
import Delete from '../../sass/icons/delete/ic-delete.svg';
import Clear from '../../sass/icons/clear/ic-clear.svg';
import Draw from '../../sass/icons/chart settings/drawing tools/ic-drawingtools-normal.svg';
import Indicator from '../../sass/icons/chart settings/indicators/ic-indicator-normal.svg';
import Measure from '../../sass/icons/measure/ic-measure.svg';
import Minus from '../../sass/icons/chart settings/zoom-out/ic-zoomout-light.svg';
import Star from '../../sass/icons/favorite/ic-favorite-normal.svg';
import Template from '../../sass/icons/chart settings/chart template/ic-charttemplate-normal.svg';
import Tick from '../../sass/icons/tick/ic-tick.svg';
import Active from '../../sass/icons/sidebar/active/ic-active-normal.svg';
import Commodities from '../../sass/icons/sidebar/commodities/ic-commodities-normal.svg';
import Forex from '../../sass/icons/sidebar/forex/ic-forex-normal.svg';
import Indices from '../../sass/icons/sidebar/indices/ic-indices-normal.svg';
import Stocks from '../../sass/icons/sidebar/otc/ic-otc-normal.svg';
import Volidx from '../../sass/icons/sidebar/volatility/ic-volatility-normal.svg';
import Search from '../../sass/icons/search/ic-search-normal.svg';
import Edit from '../../sass/icons/edit/ic-edit.svg';
import Arrow from '../../sass/icons/dropdown/ic-dropdown.svg';
import Download from '../../sass/icons/download/ic-download.svg';
import PositionLeft from '../../sass/icons/chart settings/setting/ic-position-left.svg';
import PositionBottom from '../../sass/icons/chart settings/setting/ic-position-bottom.svg';
import Back from '../../sass/icons/back/ic-back.svg';
import DrawCursor from '../../sass/icons/pencil/ic-pencil.svg';


import Warning from '../../sass/icons/alert message/warning.svg';
import Error from '../../sass/icons/alert message/error.svg';
import Success from '../../sass/icons/alert message/success.svg';
import Info from '../../sass/icons/alert message/info.svg';

import SymbolPlaceholder from '../../sass/icons/placeholder/ic-placeholder.svg';
import AUD from '../../sass/icons/flags/aud.svg';
import CAD from '../../sass/icons/flags/cad.svg';
import CHF from '../../sass/icons/flags/chf.svg';
import EUR from '../../sass/icons/flags/eur.svg';
import GBP from '../../sass/icons/flags/gbp.svg';
import JPY from '../../sass/icons/flags/jpy.svg';
import MXN from '../../sass/icons/flags/mxn.svg';
import NOK from '../../sass/icons/flags/nok.svg';
import NZD from '../../sass/icons/flags/nzd.svg';
import PLN from '../../sass/icons/flags/pln.svg';
import SEK from '../../sass/icons/flags/sek.svg';
import USD from '../../sass/icons/flags/usd.svg';


import Portugal from '../../sass/icons/flags/portugal.svg';
import Russia from '../../sass/icons/flags/russia.svg';
import Thailand from '../../sass/icons/flags/thailand.svg';
import Indonesia from '../../sass/icons/flags/indonesia.svg';
import Vietnam from '../../sass/icons/flags/vietnam.svg';
import Italy from '../../sass/icons/flags/italy.svg';
import Chinese from '../../sass/icons/flags/chinese.svg';
import ChineseTraditional from '../../sass/icons/flags/chinese-traditional.svg';
import German from '../../sass/icons/flags/german.svg';
import HongKong from '../../sass/icons/flags/hong kong.svg';
import French from '../../sass/icons/flags/french.svg';
import Dutch from '../../sass/icons/flags/dutch.svg';
import Spanish from '../../sass/icons/flags/spanish.svg';
import WallStreet from '../../sass/icons/flags/wallstreet.svg';
// import Belgium from '../../sass/icons/flags/belgium.svg';
// import Singapore from '../../sass/icons/flags/singapore.svg';
// import Bombay from '../../sass/icons/flags/bombay.svg';
// import Jakarta from '../../sass/icons/flags/jakarta.svg';
// import Dubai from '../../sass/icons/flags/dubai.svg';
// import Ireland from '../../sass/icons/flags/ireland.svg';
// import SouthAfrica from '../../sass/icons/flags/south africa.svg';

/** OTC STOCKS * */
/*
// German
import Airbus from '../../sass/icons/active-symbols/otc stocks/ic-airbus.svg';
import Allianz from '../../sass/icons/active-symbols/otc stocks/ic-allianz.svg';
import BMW from '../../sass/icons/active-symbols/otc stocks/ic-bmw.svg';
import Daimler from '../../sass/icons/active-symbols/otc stocks/ic-daimler.svg';
import Deutschebank from '../../sass/icons/active-symbols/otc stocks/ic-deutschebank.svg';
import Novartis from '../../sass/icons/active-symbols/otc stocks/ic-novartis.svg';
import SAP from '../../sass/icons/active-symbols/otc stocks/ic-sap.svg';
import Siemens from '../../sass/icons/active-symbols/otc stocks/ic-siemens.svg';
// India
import BhartiAirtel from '../../sass/icons/active-symbols/otc stocks/ic-bhartiairtel.svg';
import MarutiSuzuki from '../../sass/icons/active-symbols/otc stocks/ic-marutisuzuki.svg';
import RelianceIndustries from '../../sass/icons/active-symbols/otc stocks/ic-relianceindustries.svg';
import TataSteel from '../../sass/icons/active-symbols/otc stocks/ic-tatasteel.svg';
// UK
import BP from '../../sass/icons/active-symbols/otc stocks/ic-bp.svg';
import Barclays from '../../sass/icons/active-symbols/otc stocks/ic-barclays.svg';
import BritishAmericanTobacco from '../../sass/icons/active-symbols/otc stocks/ic-britishamericantobacco.svg';
import HSBC from '../../sass/icons/active-symbols/otc stocks/ic-hsbc.svg';
import LloydsBank from '../../sass/icons/active-symbols/otc stocks/ic-lloydsbank.svg';
import RioTinto from '../../sass/icons/active-symbols/otc stocks/ic-riotinto.svg';
import StandardChartered from '../../sass/icons/active-symbols/otc stocks/ic-standardchartered.svg';
import Tesco from '../../sass/icons/active-symbols/otc stocks/ic-tesco.svg';
// US
import Alibaba from '../../sass/icons/active-symbols/otc stocks/ic-aibaba.svg';
import Alphabet from '../../sass/icons/active-symbols/otc stocks/ic-alphabet.svg';
import Amazon from '../../sass/icons/active-symbols/otc stocks/ic-amazon.svg';
import AmericanExpress from '../../sass/icons/active-symbols/otc stocks/ic-americanexpress.svg';
import Apple from '../../sass/icons/active-symbols/otc stocks/ic-apple.svg';
import BershireHathaway from '../../sass/icons/active-symbols/otc stocks/ic-bershirehathaway.svg';
import Boeing from '../../sass/icons/active-symbols/otc stocks/ic-boeing.svg';
import Caterpillar from '../../sass/icons/active-symbols/otc stocks/ic-caterpillar.svg';
import Citigroup from '../../sass/icons/active-symbols/otc stocks/ic-citigroup.svg';
import ElectronicArts from '../../sass/icons/active-symbols/otc stocks/ic-electronicarts.svg';
import ExxonMobil from '../../sass/icons/active-symbols/otc stocks/ic-exxonmobil.svg';
import Facebook from '../../sass/icons/active-symbols/otc stocks/ic-facebook.svg';
import GoldmanSachs from '../../sass/icons/active-symbols/otc stocks/ic-goldmansachs.svg';
import IBM from '../../sass/icons/active-symbols/otc stocks/ic-ibm.svg';
import JohnsonAndJohnson from '../../sass/icons/active-symbols/otc stocks/ic-johnson-and-johnson.svg';
import Mastercard from '../../sass/icons/active-symbols/otc stocks/ic-mastercard.svg';
import McDonalds from '../../sass/icons/active-symbols/otc stocks/ic-mcdonalds.svg';
import Microsoft from '../../sass/icons/active-symbols/otc stocks/ic-microsoft.svg';
import PepsiCo from '../../sass/icons/active-symbols/otc stocks/ic-pepsico.svg';
import ProcterAndGamble from '../../sass/icons/active-symbols/otc stocks/ic-procterandgamble.svg';
*/

/* Energy */
import OilUSD from '../../sass/icons/active-symbols/energy/oil usd/ic-oilusd.svg';
/* Metals */
import Metal from '../../sass/icons/active-symbols/metals/ic-metal.svg';

/* Volatility Indices */
import Vol10 from '../../sass/icons/active-symbols/volatility/10 index/ic-10-index.svg';
import Vol25 from '../../sass/icons/active-symbols/volatility/25 index/ic-25-index.svg';
import Vol50 from '../../sass/icons/active-symbols/volatility/50 index/ic-50-index.svg';
import Vol75 from '../../sass/icons/active-symbols/volatility/75 index/ic-75-index.svg';
import Vol100 from '../../sass/icons/active-symbols/volatility/100 index/ic-100-index.svg';
import MarketBear from '../../sass/icons/active-symbols/volatility/bear market/ic-marketbear.svg';
import MarketBull from '../../sass/icons/active-symbols/volatility/bull market/ic-marketbull.svg';

import OTCBadge from '../../sass/icons/active-symbols/ic-otcbadge.svg';
import SmartFX from '../../sass/icons/active-symbols/ic-smartfx-placeholder.svg';

const Wrapper = SvgLogo => (props) => {
    let { className, 'tooltip-title': tooltip, ...p } = props; // eslint-disable-line prefer-const
    className = `ic-icon ${className || ''}`;
    const vb = SvgLogo.viewBox.split(' ').slice(2);

    return (
        <span
            className={className}
            tooltip-title={tooltip}
            {...p}
        >
            <svg width={vb[0]} height={vb[1]}>
                <use xlinkHref={__webpack_public_path__ + SvgLogo.url /* eslint-disable-line no-undef */} />
            </svg>
            {tooltip && (
                <>
                    <br />
                    <span className="ic-subtitle">{tooltip}</span>
                </>
            )}
        </span>
    );
};

export const DrawingCursorIcon = Wrapper(DrawCursor);

// Chart Types:
export const BaseLineIcon = Wrapper(BaseLine);
export const CandleIcon = Wrapper(Candle);
export const DotIcon = Wrapper(Dot);
export const LineDotIcon = Wrapper(LineDot);
export const HeikinAshiIcon = Wrapper(HeikinAshi);
export const HollowCandleIcon = Wrapper(HollowCandle);
export const KagiIcon = Wrapper(Kagi);
export const LineBreakIcon = Wrapper(LineBreak);
export const LineIcon = Wrapper(Line);
export const OHLCIcon = Wrapper(OHLC);
export const PointFigureIcon = Wrapper(PointFigure);
export const RangeBarsIcon = Wrapper(RangeBars);
export const RenkoIcon = Wrapper(Renko);

export const AddIcon = Wrapper(Add);
export const ZoomInIcon = Wrapper(Add);
export const CloseIcon = Wrapper(Close);
export const ComparisonIcon = Wrapper(Comparison);
export const CrosshairOffIcon = Wrapper(CrosshairOff);
export const CrosshairOnIcon = Wrapper(CrosshairOn);
export const CrosshairTooltipIcon = Wrapper(CrosshairTooltip);
export const DeleteIcon = Wrapper(Delete);
export const ClearIcon = Wrapper(Clear);
export const DrawIcon = Wrapper(Draw);
export const IndicatorIcon = Wrapper(Indicator);
export const MeasureIcon = Wrapper(Measure);
export const ZoomOutIcon = Wrapper(Minus);
export const SplineIcon = Wrapper(Spline);
export const PngIcon = Wrapper(Png);
export const CsvIcon = Wrapper(Csv);
export const StarIcon = Wrapper(Star);
export const TemplateIcon = Wrapper(Template);
export const TickIcon = Wrapper(Tick);
export const SearchIcon = Wrapper(Search);
export const EditIcon = Wrapper(Edit);
export const SettingIcon = Wrapper(Edit);
export const ArrowIcon = Wrapper(Arrow);
export const FavoriteIcon = Wrapper(Star);
export const DownloadIcon = Wrapper(Download);


export const PositionLeftIcon = Wrapper(PositionLeft);
export const PositionBottomIcon = Wrapper(PositionBottom);
export const BackIcon = Wrapper(Back);


export const MetalIcon = Wrapper(Metal);

export const alertIconMap = {
    info: Wrapper(Info),
    success: Wrapper(Success),
    warning: Wrapper(Warning),
    error: Wrapper(Error),
};

export const SymbolPlaceholderIcon = Wrapper(SymbolPlaceholder);

export const CategoryIconMap = {
    active: Wrapper(Active),
    commodities: Wrapper(Commodities),
    favorite: Wrapper(Star),
    forex: Wrapper(Forex),
    indices: Wrapper(Indices),
    stocks: Wrapper(Stocks),
    volidx: Wrapper(Volidx),
    indicators: Wrapper(Indicator),
};

const FlagIconMap = {
    AUD: Wrapper(AUD),
    CAD: Wrapper(CAD),
    CHF: Wrapper(CHF),
    EUR: Wrapper(EUR),
    GBP: Wrapper(GBP),
    JPY: Wrapper(JPY),
    MXN: Wrapper(MXN),
    NOK: Wrapper(NOK),
    NZD: Wrapper(NZD),
    PLN: Wrapper(PLN),
    SEK: Wrapper(SEK),
    USD: Wrapper(USD),
    HongKong: Wrapper(HongKong),
    Dutch: Wrapper(Dutch),
    German: Wrapper(German),
    French: Wrapper(French),
    Spanish: Wrapper(Spanish),
    WallStreet: Wrapper(WallStreet),
    // BOMBAY: Wrapper(Bombay),
    // Dubai: Wrapper(Dubai),
    // Jakarta: Wrapper(Jakarta),
    // Singapore: Wrapper(Singapore),
    // Belgium: Wrapper(Belgium),
    // Ireland: Wrapper(Ireland),
    // SouthAfrica: Wrapper(SouthAfrica),

};


export const FlagIcons = {
    USD: Wrapper(USD),
    German: Wrapper(German),
    French: Wrapper(French),
    Portugal: Wrapper(Portugal),
    Russia: Wrapper(Russia),
    Thailand: Wrapper(Thailand),
    Indonesia: Wrapper(Indonesia),
    Vietnam: Wrapper(Vietnam),
    Italy: Wrapper(Italy),
    Chinese: Wrapper(Chinese),
    ChineseTraditional: Wrapper(ChineseTraditional),
    Poland: Wrapper(PLN),
};


export const ItemIconMap = {
    SPC: FlagIconMap.USD,
    AS51: FlagIconMap.AUD,
    HSI: FlagIconMap.HongKong,
    N225: FlagIconMap.JPY,
    AEX: FlagIconMap.Dutch,
    FCHI: FlagIconMap.French,
    SSMI: FlagIconMap.CHF,
    GDAXI: FlagIconMap.German,
    // BSESENSEX30: FlagIconMap.BOMBAY,
    // JCI: FlagIconMap.Jakarta,
    // STI: FlagIconMap.Singapore,
    // BFX: FlagIconMap.Belgium,
    // DFMGI: FlagIconMap.Dubai,
    // OBX: FlagIconMap.NOK,
    // ISEQ: FlagIconMap.Ireland,
    // TOP40: FlagIconMap.SouthAfrica,
    /*
    // German
    DEAIR: Wrapper(Airbus),
    DEALV: Wrapper(Allianz),
    DEBMW: Wrapper(BMW),
    DEDAI: Wrapper(Daimler),
    DEDBK: Wrapper(Deutschebank),
    DENOT: Wrapper(Novartis),
    DESAP: Wrapper(SAP),
    DESIE: Wrapper(Siemens),
    // India
    INBHARTIARTL: Wrapper(BhartiAirtel),
    INMARUTI:     Wrapper(MarutiSuzuki),
    INRIL:        Wrapper(RelianceIndustries),
    INTATASTEEL:  Wrapper(TataSteel),
    // UK
    UKBP:   Wrapper(BP),
    UKBARC: Wrapper(Barclays),
    UKBATS: Wrapper(BritishAmericanTobacco),
    UKHSBA: Wrapper(HSBC),
    UKLLOY: Wrapper(LloydsBank),
    UKRIO:  Wrapper(RioTinto),
    UKSTAN: Wrapper(StandardChartered),
    UKTSCO: Wrapper(Tesco),
    // US
    USALIBA:  Wrapper(Alibaba),
    USGOOG:   Wrapper(Alphabet),
    USAMZN:   Wrapper(Amazon),
    USAMX:    Wrapper(AmericanExpress),
    USAAPL:   Wrapper(Apple),
    USBRKSHR: Wrapper(BershireHathaway),
    USBNG:    Wrapper(Boeing),
    USCAT:    Wrapper(Caterpillar),
    USCT:     Wrapper(Citigroup),
    USEA:     Wrapper(ElectronicArts),
    USXOM:    Wrapper(ExxonMobil),
    USFB:     Wrapper(Facebook),
    USGLDSCH: Wrapper(GoldmanSachs),
    USIBM:    Wrapper(IBM),
    USJNJ:    Wrapper(JohnsonAndJohnson),
    USMA:     Wrapper(Mastercard),
    USMCDON:  Wrapper(McDonalds),
    USMSFT:   Wrapper(Microsoft),
    USPEP:    Wrapper(PepsiCo),
    USPG:     Wrapper(ProcterAndGamble),
    */
    /* Commodities */
    frxBROUSD: Wrapper(OilUSD),
    frxXAUUSD: MetalIcon,
    frxXPDUSD: MetalIcon,
    frxXPTUSD: MetalIcon,
    frxXAGUSD: MetalIcon,
    /* Volatility Indices */
    R_10: Wrapper(Vol10),
    R_25: Wrapper(Vol25),
    R_50: Wrapper(Vol50),
    R_75: Wrapper(Vol75),
    R_100: Wrapper(Vol100),
    RDBEAR: Wrapper(MarketBear),
    RDBULL: Wrapper(MarketBull),
};

function createCompositeIcon(A, B, icId) {
    return (props) => {
        const { className, ...p } = props;
        return (
            <span className={`${icId} ${className}`} {...p}><A /><B /></span>
        );
    };
}

function frx(flagA, flagB) {
    const A = FlagIconMap[flagA];
    const B = FlagIconMap[flagB];
    ItemIconMap[`frx${flagA}${flagB}`] = createCompositeIcon(A, B, 'ic-frx');
}

const OTCBadgeIcon = Wrapper(OTCBadge);
const SmartFXIcon  = Wrapper(SmartFX);

function otc(flag, symbol) {
    const FlagIcon = FlagIconMap[flag];
    ItemIconMap[symbol] = createCompositeIcon(FlagIcon, OTCBadgeIcon, 'ic-otc');
}

function wld(flag) {
    const FlagIcon = FlagIconMap[flag];
    ItemIconMap[`WLD${flag}`] = createCompositeIcon(SmartFXIcon, FlagIcon, 'ic-wld');
}

/* FOREX */
/* Major Pairs */
frx('AUD', 'JPY');
frx('AUD', 'USD');
frx('EUR', 'AUD');
frx('EUR', 'CHF');
frx('EUR', 'JPY');
frx('EUR', 'CAD');
frx('EUR', 'GBP');
frx('EUR', 'USD');
frx('GBP', 'AUD');
frx('GBP', 'JPY');
frx('GBP', 'USD');
frx('USD', 'CAD');
frx('USD', 'CHF');
frx('USD', 'JPY');
/* Minor Pairs */
frx('AUD', 'CAD');
frx('AUD', 'CHF');
frx('AUD', 'NZD');
frx('AUD', 'PLN');
frx('EUR', 'NZD');
frx('GBP', 'CAD');
frx('GBP', 'CHF');
frx('GBP', 'NOK');
frx('GBP', 'NZD');
frx('GBP', 'PLN');
frx('NZD', 'JPY');
frx('NZD', 'USD');
frx('USD', 'MXN');
frx('USD', 'NOK');
frx('USD', 'PLN');
frx('USD', 'SEK');
/* Smart FX */
wld('AUD');
wld('EUR');
wld('GBP');
wld('USD');
/* OTC Indicies */
otc('Dutch', 'OTC_AEX');
otc('GBP', 'OTC_FTSE');
otc('EUR', 'OTC_SX5E');
otc('French', 'OTC_FCHI');
otc('German', 'OTC_GDAXI');
otc('JPY', 'OTC_N225');
otc('Spanish', 'OTC_IBEX35');
otc('USD', 'OTC_SPC');
otc('WallStreet', 'OTC_DJI');
otc('USD', 'OTC_NDX');
otc('CHF', 'OTC_SSMI');
otc('HongKong', 'OTC_HSI');
otc('AUD', 'OTC_AS51');

export const ActiveOptionsIconMap = {
    delete: DeleteIcon,
    edit: EditIcon,
};
