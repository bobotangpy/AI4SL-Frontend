import React, { useRef, useEffect } from "react";

const { tableau } = window;

function Tableau() {
    const vizRef = useRef(null);
    // update Tableau Dashboard URL here if needed
    const url = "https://public.tableau.com/shared/G7CWM3MZX"
    const options = {
        device: "desktop",
    };

    useEffect(() => {
        let viz = null;

        function initViz() {
            viz = new tableau.Viz(vizRef.current, url, options);
        }

        function cleanupViz() {
            if (viz) {
                viz.dispose();
                viz = null;
            }
        }

        initViz(); // Initialize the Tableau viz

        return () => {
            cleanupViz(); // Clean up the Tableau viz on component unmount
        };
    }, []);

    return (
        <div>
            <p>Soil Attribute</p>
            <div ref={vizRef}></div>
        </div>
    );
}

export default Tableau;
