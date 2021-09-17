import useWindowWidth from "./hook/useWindowWidth";

function LayoutComponentOne() {
    const smallScreen = useWindowWidth(700);
    return (
        <div className={smallScreen ? 'Small' : 'Large'}>
            <h2>You are browsing on Another component</h2>
        </div>
    );
}

export default LayoutComponentOne;
