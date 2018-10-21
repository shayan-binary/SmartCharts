# SmartCharts

[![npm (scoped)](https://img.shields.io/npm/v/@binary-com/smartcharts.svg)](https://www.npmjs.com/package/@binary-com/smartcharts) [![Build Status](https://travis-ci.org/binary-com/SmartCharts.svg?branch=dev)](https://travis-ci.org/binary-com/SmartCharts)

SmartCharts is both the name of the app ([charts.binary.com](https://charts.binary.com/)) and the charting library. You can install the library to your project via:

    yarn add @binary-com/smartcharts      # Release
    yarn add @binary-com/smartcharts@beta # Beta

**Important Note:** the license for the library is tied to the `binary.com` domain name; it will not work in github pages.

## Commands:
- use `yarn install` to install dependencies
- use `yarn start` to launch webpack dev server
- use `yarn build` to build the library
- use `yarn build:app` to build the [charts.binary.com](https://charts.binary.com/) app
- use `yarn analyze` to run webpack-bundle-analyzer
- use `yarn test` to run unit tests
- use `yarn coverage` to see test coverage

> Note: eventhough both `yarn build` and `yarn build:app` outputs `smartcharts.js` and `smartcharts.css`, **they are not the same files**. One outputs a library and the the other outputs an app.

## Usage 

### Quick Start

In the `app` folder, we provide a working webpack project that uses the smartcharts library. Simply `cd` to that directory and run:

    yarn install
    yarn start

The sample app should be running in http://localhost:8080. 

Refer to library usage inside `app/index.jsx`:

```jsx
import { SmartChart } from '@binary-com/smartcharts';

class App extends React.Component {
    render() {
        return (
            <SmartChart
                onSymbolChange={(symbol) => console.log('Symbol has changed to:', symbol)}
                requestSubscribe={({ tick_history, granularity, ... }, cb) => {}}   // Passes the whole request object
                requestForget={({ tick_history, granularity, ... }, cb) => {}}      // request object and cb is exactly the same reference passed to subscribe
                // for active_symbols, trading_times, ... (NOT streaming)
                requestAPI={({...}) => Promise} // whole request object, shouldn't contain req_id
            />
        );
    }
};
```

SmartCharts expects library user to provide `requestSubscribe`, `requestForget` and `requestAPI`. Refer to [API](#api) for more details.

The job of loading the active symbols or trading times or stream data from cache or retrieving from websocket is therefore NOT the responsibility of SmartCharts but the host application. SmartCharts simply makes the requests and expect a response in return.

Some important notes on your webpack.config.js (refer to `app/webpack.config.js`):

 - smartcharts CSS file will need to be copied from the npm library (remember to include in your `index.html`). 
 - smartcharts consist of a few chunks (which has filenames `*.smartcharts.*`), which it downloads asynchronously during runtime. Therefore, it needs to know where the library user places its chunks via the `setSmartChartsPublicPath` function:
 
 ```js
import { setSmartChartsPublicPath } from '@binary-com/smartcharts';

// SmartCharts chunk are deployed to https://mysite.com/dist/*
setSmartChartsPublicPath('/dist/');
```
 
 We can use the `copy-webpack-plugin` webpack plugin to copy over SmartCharts chunks:
 
 ```js
new CopyWebpackPlugin([
    { from: './node_modules/@binary-com/smartcharts/dist/*.smartcharts.*' },
    { from: './node_modules/@binary-com/smartcharts/dist/smartcharts.css' },
])
```


### API

> Note: Props will take precedence over values set by the library.

Props marked with `*` are **mandatory**:

| Props | Description |
--------|--------------
requestAPI* | SmartCharts will make single API calls by passing the request input directly to this method, and expects a `Promise` to be returned.
requestSubscribe* | SmartCharts will make streaming calls via this method. `requestSubscribe` expects 2 parameters `(request, callback) => {}`: the `request` input and a `callback` in which response will be passed to for each time a response is available. Keep track of this `callback` as SmartCharts will pass this to you to forget the subscription (via `requestForget`).
requestForget* | When SmartCharts no longer needs a subscription (made via `requestSubscribe`), it will call this method (passing in `request` and `callback` passed from `requestSubscribe`) to halt the subscription.
id | Uniquely identifies a chart's indicators, comparisons, symbol and layout; saving them to local storage and loading them when page refresh. If not set, SmartCharts renders a fresh chart with default values on each refresh. Defaults to `undefined`.
symbol | Sets the main chart symbol. Defaults to `R_100`. Refer [Props vs UI](#props-vs-ui) for usage details.
granularity | Sets the granularity of the chart. Allowed values are 60, 120, 180, 300, 600, 900, 1800, 3600, 7200, 14400, 28800, 86400. Defaults to 0. Refer [Props vs UI](#props-vs-ui) for usage details.
chartType | Sets the chartType. Choose between `mountain` (Line), `line` (Dot), `colored_line` (Colored Dot),  `spline`,  `baseline`, `candle`, `colored_bar` (OHLC), `hollow_candle`, `heikinashi`, `kagi`, `linebreak`, `renko`, `rangebars`, and `pandf` (Point & Figure). Defaults to `mountain`. Refer [Props vs UI](#props-vs-ui) for usage details.
startEpoch | Set the start epoch of the chart
endEpoch | Set the end epoch of the chart
chartControlsWidgets | Render function for chart control widgets. Refer to [Customising Components](#customising-components).
topWidgets | Render function for top widgets. Refer to [Customising Components](#customising-components).
isMobile | Switch between mobile or desktop view. Defaults to `false`.
onSettingsChange | Callback that will be fired each time a setting is changed.
settings | Sets the chart settings. Refer to [Chart Settings](#chart-settings)
barriers | Draw chart barriers. Refer to [Barriers API](#barriers-api) for usage details
enableRouting | Enable routing for dialogs. Defaults to `false`
isConnectionOpened | Sets the connection status. If set, upon reconnection smartcharts will either patch missing tick data or refresh the chart, depending on granularity; if not set, it is assumed that connection is always opened. Defaults to `undefined`.
onMessage | SmartCharts will send notifications via this callback, should it be provided. Each notification will have the following structure: `{ text, type, category }`.

### Chart Settings

| Attribute | Description |
--------|--------------
countdown | Show Countdown. Defaults to `false`.
theme | Sets the chart theme. themes are (`dark\|light`), and default is `light`.
lang | Sets the language. Defaults to `en`.
position | Sets the position of the chart controls. Choose between `left` and `bottom`. In mobile this is always `bottom`. Defaults to `bottom`.
assetInformation | Show or hide the asset information. In mobile this will be always be `false`. Defaults to `true`.

#### Barriers API

`barriers` props accepts an array of barrier configurations:

```jsx
<SmartChart
    barriers={[{
        color:'green',
        shade:'above',
        hidePriceLines: false, // default false
        onChange:console.warn.bind(console),
    }]}
/>
```

Attributes marked with `*` are **mandatory**:

| Attribute | Description |
--------|--------------
shadeColor | Barrier shade color. Defaults to `green`.
color | Price line color. Defaults to `#000`.
shade | Shade type; choose between `NONE_SINGLE`, `NONE_DOUBLE`, `ABOVE`, `BELOW`, `OUTSIDE` or `BETWEEN`. Defaults to `NONE_SINGLE`.
hidePriceLines | hide/show the price lines. Defaults to `false`.
lineStyle | Sets the style of the price lines; choose between `dotted`, `dashed`, or `solid`. Defaults to `dashed`.
onChange | When price of high or low barrier changes (including when switched toggling `relative` or setting `high\|low`), `onChange` will pass the high and low barriers as `{ high, low }`.
relative | Toggle between relative and absolute barriers. Defaults to `false`.
draggable | Toggles whether users can drag the price lines and change the barrier directly from the chart. Defaults to `true`.
high* | Sets the price of the high barrier.
low* | Sets the price of the low barrier.

#### Marker API

Markers provide a way for developers to place DOM elements inside the chart that are positioned based on date, values or tick location. Unlike [CharIQ's Markers](http://documentation.chartiq.com/tutorial-Markers.html#main), we only allow markers to be placed on the main chart. Also note that this Marker implementation does not factor the width and height of the marker; this is expensive to calculate, so we expect you to offset this in CSS.

```jsx
<SmartChart>
    <Marker
        x={1533192979}
        yPositioner="none"
        className="chart-line vertical trade-start-line"
    >
        {/* Place marker content here */}
        <div className="drag-line" />
        <div className="trade-text">Trade Start</div>
    </Marker>
</SmartChart>
```

| Attribute | Description |
--------|--------------
className | Adds custom class name to marker. All markers have class name `stx-marker`.
x | x position of the chart; depends on `xPositioner`.
xPositioner | Determines x position. Choose between `epoch` or `none`. Defaults to `epoch`.
y | y position of the chart; depends on `yPositioner`.
yPositioner | Determines y position. Choose between `value` or `none`. Defaults to `value`.

There are more options for `xPositioner` and `yPositioner` in [ChartIQ docs](http://documentation.chartiq.com/CIQ.Marker.html#main). What we document here is the most common use case.


### Customising Components

We offer library users full control on deciding which of the top widgets and chart control buttons to be displayed by overriding the render methods themselves. To do this you pass in a function to `chartControlsWidgets` or `topWidgets`.

For example, we want to remove all the chart control buttons, and for top widgets to just show the comparison list (refer `app/index.jsx`):

```jsx
import { ComparisonList } from '@binary-com/smartcharts';

const renderTopWidgets = () => (
    <React.Fragment>
        <div>Hi I just replaced the top widgets!</div>
        <ComparisonList />
    </React.Fragment>
);

const App = () => (
    <SmartChart
        topWidgets={renderTopWidgets}
        chartControlsWidgets={()=>{}}
    >
    </SmartChart>
);
```

Here are the following components you can import:
 - Top widgets:
    - `<ChartTitle enabled={true} onChange={(symbol) => {}} />`
    - `<AssetInformation />`
    - `<ComparisonList />`
 - Chart controls:
    - `<CrosshairToggle enabled={true} />`
    - `<ChartTypes enabled={true} onChange={(chartType) => {}} />`
    - `<StudyLegend />`
    - `<Comparison />`
    - `<DrawTools />`
    - `<Views />`
    - `<Share />`
    - `<Timeperiod enabled={true} onChange={(chartType) => {}} />`
    - `<ChartSize />`
    - `<ChartSetting />`
 
 ### Props vs UI
 
Certain chart parameters can be set either by props or from the chart UI:
  
   - `symbol` - set by `<ChartTitle />`
   - `granularity` - set by `<TimePeriod >`
   - `chartType` - set by `<ChartTypes />`
  
  This creates conflicts in deciding which is the single source of truth. To circumvent this, if these props are set (not `undefined`), selecting options in its corresponding components will not have any affect affect on the chart; the prop values take precedence. To have control over both the UI and the props, we provide library users the option to _override_ component behaviour via `onChange` prop. For example, to retrieve the symbol a client chooses:
 
 ```jsx
<ChartTitle
    onChange={(symbol) => { /* ...Pass to symbol prop in <SmartCharts /> */ }}
/>
```
 
 See available components and their props in [Customising Components](#customising-components).
 
## Contribute

To contribute to SmartCharts, fork this project and checkout the `dev` branch. When adding features or performing bug fixes, it is recommended you make a separate branch off `dev`. Prior to sending pull requests, make sure all unit tests passed:

    yarn test

Once your changes have been merged to `dev`, it will immediately deployed to [charts.binary.com/beta](https://charts.binary.com/beta/). 

## Developer Notes

### Developer Workflow

We organise the development in Trello. Here is the standard workflow of how a feature/bug fix is added:

 1. When an issue/feature is raised, it is added to `Backlog` list. For each card added, it should have a "QA Checklist" (Add checklist to card) for QA to verify that the feature/bug fix has been successfully implemented.
 2. In a meeting, if feature/bug fix is set to be completed for next release, it will be labeled as `Next Release` and placed in `Bugs/Todo` list.
 3. Cards are assigned to developers by adding them to the card; manager gets added to every card.
 4. If a developer is actively working on a card, he places the card in `In Development`; otherwise it should be placed back into `Bugs/Todo` list.
 5. Once the feature/bug fix is implemented, the developer needs put 2 things in the card before placing his card in `Review` list.:
     - **PR**: Link to the PR.
     - **Test Link**: Link to github pages that has the changes; this is for QA to verify. Refer to [this section](#deploy-to-github-pages) for instructions on how to deploy.
 6. If reviewer requests changes, he will place the card back to the `In Development` list. This back and forth continues until the reviewer passes the PR by marking it as `approved` in Github.
 7. Reviewer places the reviewed card into `QA` list.
 8. If the card fails QA check, QA can comment on the card on what failed, and place the card back to `In Development` list. If QA passes the changes, QA will place the card from `QA` to `Ready`; this card is now ready to be merged to `dev`. 
 9. Once the card is merged to `dev`, it is placed in `Deployed to BETA` list.
 10. When it is time to take all changes in `beta` and deploy in production, manager will merge `dev` into `master`, and place all cards in `Deployed to BETA` to `Released`.

### Debugging NPM Package

Some issues only show up for library users, so it is helpful to test the NPM package before deploying it to library users. You can do this by building the library directly into the node_modules directory of an app that uses the SmartCharts library. For example to test the library build on binary-static you can execute:

    yarn watch --output-path '../binary-static/node_modules/@binary-com/smartcharts/dist'

Now each time you make any change, it will overwrite the SmartCharts library inside the `node_modules` folder. 

### Separation of App and Library

There should be a clear distinction between developing for app and developing for library. Library source code is all inside `src` folder, whereas app source code is inside `app`.

Webpack determines whether to build an app or library depending on whether an environment variable `BUILD_MODE` is set to `app`. Setting this variable switches the entry point of the project (app build mode uses `app/index.jsx` while library uses `src/index.js`). We do it this way to develop the app to have hot reload available when we modify library files.

### Translations

All strings that need to be translated must be inside `t.translate()`:

```js
t.translate('[currency] [amount] payout if the last tick.', { 
    currency: 'USD',
    amount: 43.12
});
t.setLanguage('fr'); // components need to be rerendered for changes to take affect
```

Each time a new translation string is added to the code, you need to update the `messages.pot` via:

    yarn translations

Once the new `messages.pot` is merged into the `dev` branch, it will automatically be updated in [CrowdIn](https://crowdin.com/project/smartcharts/settings#files). You should expect to see a PR with the title **New Crowdin translations**
 in a few minutes; this PR will update the `*.po` files.
 
 ### Dealing With SVGs
 
 SmartCharts has 2 ways of utilizing SVG files: as CSS background image and as external SVG.
 
##### CSS Background Image SVG

These SVG are added inline into the CSS via [postcss-inline-svg](https://github.com/TrySound/postcss-inline-svg). Currently the only place where this is used is the loader, because if the external SVG is not loaded yet we would at least want a loading screen to be present.
 
 ##### External SVG
 
 The SVG files included in the `js` and `jsx` files are automatically put together into a sprite sheet. Manipulating external SVG can be tricky - developers can only control stroke and fill color of the whole SVG file via CSS:
 
 ```scss
.ic-icon.active {
    svg {
        stroke: #2e8836;
        fill: #ff3d38;
    }
}
```
 
 **Important Note:** These stroke and fill colors will not be affected by CSS if the corresponding attributes are declared in the SVG file. Therefore, it is not uncommon SmartCharts developers would need to tweak the SVG files by hand to be able to manipulate its color. 
 
 This has much less freedom compared to [inline SVG](https://github.com/MoOx/react-svg-inline) where a developer can control individual parts of the SVG, but having external SVG results in a much smaller library, and allows parts of the code not rendered by React to use them. External SVG is also cached by the browser (using shadow DOM), so though the same SVG may be used multiple times, only one copy exists in the DOM.

 
 ### State Management and the `connect` Method
 
 SmartCharts uses a variation of [Mobdux](https://medium.com/@cameronfletcher92/mobdux-combining-the-good-parts-of-mobx-and-redux-61bac90ee448) to assist with state management using Mobx.
 
 Each component consists of 2 parts: a **template** (`*.jsx` file), and a **store** (`*Store.js` file). There are 3 scenarios in which the [`connect`](https://github.com/binary-com/SmartCharts/blob/dev/src/store/Connect.js) method is used:
 
#####  1. Main Components: The component is tied directly to the main store.

Examples: `<ChartTitle />`, `<TimePeriod />`, `<Views />`...

Each component here is mapped to a corresponding store in the main store. **Only one copy of this component may exist per `<SmartChart />` instance**, and its state is managed by the main store tree (defined as `mainStore` in SmartCharts). Here you pass a `mapperFunction` that would be applied directly to the main store:
  
```jsx

function mapperFunction(mainStore) {
    return {
        value: mainStore.subStore.value,
    }
}

export default connect(mapperFunction)(MyComponent);
```

Connections in the scenario #1 should be done in the `jsx` file, to keep consistent with other components. Except for the component tied to the main store (`Chart.jsx`), all components using this method should be SFC (Stateless Functional Components), and have the lifecycle managed by the main store.

##### 2. Subcomponents: Component is connected inside a store

Examples: `<Menu />`, `<List />`, `<CategoricalDisplay />`...

This is used when multiple copies of a store needs to exist in the same state tree. Here we do the connection inside the constructor of a child of the main store and pass it as a prop to the template. For example `<ChartTitle />` needs a `<Menu />`, so in `ChartTitleStore` we create an instance of `MenuStore` and connect it:

```js
export default class ChartTitleStore {
    constructor(mainStore) {
        this.menu = new MenuStore(mainStore);
        this.ChartTitleMenu = this.menu.connect(Menu);
        // ...
    }
    // ...    
}
```

The `connect` method for subcomponents are defined in its store (instead of the template file) that contains its own `mapperFunction`:

```js
export default class MenuStore {
    // ...
    connect = connect(() => ({
        setOpen: this.setOpen,
        open: this.open,
    }))
}
```

We then pass the connected component in `ChartTitle.jsx`:

```js
export default connect(({ chartTitle: c }) => ({
    ChartTitleMenu: c.ChartTitleMenu,
}))(ChartTitle);
```

> **Note**: Do NOT connect subcomponents in another connect method; `connect` creates a new component each time it is called, and a `mapperFunction` is called every time a mobx reaction or prop update is triggered.

##### 3. Independent Components: components that are not managed by the main store

Examples: `<Barrier />`, `<Marker />`

Independent components is able to access the main store, but the main store has no control over independent components. As such, each independent component manages its own life cycle. Here is the interface for its store:

```js
class IndependentStore {
    constructor(mainStore) {}
    updateProps(nextProps) {} // intercept the props from the component
    destructor()           {} // called on componentWillUnmount
}
```

This enables library users to use multiple copies of a component without connecting it, because mounting an independent component will also create its own store (refer to [`Marker API`](#marker-api) to see usage example of such a component). Therefore, for each independent component you connect you will also need to pass its store class (not an instance but the class itself) as a second parameter to the `connect` function:

```jsx
function mapperFunction(customStore) {
    return {
        value: customStore.value,
    }
}

export default connect(
    mapperFunction,
    MyStoreClass, // Required argument for independent components
)(MyIndependentComponent);
```

Note that **for independent components, the `mapperFunction` is applied to the store instance**, not the main store. Should you need to access any value from the main store, you can do this via the `mainStore` passed to the constructor of each independent store class.

## Manual Deployment

### Deploy to NPM

To publish to production:

    yarn build && yarn publish

To publish to beta:

    yarn build && yarn publish --tag beta

### Deploy to [charts.binary.com](https://charts.binary.com/)

> Note: This is usually not required, since Travis will automatically deploy to [charts.binary.com](https://charts.binary.com/) and [charts.binary.com/beta](https://charts.binary.com/beta/) when `master` and `dev` is updated.

The following commands will build and deploy to charts.binary.com (*Make sure you are in the right branch!*); you will need push access to this repository for the commands to work:

    yarn deploy:beta        # charts.binary.com/beta
    yarn deploy:production  # charts.binary.com

### Deploy to Github Pages

As ChartIQ license is tied to the `binary.com` domain name, we provide developers with a `binary.sx` to test out the library on their Github Pages.

For each feature/fix you want to add we recommend you deploy an instance of SmartCharts for it (e.g. `brucebinary.binary.sx/featureA`, `brucebinary.binary.sx/featureB`). To deploy SmartCharts to your github pages, you first need to setup your `gh-pages` branch:

 1. Make sure you have a `binary.sx` subdomain pointed to your `github.io` page first (e.g. `brucebinary.binary.sx -> brucebinary.github.io`). 
 2. In your `gh-pages` branch, add a `CNAME` in your project root folder, and push that file to your branch, for example:
 
 ```bash
 git checkout -b gh-pages origin/gh-pages # if you already checkout from remote execute: git checkout gh-pages
 echo 'brucebinary.binary.sx' > CNAME # substitute with your domain
 git add --all
 git commit -m 'add CNAME'
 git push origin gh-pages
 ```
 
Here on, to deploy a folder (e.g. `myfoldername`):

    yarn build-travis && yarn gh-pages:folder myfoldername

Now you should be able to see your SmartCharts app on `brucebinary.binary.sx/myfoldername`.

Alternatively you can deploy directly to the domain itself (note that this **erases all folders**; could be useful for cleanup). In our example, the following command will deploy to `brucebinary.binary.sx`:

    yarn build-travis && yarn gh-pages

> Note: `yarn build-travis` will add hashing inside `index.html`; **do not push those changes to git!**
